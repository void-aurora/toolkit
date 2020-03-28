import pth from 'path';
import chalk from 'chalk';
import { TaskFunction, logger } from 'just-task';

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-named-default */
import * as _rollup from 'rollup';

import * as _rollupNodeResolve from '@rollup/plugin-node-resolve';
import * as _rollupCommonJS from '@rollup/plugin-commonjs';

import * as _rollupJson from '@rollup/plugin-json';
import * as _rollupReplace from '@rollup/plugin-replace';

import * as _rollupTypeScript2 from 'rollup-plugin-typescript2';
import { IOptions as TsIOptions } from 'rollup-plugin-typescript2/dist/ioptions';
import { Partial as TsPartial } from 'rollup-plugin-typescript2/dist/partial';

import * as _rollupTerser from 'rollup-plugin-terser';

import {
  tryRequireMulti,
  logMissingPackages,
  normalizeArray,
  applyPostfix,
  pathsToString,
} from '../utils';

export interface RollupTaskOptions {
  inputOptions: _rollup.InputOptions;
  outputOptions: _rollup.OutputOptions | _rollup.OutputOptions[];
}

/**
 * Creates a just task for rollup.
 * @requires rollup 2.0+
 */
export const rollupTask = (options: RollupTaskOptions): TaskFunction => {
  return async function rollupTaskFunction(): Promise<void> {
    const {
      missing,
      packages: { rollup },
    } = tryRequireMulti<{ rollup: typeof _rollup }>({ rollup: 'rollup' });

    if (missing.length > 0) {
      logMissingPackages(missing);
      return;
    }

    const { inputOptions, outputOptions: outputOptionsRaw } = options;
    const outputOptions = normalizeArray(outputOptionsRaw);

    logger.verbose(
      '[rollup]',
      chalk.greenBright(pathsToString(inputOptions.input)),
      '→',
      chalk.greenBright(pathsToString(outputOptions.map(opts => opts.file as string))),
    );

    const bundle = await rollup.rollup(inputOptions);
    await Promise.all(
      outputOptions.map(async output => {
        await bundle.write(output);
        logger.verbose('[rollup]', 'created', chalk.greenBright(output.file));
      }),
    );
  };
};

const presetFormatMap = {
  cjs: 'cjs',
  esm: 'es',
  'esm-browser': 'es',
  global: 'iife',
} as const;

type PresetFormatMap = typeof presetFormatMap;

export type RollupTypeScriptTaskPreset = keyof PresetFormatMap;

export type RollupTypeScriptTaskEnv = 'dev' | 'prod';

export interface RollupTypeScriptTaskOptions {
  input: string;
  output: string;
  cwd?: string;

  preset: RollupTypeScriptTaskPreset;
  env: RollupTypeScriptTaskEnv;

  /**
   *
   */
  postfix?: string;

  /**
   * Global exports name.
   */
  exportsName?: string;

  /**
   * Specify packages witch excludes to rollup.
   */
  external?: _rollup.ExternalOption;

  /**
   * Extra rollup plugins to append.
   */
  extraPlugins?: _rollup.Plugin[];

  rollupNodeResolveOptions?: _rollupNodeResolve.Options;
  rollupCommonJSOptions?: _rollupCommonJS.RollupCommonJSOptions;
  rollupJsonOptions?: _rollupJson.RollupJsonOptions;
  rollupReplaceOptions?: _rollupReplace.RollupReplaceOptions;
  rollupTypeScript2Options?: TsPartial<TsIOptions>;
  rollupTerserOptions?: _rollupTerser.Options;

  inputOptionsOverride?: _rollup.InputOptions;
  outputOptionsOverride?: _rollup.OutputOptions;
}

export const rollupTypeScriptTask = (options: RollupTypeScriptTaskOptions): TaskFunction => {
  return async function rollupTypeScriptTaskFunction(): Promise<void> {
    const {
      missing,
      packages: {
        rollupNodeResolve,
        rollupCommonJS,
        rollupJson,
        rollupReplace,
        rollupTypeScript2,
        rollupTerser: { terser: rollupTerser },
      },
    } = tryRequireMulti<{
      rollup: typeof _rollup;
      rollupNodeResolve: typeof _rollupNodeResolve.default;
      rollupCommonJS: typeof _rollupCommonJS.default;
      rollupJson: typeof _rollupJson.default;
      rollupReplace: typeof _rollupReplace.default;
      rollupTypeScript2: typeof _rollupTypeScript2.default;
      rollupTerser: typeof _rollupTerser;
    }>({
      rollup: 'rollup',
      rollupNodeResolve: '@rollup/plugin-node-resolve',
      rollupCommonJS: '@rollup/plugin-commonjs',
      rollupJson: '@rollup/plugin-json',
      rollupReplace: '@rollup/plugin-replace',
      rollupTypeScript2: 'rollup-plugin-typescript2',
      rollupTerser: 'rollup-plugin-terser',
    });

    if (missing.length > 0) {
      logMissingPackages(missing);
      return;
    }

    const {
      preset,
      env,
      input: inputRaw,
      output: outputRaw,
      cwd = process.cwd(),
      postfix,

      exportsName,
      external,

      extraPlugins = [],

      rollupNodeResolveOptions,
      rollupCommonJSOptions,
      rollupJsonOptions,
      rollupReplaceOptions,
      rollupTypeScript2Options,
      rollupTerserOptions,

      inputOptionsOverride,
      outputOptionsOverride,
    } = options;

    const input = pth.resolve(cwd, inputRaw);
    const output = pth.resolve(cwd, applyPostfix(outputRaw, `${preset}.${postfix ?? env}`));

    const task = rollupTask({
      inputOptions: {
        input,
        external:
          external ??
          (preset === 'cjs' || preset === 'esm'
            ? id => !id.startsWith('.') && !pth.isAbsolute(id)
            : undefined),
        ...inputOptionsOverride,
        plugins: [
          rollupNodeResolve({
            preferBuiltins: true,
            browser: true,
            ...rollupNodeResolveOptions,
          }),
          rollupCommonJS(rollupCommonJSOptions),

          rollupJson({
            preferConst: outputOptionsOverride?.preferConst ?? true,
            ...rollupJsonOptions,
          }),

          rollupTypeScript2({
            cacheRoot: `node_modules/.rts2.cache/${inputRaw}/${preset}/${env}`,
            ...rollupTypeScript2Options,

            tsconfigOverride: {
              ...rollupTypeScript2Options?.tsconfigOverride,
              compilerOptions: {
                sourceMap: env === 'dev',
                noEmit: false,
                declaration: false,
                declarationMap: false,
                emitDeclarationOnly: false,
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                ...rollupTypeScript2Options?.tsconfigOverride?.compilerOptions,
              },
            },
          }),

          rollupReplace(rollupReplaceOptions),

          ...(preset !== 'cjs' && env === 'prod' ? [rollupTerser(rollupTerserOptions)] : []),

          ...extraPlugins,
        ],
      },
      outputOptions: {
        file: output,
        format: presetFormatMap[preset],
        name: exportsName,
        preferConst: true,
        externalLiveBindings: false,
        sourcemap: env === 'dev',
        ...outputOptionsOverride,
      },
    });

    await (task as () => Promise<void>)();
  };
};
