import pth from 'path';
import chalk from 'chalk';
import { TaskFunction, logger } from 'just-task';

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-named-default */
import * as _rollup from 'rollup';

// https://github.com/rollup/plugins/issues/295
// import * as _rollupAlias from '@rollup/plugin-alias';
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

function resolveRollupInputOption(cwd: string, input: _rollup.InputOption): _rollup.InputOption {
  if (typeof input === 'string') {
    return pth.resolve(cwd, input);
  }
  if (Array.isArray(input)) {
    return input.map(p => pth.resolve(cwd, p));
  }
  return Object.fromEntries(Object.entries(input).map(([n, p]) => [n, pth.resolve(cwd, p)]));
}

async function rollupBuild(
  rollup: typeof _rollup,
  inputOptions: _rollup.InputOptions,
  outputOptions: _rollup.OutputOptions[],
  cwd: string,
): Promise<_rollup.RollupBuild> {
  logger.verbose(
    '[rollup]',
    chalk.greenBright(pathsToString(inputOptions.input, cwd)),
    '→',
    chalk.greenBright(
      pathsToString(
        outputOptions.map(opts => opts.file as string),
        cwd,
      ),
    ),
    'in',
    chalk.yellow(cwd),
  );

  const bundle = await rollup.rollup(inputOptions);
  await Promise.all(
    outputOptions.map(async output => {
      await bundle.write(output);
      logger.verbose('[rollup]', 'created', chalk.greenBright(output.file));
    }),
  );
  return bundle;
}

export interface RollupTaskOptions {
  /**
   * Rollup input options.
   */
  inputOptions: _rollup.InputOptions;

  /**
   * Rollup output options.
   */
  outputOptions: _rollup.OutputOptions | _rollup.OutputOptions[];

  /**
   * The current working directory in which to search.
   */
  cwd?: string;
}

/**
 * Creates a just task for rollup.
 * @requires rollup 2.0+
 */
export const rollupTask = (options: RollupTaskOptions): TaskFunction => {
  return async function rollupTaskFunction(): Promise<void> {
    const { inputOptions, outputOptions: outputOptionsRaw, cwd = process.cwd() } = options;
    const outputOptions = normalizeArray(outputOptionsRaw);

    const { input: inputRaw = 'src/index.js' } = inputOptions;
    const input = resolveRollupInputOption(cwd, inputRaw);

    const {
      missing,
      packages: { rollup },
    } = tryRequireMulti<{ rollup: typeof _rollup }>({ rollup: 'rollup' }, cwd);

    if (missing.length > 0) {
      logMissingPackages(missing);
      return;
    }

    await rollupBuild(
      rollup,
      {
        ...inputOptions,
        input,
      },
      outputOptions.map(oo => ({
        ...oo,
        file: pth.resolve(cwd, oo.file as string),
      })),
      cwd,
    );
  };
};

export type RollupTypeScriptTaskPreset = 'cjs' | 'esm' | 'esm-browser' | 'global';

const presetFormatMap: Record<RollupTypeScriptTaskPreset, _rollup.ModuleFormat> = {
  cjs: 'cjs',
  esm: 'es',
  'esm-browser': 'es',
  global: 'iife',
};

export type RollupTypeScriptTaskEnv = 'dev' | 'prod' | 'development' | 'production';

export interface RollupTypeScriptTaskOptions {
  /**
   * The path to the input fil.
   * @default 'src/index.ts'
   */
  input: string;

  /**
   * Tha path to the output file.
   * @default 'dist/index.js'
   */
  output: string;

  /**
   * The current working directory in which to search.
   */
  cwd?: string;

  /**
   * Preset name.
   *
   * - `cjs`: output CommonJS modules for node.js
   * - `esm`: output ES modules for bundler tools (like webpack, rollup and parcel), excludes all external modules automatically.
   * - `esm-browser`: output ES modules for browser, inline all external modules automatically.
   * - `global`: output **iife** modules for browser, need to provide the option `exportsName` for rollup output `name`, inline all external modules automatically.
   *
   * The external detector could be override by the option `inputOptionsOverride`.
   */
  preset: RollupTypeScriptTaskPreset;

  /**
   * Specify output for development or production.
   *
   * - `dev`: output with source map.
   * - `prod`: the output will be minified via `terser`.
   *
   * `__DEV__` and `__PROD__` will be automatically replaced with boolean value,
   * could be override with `rollupReplaceOptions.values`
   */
  env: RollupTypeScriptTaskEnv;

  /**
   * Postfix append to basename of files, default value is the options `${preset}.${env}`
   * Set to `false` to disable postfix.
   */
  postfix?: string | false;

  /**
   * Global exports name.
   */
  exportsName?: string;

