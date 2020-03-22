import pth from 'path';
import fse from 'fs-extra';
import globby from 'globby';
import { TaskFunction, logger, clearCache } from 'just-task';
import { asyncParallel, VerbosePool } from '../utils';

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
    const { patterns = '*', from, to, cwd = process.cwd(), limit } = options;

    if (pth.resolve(cwd, from) === pth.resolve(cwd, to)) {
      logger.warn(`Same path between \`from\` and \`to\`, so this task has no effect.`);
      return;
    }

    const pool = new VerbosePool({ action: 'Copying', patterns, input: from, output: to, cwd });
    pool.logHeader();

    const paths = await globby(patterns, { cwd: pth.resolve(cwd, from) });
    const actions = paths.map(path => async () => {
      const src = pth.resolve(cwd, from, path);
      const dest = pth.resolve(cwd, to, path);
      await fse.copyFile(src, dest);
      pool.addVerbose({ inputFile: src, outputFile: dest });
    });

    await asyncParallel(actions, limit);
  };
};

export interface CleanTaskOptions {
  /**
   * Glob patterns to search directories or files to remove.
   * @default ['temp','dist']
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
    const { patterns = ['temp', 'dist'], cwd = process.cwd(), limit } = options;

    const pool = new VerbosePool({ action: 'Cleaning', patterns, cwd });
    pool.logHeader();

    const paths = await globby(patterns, { cwd, onlyDirectories: false, onlyFiles: false });
    const actions = paths.map(path => async () => {
      await fse.remove(pth.resolve(cwd, path));
    });

    await asyncParallel(actions, limit);
    clearCache();
  };
};
