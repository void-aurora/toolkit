import pth from 'path';
import { Buffer } from 'buffer';
import { gzipSync, brotliCompressSync } from 'zlib';
import fse from 'fs-extra';
import globby from 'globby';
import chalk from 'chalk';
import prettyBytes from 'pretty-bytes';
import { TaskFunction, logger } from 'just-task';

import { asyncParallel, pathsToString } from '../utils';

async function readFile(path: string): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    fse.readFile(path, (error, data) => {
      if (error) {
        return reject(error);
      }
      return resolve(data);
    });
  });
}

export interface CheckSizeTaskOptions {
  /**
   * Glob patterns to search directories or files to copy.
   * @default ['dist\/**\/*.{min,prod,production}.{js,css}', 'dist\/**\/*.{json,html,svg}']
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
 * Creates a just task to check file sizes.
 * TODO: pretty table logging, max size checking
 */
export const checkSizeTask = (options: CheckSizeTaskOptions = {}): TaskFunction => {
  return async function checkSizeTaskFunction(): Promise<void> {
    const {
      patterns = ['dist/**/*.{min,prod,production}.{js,css}', 'dist/**/*.{json,html,svg}'],
      cwd = process.cwd(),
      limit,
    } = options;

    logger.verbose('[check-size]', chalk.cyanBright(patterns), 'in', chalk.greenBright(cwd));

    const statusKeys = ['path', 'original', 'gzip', 'brotli'] as const;
    type StatusKey = typeof statusKeys[number];
    const statusList: Record<StatusKey, string>[] = [];

    const paths = await globby(patterns, {
      cwd,
      onlyFiles: true,
    });
    const actions = paths
      .sort((a, b) => a.localeCompare(b))
      .map(path => async () => {
        const src = pth.resolve(cwd, path);
        const original = await readFile(src);
        const gzipped = gzipSync(original);
        const brotlied = brotliCompressSync(original);
        statusList.push({
          path,
          original: prettyBytes(original.length),
          gzip: prettyBytes(gzipped.length),
          brotli: prettyBytes(brotlied.length),
        });
      });

    await asyncParallel(actions, limit);

    const textLengths = Object.fromEntries(statusKeys.map(key => [key, key.length])) as Record<
      StatusKey,
      number
    >;

    if (statusList.length === 0) {
      return;
    }
    statusList.forEach(status =>
      (Object.entries(status) as [StatusKey, string][]).forEach(([key, text]) => {
        textLengths[key] = Math.max(textLengths[key], text.length);
      }),
    );

    let table = '\n';

    statusKeys.forEach(key => {
      table += `| ${chalk.bold(key.padStart(textLengths[key], ' '))} `;
    });
    table += '|\n';

    statusList.forEach(status => {
      statusKeys.forEach(key => {
        const content = status[key].padStart(textLengths[key], ' ');
        table += `| ${key === 'path' ? chalk.green(content) : chalk.cyan(content)} `;
      });
      table += '|\n';
    });

    logger.info('[check-size]', table);
  };
};
