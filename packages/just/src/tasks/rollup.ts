import pth from 'path';
import fse from 'fs-extra';
import globby from 'globby';
import { TaskFunction, logger } from 'just-task';

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-named-default */
import { default as _rollup, RollupOptions, InputOption } from 'rollup';

import { default as _rollupPluginCommonjs } from '@rollup/plugin-commonjs';
import { default as _rollupPluginNodeResolve } from '@rollup/plugin-node-resolve';
import { default as _rollupPluginJson } from '@rollup/plugin-json';
import { default as _rollupPluginReplace } from '@rollup/plugin-replace';

import { default as _rollupPluginTypeScript2 } from 'rollup-plugin-typescript2';
import { default as _rollupPluginTerser } from 'rollup-plugin-terser';

import { tryRequire, replaceExtName, asyncParallel, VerbosePool, pathsToString } from '../utils';

export interface RollupTaskOptions {
  rollupOptions: RollupOptions;
}

/**
 * Creates a just task for rollup.
 * @requires rollup 2.0+
 */
export const rollupTask = (options: RollupTaskOptions): TaskFunction => {
  return async function rollupTaskFunction(): Promise<void> {
    const rollup = tryRequire<typeof _rollup>('rollup');

    if (!rollup) {
      logger.warn('The package `rollup` is not installed, so this task has no effect.');
      return;
    }

    const { rollupOptions } = options;

    await rollup.rollup(rollupOptions);
  };
};

export interface RollupTypeScriptTaskOptions {
  /**
   * Path to entry files.
   * @default 'src/index.ts'
   */
  input?: InputOption;

  /**
   * Resolves rollup options between invoke.
   * Uses to insert plugins or other operations on options.
   */
  resolveRollupOptions?: (opts: RollupOptions) => RollupOptions;
}

/**
 * Creates a just task for rollup typescript with a series of plugins.
 */
export const rollupTypeScriptTask = (options: RollupTypeScriptTaskOptions): TaskFunction => {
  return async function rollupTypeScriptTaskFunction(): Promise<void> {
    const rollup = tryRequire<typeof _rollup>('rollup');

    const pluginCommonjs = tryRequire<typeof _rollupPluginCommonjs>('@rollup/plugin-commonjs');
    const pluginResolve = tryRequire<typeof _rollupPluginNodeResolve>(
      '@rollup/plugin-node-resolve',
    );
    const pluginJson = tryRequire<typeof _rollupPluginJson>('@rollup/plugin-json');
    const pluginReplace = tryRequire<typeof _rollupPluginReplace>('@rollup/plugin-replace');

    const pluginTypeScript2 = tryRequire<typeof _rollupPluginTypeScript2>(
      'rollup-plugin-typescript2',
    );
    const pluginTerser = tryRequire<typeof _rollupPluginTerser>('rollup-plugin-terser');

    if (
      !rollup ||
      !pluginCommonjs ||
      !pluginResolve ||
      !pluginJson ||
      !pluginReplace ||
      !pluginTerser ||
      !pluginTypeScript2
    ) {
      const packages = pathsToString([
        'rollup',
        '@rollup/plugin-commonjs',
        '@rollup/plugin-node-resolve',
        '@rollup/plugin-json',
        '@rollup/plugin-replace',
        'rollup-plugin-typescript2',
        'rollup-plugin-terser',
      ]);
      logger.warn(`One of packages ${packages} is not installed, so this task has no effect`);
      return;
    }

    const { input, resolveRollupOptions } = options;

    let rollupOptions: RollupOptions = {
      input,
    };

    if (resolveRollupOptions) {
      rollupOptions = resolveRollupOptions(rollupOptions);
    }

    // TODO
    await rollup.rollup(rollupOptions);
  };
};
