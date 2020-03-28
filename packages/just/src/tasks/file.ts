import pth from 'path';
import fse from 'fs-extra';
import globby from 'globby';
import chalk from 'chalk';
import { TaskFunction, logger, clearCache } from 'just-task';
import { asyncParallel, pathsToString } from '../utils';

export interface CopyTaskOptions {
  /**
   * Glob patterns to search directories or files to copy.
   * @default '*'
   */
  patterns?: string | string[];

  /**
   * Paths to a directory where to copy files from.
   */
  from: string;

  /**
   * Paths to a directory as destination.
   */
  to: string;

  /**
   * The current working directory in which to search.
   */
  cwd?: string;

  /**
   * Specify number of actions can be run at the same time.
   */
  limit?: number;
}

/**
 * Creates a just task to copy files.
 */
export const copyTask = (options: CopyTaskOptions): TaskFunction => {
  return async function copyTaskFunction(): Promise<void> {
    const { patterns = '*', from: fromRaw, to: toRaw, cwd = process.cwd(), limit } = options;
    const from = pth.resolve(cwd, fromRaw);
    const to = pth.resolve(cwd, toRaw);

    if (from === to) {
      const pathText = pathsToString(from);
      logger.warn(
        `Options \`from\` and \`to\` have the same path ${pathText}, so this task has no effect.`,
      );
      return;
    }

    logger.verbose(
      '[copy]',
      chalk.cyanBright(patterns),
      chalk.greenBright(from),
      '→',
      chalk.greenBright(to),
    );

    const paths = await globby(patterns, {
      cwd: from,
      expandDirectories: false,
      onlyFiles: false,
    });
    const actions = paths.map(path => async () => {
      const src = pth.resolve(from, path);
      const dest = pth.resolve(to, path);
      await fse.copyFile(src, dest);
      logger.verbose('[copy]', 'created', chalk.greenBright(dest));
    });

    await asyncParallel(actions, limit);
  };
};

export interface CleanTaskOptions {
  /**
   * Glob patterns to search directories or files to remove.
   * @default ['temp','dist','coverage']
   */
  patterns?: string | string[];

  /**
   * The current working directory in which to search.
   */
  cwd?: string;

  /**
   * Specify number of actions can be run at the same time.
   */
  limit?: number;
}

/**
 * Creates a just task to remove files.
 */
export const cleanTask = (options: CleanTaskOptions = {}): TaskFunction => {
  return async function cleanTaskFunction(): Promise<void> {
    const { patterns = ['temp', 'dist', 'coverage'], cwd = process.cwd(), limit } = options;

    logger.verbose('[clean]', chalk.cyanBright(patterns), 'in', chalk.greenBright(cwd));

    const paths = await globby(patterns, {
      cwd,
      expandDirectories: false,
      onlyFiles: false,
    });
    const actions = paths.map(path => async () => {
      await fse.remove(pth.resolve(cwd, path));
    });

    await asyncParallel(actions, limit);
    clearCache();
  };
};