  /**
   * Overrides rollup options except `input` and `plugins`.
   */
  inputOptionsOverride?: _rollup.InputOptions;

  /**
   * Overrides rollup options except `file`.
   */
  outputOptionsOverride?: _rollup.OutputOptions;

  /**
   * Extra rollup plugins to append.
   */
  extraPlugins?: _rollup.Plugin[];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rollupAliasOptions?: any;
  rollupNodeResolveOptions?: _rollupNodeResolve.Options;
  rollupCommonJSOptions?: _rollupCommonJS.RollupCommonJSOptions;
  rollupJsonOptions?: _rollupJson.RollupJsonOptions;
  rollupReplaceOptions?: _rollupReplace.RollupReplaceOptions;
  rollupTypeScript2Options?: TsPartial<TsIOptions>;
  rollupTerserOptions?: _rollupTerser.Options;
}

/**
 * Creates a just task with the specified preset.
 */
export const rollupTypeScriptTask = (options: RollupTypeScriptTaskOptions): TaskFunction => {
  return async function rollupTypeScriptTaskFunction(): Promise<void> {
    const {
      preset,
      env,
      input: inputRaw,
      output: outputRaw,
      cwd = process.cwd(),
      postfix,

      exportsName,

      inputOptionsOverride,
      outputOptionsOverride,
      extraPlugins = [],

      rollupAliasOptions,
      rollupNodeResolveOptions,
      rollupCommonJSOptions,
      rollupJsonOptions,
      rollupReplaceOptions,
      rollupTypeScript2Options,
      rollupTerserOptions,
    } = options;

    const isProd = env === 'prod' || env === 'production';
    const isDev = !isProd;
    const preferConst = true;

    const input = pth.resolve(cwd, inputRaw);
    const output = pth.resolve(
      cwd,
      postfix === false
        ? outputRaw
        : applyPostfix(
            outputRaw,
            postfix === undefined || postfix === '' ? `${preset}.${env}` : postfix,
          ),
    );

    const {
      missing,
      packages: {
        rollup,
        rollupAlias,
        rollupNodeResolve,
        rollupCommonJS,
        rollupJson,
        rollupReplace,
        rollupTypeScript2,
        rollupTerser: { terser: rollupTerser },
      },
    } = tryRequireMulti<{
      rollup: typeof _rollup;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      rollupAlias: _rollup.PluginImpl<any>;
      rollupNodeResolve: typeof _rollupNodeResolve.default;
      rollupCommonJS: typeof _rollupCommonJS.default;
      rollupJson: typeof _rollupJson.default;
      rollupReplace: typeof _rollupReplace.default;
      rollupTypeScript2: typeof _rollupTypeScript2.default;
      rollupTerser: typeof _rollupTerser;
    }>(
      {
        rollup: 'rollup',
        rollupAlias: '@rollup/plugin-alias',
        rollupNodeResolve: '@rollup/plugin-node-resolve',
        rollupCommonJS: '@rollup/plugin-commonjs',
        rollupJson: '@rollup/plugin-json',
        rollupReplace: '@rollup/plugin-replace',
        rollupTypeScript2: 'rollup-plugin-typescript2',
        rollupTerser: 'rollup-plugin-terser',
      },
      cwd,
    );

    if (missing.length > 0) {
      logMissingPackages(missing);
      return;
    }

    const inputOptions: _rollup.InputOptions = {
      external:
        preset === 'cjs' || preset === 'esm'
          ? id => !id.startsWith('.') && !pth.isAbsolute(id)
          : undefined,

      ...inputOptionsOverride,

      input,

      plugins: [
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        rollupAlias(rollupAliasOptions),

        rollupNodeResolve({
          preferBuiltins: true,
          browser: true,
          ...rollupNodeResolveOptions,
        }),

        rollupCommonJS(rollupCommonJSOptions),

        rollupJson({
          preferConst: outputOptionsOverride?.preferConst ?? preferConst,
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

        rollupReplace({
          ...rollupReplaceOptions,
          values: {
            /* eslint-disable */
            __DEV__: `${isDev}`,
            __PROD__: `${isProd}`,
            /* eslint-enable */
            ...rollupReplaceOptions?.values,
          },
        }),

        ...(preset !== 'cjs' && isProd ? [rollupTerser(rollupTerserOptions)] : []),

        ...extraPlugins,
      ],
    };

    const outputOptions: _rollup.OutputOptions = {
      format: presetFormatMap[preset],
      name: exportsName,
      preferConst,
      externalLiveBindings: false,
      sourcemap: env === 'dev',

      ...outputOptionsOverride,

      file: output,
    };

    await rollupBuild(rollup, inputOptions, [outputOptions], cwd);
  };
};
