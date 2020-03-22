import pth from 'path';
import fse from 'fs-extra';
import globby from 'globby';
import { TaskFunction, logger } from 'just-task';

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-named-default */
import { default as _sass, Options as SassRenderOptions, Result as SassRenderResult } from 'sass';
import { default as _postcss } from 'postcss';
import { default as _autoprefixer } from 'autoprefixer';

import { tryRequire, pathsToString, replaceExtName, normalizeArray, asyncParallel } from '../utils';

function defaultSassRenderOptions(cwd: string): SassRenderOptions {
  return {
    includePaths: [pth.resolve(cwd, 'node_modules')],
  };
}

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
   * @default ['**\/*.scss','!**\/_*.scss']
   */
  patterns?: string | string[];

  /**
   * Input directories.
   * @default ['src','sass']
   */
  input?: string | string[];

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
   *
   */
  minify?: boolean;

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
    const sass: typeof _sass = tryRequire('sass');
    const postcss: typeof _postcss = tryRequire('postcss');
    const autoprefixer: typeof _autoprefixer = tryRequire('autoprefixer');

    if (!sass || !postcss || !autoprefixer) {
      logger.warn(
        'One of packages [sass(dart-sass), postcss, autoprefixer] is not installed, so this task has no effect',
      );
      return;
    }

    const {
      patterns: patternsRaw = ['**/*.scss', '!**/_*.scss'],
      input: inputRaw = ['src', 'sass'],
      output = 'dist',
      cwd = process.cwd(),
      limit,
      sassRenderOptions: sassRenderOptionsRaw = {},
      useAutoprefixer = true,
      postcssPlugins = [],
    } = options;
    const patterns = normalizeArray(patternsRaw);
    const input = normalizeArray(inputRaw);
    const sassRenderOptions = {
      ...defaultSassRenderOptions(cwd),
      ...sassRenderOptionsRaw,
    };
    const postcssProcessor = postcss([
      ...(useAutoprefixer ? [autoprefixer] : []),
      ...postcssPlugins,
    ]);

    {
      const textPatterns = pathsToString(patterns);
      const textFrom = pathsToString(inputRaw, cwd);
      const textTo = pathsToString(output, cwd);
      logger.info(`Compiling ${textPatterns} from ${textFrom} to ${textTo}`);
    }

    const matchedPathsSets = await Promise.all(
      input.map(async dir => globby(patterns, { cwd: dir, onlyFiles: true })),
    );

    const pairs: [string, string][] = [];
    const map: Record<string, string[]> = {};
    matchedPathsSets.forEach((matchedPaths, index) => {
      matchedPaths.forEach(path => {
        const { [index]: dir } = input;
        map[path] = map[path] ?? [];
        map[path].push(dir);

        const inputFile = pth.resolve(dir, path);
        const outputFile = pth.resolve(output, replaceExtName(path, 'css'));
        pairs.push([inputFile, outputFile]);
      });
    });

    let duplicated = false;
    Object.entries(map).forEach(([path, dirs]) => {
      if (dirs.length > 1) {
        duplicated = true;
        logger.error(`Duplicated file '${path}' between directories ${pathsToString(dirs, cwd)}`);
      }
    });
    if (duplicated) {
      throw new Error('Conflict: duplicated files between multi input directories.');
    }

    const actions = pairs.map(([inputFile, outputFile]) => async () => {
      const sassResult = await sassAsyncRender(sass, {
        ...sassRenderOptions,
        file: inputFile,
      });
      const css = sassResult.css.toString();
      const postcssResult = await postcssProcessor.process(css, { from: inputFile });
      await fse.outputFile(outputFile, postcssResult.css);
    });
    await asyncParallel(actions, limit);
  };
};
