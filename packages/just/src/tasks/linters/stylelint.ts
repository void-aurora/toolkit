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

async function runStylelint({
  cwd,
  patterns,
  configPath,
  ignorePath,
  syntax,
  fix,
  maxWarnings,
}: {
  cwd: string;
  patterns: string[];
  configPath?: string;
  ignorePath?: string;
  configBasedir?: string;
  syntax?: string;
  fix?: boolean;
  maxWarnings?: number;
}): Promise<void> {
  const binPath = resolveBin('stylelint', undefined, cwd);
  if (!notEmptyString(binPath)) {
    logMissingPackages('stylelint');
    return;
  }

  logger.verbose(
    '[stylelint]',
    'linting',
    chalk.cyanBright(pathsToString(patterns)),
    'in',
    chalk.yellow(cwd),
  );

  const args: string[] = [
    binPath,

    ...(logger.enableVerbose ? [] : ['--quiet']),
    ...['--formatter', 'verbose'],
    ...(notEmptyString(configPath) ? ['--config', configPath] : []),
    ...(notEmptyString(ignorePath) ? ['--ignore-path', ignorePath] : []),
    ...(notEmptyString(syntax) ? ['--syntax', syntax] : []),
    ...(fix ? ['--fix'] : []),
    ...(typeof maxWarnings === 'number' ? ['--max-warnings', `${maxWarnings}`] : []),

    ...patterns,
  ];

  await spawn(process.execPath, args, { cwd, stdio: 'inherit' });
}

export type StylelintSyntax =
  | 'css'
  | 'css-in-js'
  | 'html'
  | 'less'
  | 'markdown'
  | 'sass'
  | 'scss'
  | 'sugarss';

export interface StylelintTaskOptions {
  /**
   * Glob patterns to search directories or files.
   * @default '**\/*.{css,html,less,sass,scss,sss}'
   */
  patterns?: string | string[];

  /**
   * Path to the stylelint configuration file.
   */
  configPath?: string;

  /**
   * Path to the stylelint ignore file.
   */
  ignorePath?: string;

  /**
   * Absolute path to the directory that relative paths defining "extends" and "plugins" are relative to.
   * Only necessary if these values are relative paths.
   */
  configBasedir?: string;

  /**
   * The current working directory in which to search.
   */
  cwd?: string;

  /**
   * Specify a syntax.
   */
  syntax?: StylelintSyntax;

  /**
   * Automatically fix problems.
   */
  fix?: boolean;

  /**
   * Number of warnings to trigger nonzero exit code.
   */
  maxWarnings?: number;
}

export const stylelintTask = (options: StylelintTaskOptions): TaskFunction => {
  return async function stylelintTaskFunction(): Promise<void> {
    const {
      patterns: patternsRaw = '**/*.{css,html,less,sass,scss,sss}',
      configPath,
      ignorePath,
      configBasedir,
      cwd = process.cwd(),
      fix,
      maxWarnings,
    } = options;
    const patterns = normalizeArray(patternsRaw);
    await runStylelint({
      cwd,
      patterns,
      configPath,
      ignorePath,
      configBasedir,
      fix,
      maxWarnings,
    });
  };
};
