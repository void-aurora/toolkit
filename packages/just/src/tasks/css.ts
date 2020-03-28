/* eslint-disable @typescript-eslint/naming-convention */
import pth from 'path';
import fse from 'fs-extra';
import globby from 'globby';
import chalk from 'chalk';
import { TaskFunction, logger } from 'just-task';

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-named-default */
import { default as _CleanCSS, Options as CleanCSSOptions } from 'clean-css';

import {
  tryRequireMulti,
  logMissingPackages,
  trimDots,
  applyPostfix,
  asyncParallel,
} from '../utils';

export interface CleanCssTaskOptions {
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
export const cleanCssTask = (options: CleanCssTaskOptions = {}): TaskFunction => {
  return async function minifyCssTaskFunction(): Promise<void> {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const {
      missing,
      packages: { CleanCSS },
    } = tryRequireMulti<{ CleanCSS: typeof _CleanCSS }>({ CleanCSS: 'clean-css' });

    if (missing.length > 0) {
      logMissingPackages(missing);
      return;
    }

    const {
      patterns = '**/*.css',
      input: inputRaw = 'dist',
      output: outputRaw = 'dist',
      cwd = process.cwd(),
      limit,
      postfix: postfixRaw = 'min',
      cleanCssOptions = {},
    } = options;
    const input = pth.resolve(cwd, inputRaw);
    const output = pth.resolve(cwd, outputRaw);
    const postfix = trimDots(postfixRaw);

    if (postfix === '' && inputRaw === outputRaw) {
      throw new Error(
        `The option 'postfix' can't be empty while 'input' and 'output' is the same directory.`,
      );
    }

    logger.verbose(
      '[clean-css]',
      chalk.cyanBright(patterns),
      chalk.greenBright(input),
      '→',
      chalk.greenBright(output),
    );

    const cleanCSS = new CleanCSS({ ...cleanCssOptions, returnPromise: true });

    const paths = await globby(patterns, { cwd: input, onlyFiles: true });
    const actions = paths
      .filter(path => !pth.basename(path, pth.extname(path)).endsWith(postfix))
      .map(path => async () => {
        const inputFile = pth.resolve(input, path);
        const outputFile = pth.resolve(output, applyPostfix(path, postfix));

        const src = await fse.readFile(inputFile, 'utf-8');
        const { styles } = await cleanCSS.minify(src);

        await fse.outputFile(outputFile, styles);
        logger.verbose('[clean-css]', 'created', chalk.greenBright(outputFile));
      });

    await asyncParallel(actions, limit);
  };
};
