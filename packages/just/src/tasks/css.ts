import pth from 'path';
import fse from 'fs-extra';
import globby from 'globby';
import chalk from 'chalk';
import { TaskFunction, logger } from 'just-task';

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-named-default */
import {
  default as _CleanCSS,
  Options as CleanCSSOptions,
  Output as CleanCSSOutput,
} from 'clean-css';

import {
  tryRequire,
  pathsToString,
  trimDots,
  applyPostfix,
  asyncParallel,
  VerbosePool,
} from '../utils';

export interface MinifyCSSTaskOptions {
  /**
   * Glob patterns to search files.
   * @default '**\/*.css'
   */
  patterns?: string | string[];

  /**
   * Input directory.
   * @default 'dist'
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
   * Postfix for output filename.
   * @default 'min'
   */
  postfix?: string;

  cleanCssOptions?: CleanCSSOptions;
}

/**
 * Minify CSS with `clean-css`.
 */
export const minifyCssTask = (options: MinifyCSSTaskOptions = {}): TaskFunction => {
  return async function minifyCssTaskFunction(): Promise<void> {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const CleanCSS: typeof _CleanCSS = tryRequire('clean-css');

    if (!CleanCSS) {
      logger.warn('clean-css is not installed, so this task has no effect.');
      return;
    }

    const {
      patterns = '**/*.css',
      input = 'dist',
      output = 'dist',
      cwd = process.cwd(),
      limit,
      postfix: postfixRaw = 'min',
      cleanCssOptions = {},
    } = options;
    const postfix = trimDots(postfixRaw);

    const cleanCSS = new CleanCSS({ ...cleanCssOptions, returnPromise: true });

    if ((postfix === undefined || postfix === '') && input === output) {
      throw new Error(
        `The option 'postfix' can't be empty while 'input' and 'output' is the same directory.`,
      );
    }

    const pool = new VerbosePool({ action: 'Minifying CSS', patterns, input, output, cwd });
    pool.logHeader();

    const paths = await globby(patterns, { cwd: pth.resolve(cwd, input), onlyFiles: true });
    const actions = paths
      .filter(path => !pth.basename(path, pth.extname(path)).endsWith(postfix))
      .map(path => async () => {
        const inputFile = pth.resolve(cwd, input, path);
        const outputFile = pth.resolve(cwd, output, applyPostfix(path, postfix));

        const src = await fse.readFile(inputFile, 'utf-8');
        const { styles, stats } = await cleanCSS.minify(src);

        await fse.outputFile(outputFile, styles);
        pool.addVerbose({
          inputFile,
          outputFile,
          stats: VerbosePool.renderStatsCleanCSS(stats),
        });
      });

    await asyncParallel(actions, limit);
  };
};
