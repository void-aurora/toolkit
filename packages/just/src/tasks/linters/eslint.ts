import chalk from 'chalk';
import { TaskFunction, logger } from 'just-task';

import {
  notEmptyString,
  spawn,
  resolveBin,
  logMissingPackages,
  normalizeArray,
  pathsToString,
} from '../../utils';

async function runEslint({
  cwd,
  patterns,
  extensions,
  fix,
  configPath,
  ignorePath,
}: {
  cwd: string;
  patterns: string[];
  extensions: string[];
  fix?: boolean;
  configPath?: string;
  ignorePath?: string;
}): Promise<void> {
  const binPath = resolveBin('eslint', undefined, cwd);
  if (!notEmptyString(binPath)) {
    logMissingPackages('eslint');
    return;
  }

  const ext = extensions
    .map(e => e.split(','))
    .flat(1)
    .map(e => e.replace(/^\.+/g, ''))
    .filter(e => notEmptyString(e))
    .map(e => `.${e}`)
    .join(',');

  logger.verbose(
    '[eslint]',
    'linting',
    chalk.cyanBright(pathsToString(patterns)),
    chalk.cyan(ext),
    'in',
    chalk.yellow(cwd),
  );

  const args: string[] = [
    binPath,
    ...(logger.enableVerbose ? [] : ['--quiet']),
    ...(notEmptyString(configPath) ? ['--config', configPath] : []),
    ...(notEmptyString(ignorePath) ? ['--ignore-path', ignorePath] : []),
    ...(notEmptyString(ext) ? ['--ext', ext] : []),
    ...(fix ? ['--fix'] : []),

    ...patterns,
  ];

  await spawn(process.execPath, args, { cwd, stdio: 'inherit' });
}

export interface EslintTaskOptions {
  /**
   * Glob patterns to search directories or files.
   * @default '.'
   */
  patterns?: string | string[];

  /**
   * Specify file extensions.
   * @default ['.js', '.jsx', '.ts', '.tsx', '.cjs', '.mjs']
   */
  extensions?: string | string[];

  /**
   * Automatically fix problems.
   */
  fix?: boolean;

  /**
   * Path to the eslint configuration file.
   */
  configPath?: string;

  /**
   * Path to the eslint ignore file.
   */
  ignorePath?: string;

  /**
   * The current working directory in which to search.
   */
  cwd?: string;
}

/**
 * Create a just tack to lint files with eslint.
 */
export const eslintTask = (options: EslintTaskOptions = {}): TaskFunction => {
  return async function eslintTaskFunction(): Promise<void> {
    const {
      patterns: patternsRaw = '.',
      extensions: extensionsRaw = ['.js', '.jsx', '.ts', '.tsx', '.cjs', '.mjs'],
      fix,
      configPath,
      ignorePath,
      cwd = process.cwd(),
    } = options;
    const patterns = normalizeArray(patternsRaw);
    const extensions = normalizeArray(extensionsRaw);
    await runEslint({
      cwd,
      patterns,
      extensions,
      fix,
      configPath,
      ignorePath,
    });
  };
};
