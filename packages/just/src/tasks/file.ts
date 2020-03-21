import pth from 'path';
import fse from 'fs-extra';
import globby from 'globby';
import { TaskFunction, logger, clearCache } from 'just-task';
import { asyncParallel, isFile, toRelativePathString, normalizeArray } from '../utils';

export interface CopyTaskOptions {
  /**
   * Paths to directories or files to copy from.
   * If the path is a directory, the task will copy all of files inside the directory to `dest`.
   * If the path is a file, the task will copy the file into the dest directory.
   * Can be glob patterns.
   * @default 'public'
   */
  paths?: string | string[];

  /**
   * The path to a directory as destination.
   * @default 'dist'
   */
  dest?: string;

  /**
   * Specify number of actions can be run at the same time.
   */
  limit?: number;
}

export const copyTask = (options: CopyTaskOptions = {}): TaskFunction => {
  return async function copyTaskFunction(): Promise<void> {
    const cwd = process.cwd();
    const { paths: pathsRaw = 'public', dest = 'dist', limit } = options;
    const paths = normalizeArray(pathsRaw);

    logger.info(
      `Copying ${toRelativePathString(cwd, pathsRaw)} to ${toRelativePathString(cwd, dest)}`,
    );

    await fse.mkdirp(dest);

    const srcPaths = await globby(paths);

    await asyncParallel(
      srcPaths.map(src => async () => {
        if (await isFile(src)) {
          await fse.copy(src, pth.join(dest, pth.basename(src)));
          return;
        }
        await fse.copy(src, dest);
      }),
      limit,
    );
  };
};

export interface CleanTaskOptions {
  /**
   * Paths to directories or files to remove.
   * Can be glob patterns.
   * @default ['temp','dist']
   */
  paths?: string | string[];

  /**
   * Specify number of actions can be run at the same time.
   */
  limit?: number;
}

export const cleanTask = (options: CleanTaskOptions = {}): TaskFunction => {
  return async function cleanTaskFunction(): Promise<void> {
    const cwd = process.cwd();
    const { paths: pathsRaw = ['temp', 'dist'], limit } = options;
    const paths = normalizeArray(pathsRaw);

    logger.info(`Cleaning ${toRelativePathString(cwd, paths)}`);

    const dirPaths = await globby(paths);

    await asyncParallel(
      dirPaths.map(dir => async () => fse.remove(dir)),
      limit,
    );
  };
};
