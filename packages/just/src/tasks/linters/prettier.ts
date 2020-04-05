import chalk from 'chalk';
import { TaskFunction, logger, resolve } from 'just-task';

import {
  notEmptyString,
  spawn,
  tryRequire,
  resolveBin,
  logMissingPackages,
  normalizeArray,
} from '../../utils';

async function runPrettier({
  cwd,
  patterns,
  check,
  configPath,
  ignorePath,
}: {
  cwd: string;
  patterns: string[];
  check?: boolean;
  configPath?: string;
  ignorePath?: string;
}): Promise<void> {
  const binPath = resolveBin('prettier');
  if (typeof binPath !== 'string') {
    logMissingPackages('prettier');
    return;
  }

  logger.verbose(
    '[prettier]',
    check ? 'checking' : 'formatting',
    chalk.cyanBright(patterns),
    'in',
    chalk.greenBright(cwd),
  );

  const args: string[] = [
    binPath,
    ...(notEmptyString(configPath) ? ['--config', configPath] : []),
    ...(notEmptyString(ignorePath) ? ['--ignore-path', ignorePath] : []),
    ...(logger.enableVerbose ? [] : ['--loglevel', 'error']),
    ...(check ? ['--check'] : ['--write']),
    ...patterns,
  ];

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
