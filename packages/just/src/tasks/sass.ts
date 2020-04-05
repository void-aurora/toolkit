import pth from 'path';
import fse from 'fs-extra';
import globby from 'globby';
import chalk from 'chalk';
import { TaskFunction, logger } from 'just-task';

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-named-default */
import { default as _sass } from 'sass';
import { default as _postcss } from 'postcss';
import { default as _autoprefixer } from 'autoprefixer';
import { default as _CleanCSS } from 'clean-css';

import {
  tryRequireMulti,
  logMissingPackages,
  replaceExtName,
  asyncParallel,
  applyPostfix,
  pathsToString,
} from '../utils';

async function sassRender(sass: typeof _sass, options: _sass.Options): Promise<_sass.Result> {
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

export type SassTaskEnv = 'dev' | 'prod' | 'development' | 'production';

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

  /**
   * Specify output for development or production.
   *
   * - `dev`: output with source map.
   * - `prod`: the output will be minified via `clean-css`.
   *
   * `__DEV__` and `__PROD__` will be automatically replaced with boolean value,
   * could be override with `rollupReplaceOptions.values`
   */
  env: SassTaskEnv;

  /**
   * Postfix text append to basename of files, default value is the options `env`.
   * Set to `false` to disable postfix.
   */
  postfix?: string | false;

  limit?: number;

  /**
   * The options for sass.render(), note that the property `file` will be ignore.\
   * By default, the task will resolve `node_modules` in `cwd` for `includePaths` automatically.
   */
  sassRenderOptions?: _sass.Options;

  /**
   * Automatically uses `autoprefixer` in postcss or not.
   * @default true
   */
  useAutoprefixer?: boolean;

  /**
   * Options for `autoprefixer`
   */
  autoprefixerOptions?: _autoprefixer.Options;

  /**
   * Extra plugins of `postcss`.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  postcssPlugins?: any[];

  /**
   * Options for `clean-css`
   */
  cleanCssOptions?: _CleanCSS.Options;
}

/**
 * Create task function for sass.
 * @requires sass (dart-sass, not node-sass)
 * @requires postcss
 * @requires autoprefixer
 */
export const sassTask = (options: SassTaskOptions): TaskFunction => {
  return async function sassTaskFunction(): Promise<void> {
    const {
      patterns = '**/*.scss',
      input: inputRaw = 'sass',
      output: outputRaw = 'dist',
      cwd = process.cwd(),
      env,
      postfix,
      limit,
      sassRenderOptions: sassRenderOptionsRaw,
      useAutoprefixer = true,
      autoprefixerOptions,
      postcssPlugins = [],
      cleanCssOptions,
    } = options;

    const isProd = env === 'prod' || env === 'production';
    const isDev = !isProd;
    let getOutputFile = (path: string): string => replaceExtName(path, '.css');
    if (postfix === false) {
      // noop
    } else if (postfix === undefined || postfix === '') {
      getOutputFile = path => applyPostfix(replaceExtName(path, '.css'), env);
    } else {
      getOutputFile = path => applyPostfix(replaceExtName(path, '.css'), postfix);
    }

    const input = pth.resolve(cwd, inputRaw);
    const output = pth.resolve(cwd, outputRaw);

    const sassRenderOptions = {
      includePaths: [pth.resolve(cwd, 'node_modules')],
      ...sassRenderOptionsRaw,
    };

    /* eslint-disable @typescript-eslint/naming-convention */
    const {
      missing,
      packages: { sass, postcss, autoprefixer, CleanCSS },
    } = tryRequireMulti<{
      sass: typeof _sass;
      postcss: typeof _postcss;
      autoprefixer: typeof _autoprefixer;
      CleanCSS: typeof _CleanCSS;
    }>(
      {
        sass: 'sass',
        postcss: 'postcss',
        autoprefixer: 'autoprefixer',
        CleanCSS: 'clean-css',
      },
      cwd,
    );
    /* eslint-enable @typescript-eslint/naming-convention */

    if (missing.length > 0) {
      logMissingPackages(missing);
      return;
    }

    logger.verbose(
      '[sass]',
      chalk.cyanBright(pathsToString(patterns)),
      chalk.greenBright(pathsToString(input, cwd)),
      '→',
      chalk.greenBright(pathsToString(output, cwd)),
      'in',
      chalk.yellow(cwd),
    );

    const postcssProcessor = postcss([
      ...(useAutoprefixer ? [autoprefixer(autoprefixerOptions)] : []),
      ...postcssPlugins,
    ]);

    const paths = await globby(patterns, { cwd: input, onlyFiles: true });
    const actions = paths
      .filter(path => !pth.basename(path).startsWith('_'))
      .map(path => async () => {
        const inputFile = pth.resolve(input, path);
        const outputFile = pth.resolve(output, getOutputFile(path));
        const mapFile = `${outputFile}.map`;

        const sassResult = await sassRender(sass, {
          ...sassRenderOptions,
          file: inputFile,
          outFile: outputFile,
          sourceMap: isDev,
          sourceMapContents: isDev,
        });
        const postcssResult = await postcssProcessor.process(sassResult.css.toString(), {
          from: inputFile,
          to: outputFile,
          map: isDev
            ? {
                prev: sassResult.map?.toString(),
                sourcesContent: true,
              }
            : false,
        });

        if (isDev) {
          await fse.outputFile(outputFile, postcssResult.css);
          await fse.outputFile(mapFile, postcssResult.map.toString());
        } else {
          const cleanCss = new CleanCSS({ ...cleanCssOptions, returnPromise: true });
          const { styles } = await cleanCss.minify(postcssResult.css);
          await fse.outputFile(outputFile, styles);
        }

        logger.verbose('[sass]', 'created', chalk.greenBright(outputFile));
      });

    await asyncParallel(actions, limit);
  };
};
