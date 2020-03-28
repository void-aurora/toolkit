import pth from 'path';
import fse from 'fs-extra';
import globby from 'globby';
import chalk from 'chalk';
import { TaskFunction, logger } from 'just-task';

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-named-default */
import { default as _sass, Options as SassRenderOptions, Result as SassRenderResult } from 'sass';
import { default as _postcss } from 'postcss';
import { default as _autoprefixer } from 'autoprefixer';

import { tryRequireMulti, logMissingPackages, replaceExtName, asyncParallel } from '../utils';

async function sassAsyncRender(
  sass: typeof _sass,
  options: SassRenderOptions,
): Promise<SassRenderResult> {
  return new Promise((resolve, reject) => {
    sass.render(options, (error, result) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(result);
    });
  });
}

export interface SassTaskOptions {
  /**
   * Glob patterns to search files.
   * @default '**\/*.scss'
   */
  patterns?: string | string[];

  /**
   * Input directory.
   * @default 'sass'
   */
  input?: string;

  /**
   * Output directory.
   * @default 'dist'
   */
  output?: string;

  /**
   * The current working directory in which to search.
   */
  cwd?: string;

  limit?: number;

  /**
   * The options for sass.render(), note that the property `file` will be ignore.\
   * By default, the task will resolve `node_modules` in `cwd` for `includePaths` automatically.
   */
  sassRenderOptions?: SassRenderOptions;

  /**
   * Automatically uses `autoprefixer` in postcss or not.
   * @default true
   */
  useAutoprefixer?: boolean;

  /**
   * Extra plugins of `postcss`.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  postcssPlugins?: any[];
}

/**
 * Create task function for sass.
 * @requires sass (dart-sass, not node-sass)
 * @requires postcss
 * @requires autoprefixer
 */
export const sassTask = (options: SassTaskOptions = {}): TaskFunction => {
  return async function sassTaskFunction(): Promise<void> {
    const {
      missing,
      packages: { sass, postcss, autoprefixer },
    } = tryRequireMulti<{
      sass: typeof _sass;
      postcss: typeof _postcss;
      autoprefixer: typeof _autoprefixer;
    }>({
      sass: 'sass',
      postcss: 'postcss',
      autoprefixer: 'autoprefixer',
    });

    if (missing.length > 0) {
      logMissingPackages(missing);
      return;
    }

    const {
      patterns = '**/*.scss',
      input: inputRaw = 'sass',
      output: outputRaw = 'dist',
      cwd = process.cwd(),
      limit,
      sassRenderOptions: sassRenderOptionsRaw = {},
      useAutoprefixer = true,
      postcssPlugins = [],
    } = options;
    const input = pth.resolve(cwd, inputRaw);
    const output = pth.resolve(cwd, outputRaw);
    const sassRenderOptions = {
      includePaths: [pth.resolve(cwd, 'node_modules')],
      ...sassRenderOptionsRaw,
    };
    const postcssProcessor = postcss([
      ...(useAutoprefixer ? [autoprefixer] : []),
      ...postcssPlugins,
    ]);

    logger.verbose(
      '[sass]',
      chalk.cyanBright(patterns),
      chalk.greenBright(input),
      '→',
      chalk.greenBright(output),
    );

    const paths = await globby(patterns, { cwd: input, onlyFiles: true });
    const actions = paths
      .filter(path => !pth.basename(path).startsWith('_'))
      .map(path => async () => {
        const inputFile = pth.resolve(input, path);
        const outputFile = pth.resolve(output, replaceExtName(path, '.css'));

        const sassResult = await sassAsyncRender(sass, {
          ...sassRenderOptions,
          file: inputFile,
        });
        const css = sassResult.css.toString();
        const postcssResult = await postcssProcessor.process(css, { from: inputFile });

        await fse.outputFile(outputFile, postcssResult.css);
        logger.verbose('[sass]', 'created', chalk.greenBright(outputFile));
      });

    await asyncParallel(actions, limit);
  };
};
