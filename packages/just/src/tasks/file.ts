import pth from 'path';
import fse from 'fs-extra';
import globby from 'globby';
import { TaskFunction, logger } from 'just-task';
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
    const { patterns = '*', from, to, cwd = process.cwd(), limit } = options;

    {
      const textPatterns = pathsToString(patterns);
      const textFrom = pathsToString(from, cwd);
      const textTo = pathsToString(to, cwd);
      logger.info(`Copying ${textPatterns} from ${textFrom} to ${textTo}`);
    }

    const paths = await globby(patterns, { cwd: pth.resolve(cwd, from) });
    const actions = paths.map(path => async () =>
      fse.copyFile(pth.resolve(cwd, from, path), pth.resolve(cwd, to, path)),
    );

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

    logger.info(`Cleaning ${pathsToString(patterns, cwd)}`);

    const paths = await globby(patterns, { cwd });
    const actions = paths.map(path => async () => fse.remove(path));

    await asyncParallel(actions, limit);
  };
};
