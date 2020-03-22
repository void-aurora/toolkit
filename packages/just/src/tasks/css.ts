import pth from 'path';
import fse from 'fs-extra';
import globby from 'globby';
import { TaskFunction, logger } from 'just-task';

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-named-default */
import { default as _CleanCss, Options as CleanCSSOptions } from 'clean-css';

import { tryRequire, pathsToString, trimDots, applyPostfix, asyncParallel } from '../utils';

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
    const CleanCss: typeof _CleanCss = tryRequire('clean-css');

    if (!CleanCss) {
      logger.warn('clean-css is not installed, so this task has no effect');
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

    const cleanCss = new CleanCss({ ...cleanCssOptions, returnPromise: true });

    if ((postfix === undefined || postfix === '') && input === output) {
      throw new Error(
        `The option 'postfix' can't be empty while 'input' and 'output' is the same directory.`,
      );
    }

    {
      const patternsText = pathsToString(patterns);
      const inputText = pathsToString(input);
      const outputText = pathsToString(output);
      if (input === output) {
        logger.info(`Minifying CSS ${patternsText} in ${inputText}.`);
      } else {
        logger.info(`Minifying CSS ${patternsText} from ${inputText} to ${outputText}.`);
      }
    }

    const paths = await globby(patterns, { cwd: pth.resolve(cwd, input), onlyFiles: true });
    const actions = paths.map(path => async () => {
      const inputFile = pth.resolve(cwd, input, path);
      const outputFile = pth.resolve(cwd, output, applyPostfix(path, postfix));

      const src = await fse.readFile(inputFile, 'utf-8');
      const result = await cleanCss.minify(src);

      await fse.outputFile(outputFile, result.styles);
    });

    await asyncParallel(actions, limit);
  };
};
