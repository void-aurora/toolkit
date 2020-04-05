import { Writable, WritableOptions } from 'stream';
import chalk from 'chalk';
import { TaskFunction, logger } from 'just-task';

import {
  notEmptyString,
  spawn,
  SpawnError,
  resolveBin,
  logMissingPackages,
  normalizeArray,
  pathsToString,
} from '../../utils';

async function runPrettier({
  cwd,
  patterns,
  configPath,
  ignorePath,
  check,
}: {
  cwd: string;
  patterns: string[];
  configPath?: string;
  ignorePath?: string;
  check?: boolean;
}): Promise<void> {
  const binPath = resolveBin('prettier', undefined, cwd);
  if (typeof binPath !== 'string') {
    logMissingPackages('prettier');
    return;
  }

  logger.verbose(
    '[prettier]',
    check ? 'checking' : 'formatting',
    chalk.cyanBright(pathsToString(patterns)),
    'in',
    chalk.yellow(cwd),
  );

  const args: string[] = [
    binPath,
    ...(logger.enableVerbose || check ? [] : ['--loglevel', 'error']),
    ...(notEmptyString(configPath) ? ['--config', configPath] : []),
    ...(notEmptyString(ignorePath) ? ['--ignore-path', ignorePath] : []),
    ...(check ? ['--list-different'] : ['--write']),
    ...patterns,
  ];

  if (check) {
    const files: string[] = [];
    const write: WritableOptions['write'] = (chunk: Buffer, encoding, next) => {
      files.push(chunk.toString().trim());
      next();
    };
    const stdout = new Writable({ write });
    const stderr = new Writable({ write });

    try {
      await spawn(process.execPath, args, { cwd, stdout, stderr });
    } catch (error) {
      if ((error as SpawnError).code === 1) {
        console.log(
          [
            '',
            [
              chalk.gray('✖'),
              chalk.redBright(`${files.length} files aren't formatted by prettier:`),
            ].join(' '),
            files.map(f => `  ${f}`).join('\n'),
            '',
          ].join('\n'),
        );
      }
      throw error;
    }

    return;
  }

  await spawn(process.execPath, args, { cwd, stdio: 'inherit' });
}

export interface PrettierTaskOptions {
  /**
   * Glob patterns to search directories or files.
   * @default '.'
   */
  patterns?: string | string[];

  /**
   * Path to the prettier configuration file.
   */
  configPath?: string;

  /**
   * Path to the prettier ignore file.
   */
  ignorePath?: string;

  /**
   * The current working directory in which to search.
   */
  cwd?: string;
}

/**
 * Create a just task to format files.
 * @requires prettier
 */
export const prettierTask = (options: PrettierTaskOptions = {}): TaskFunction => {
  return async function prettierTaskFunction(): Promise<void> {
    const { patterns: patternsRaw = '.', configPath, ignorePath, cwd = process.cwd() } = options;
    const patterns = normalizeArray(patternsRaw);
    await runPrettier({
      cwd,
      patterns,
      configPath,
      ignorePath,
    });
  };
};

/**
 * Create a just task to check file formatting with prettier.
 * @requires prettier
 */
export const prettierCheckTask = (options: PrettierTaskOptions = {}): TaskFunction => {
  return async function prettierTaskFunction(): Promise<void> {
    const { patterns: patternsRaw = '.', configPath, ignorePath, cwd = process.cwd() } = options;
    const patterns = normalizeArray(patternsRaw);
    await runPrettier({
      cwd,
      patterns,
      check: true,
      configPath,
      ignorePath,
    });
  };
};
