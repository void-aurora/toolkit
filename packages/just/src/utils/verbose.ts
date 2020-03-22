import pth from 'path';
import chalk from 'chalk';
import { logger } from 'just-task';

import { Output as CleanCSSOutput } from 'clean-css';

import { pathsToString } from './file-system';

export interface Verbose {
  inputFile: string;
  outputFile: string;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  stats?: string;
}

export interface VerbosePoolOptions {
  action: string;
  patterns: string | string[];
  input?: string;
  output?: string;
  cwd: string;
}

const KB = 1024;
const MB = KB ** 2;
const GB = KB ** 3;
const TB = KB ** 4;
const PB = KB ** 5;

export class VerbosePool implements VerbosePoolOptions {
  public static renderBytes(bytes: number): string {
    if (bytes < KB) {
      return `${bytes}B`;
    }
    if (bytes < MB) {
      return `${bytes / KB}KB`;
    }
    if (bytes < GB) {
      return `${bytes / MB}MB`;
    }
    if (bytes < TB) {
      return `${bytes / GB}GB`;
    }
    if (bytes < PB) {
      return `${bytes / TB}TB`;
    }
    return `${bytes / PB}PB`;
  }

  public static renderStatsCleanCSS(stats: CleanCSSOutput['stats']): string {
    const { originalSize, minifiedSize, timeSpent, efficiency } = stats;

    return [
      chalk.cyanBright(`-${(efficiency * 100).toFixed(1)}%`),
      chalk.cyan(VerbosePool.renderBytes(originalSize)),
      chalk.gray('=>'),
      chalk.cyan(VerbosePool.renderBytes(minifiedSize)),
    ].join(' ');
  }

  public readonly action: string;
  public readonly patterns: string | string[];
  public readonly input?: string;
  public readonly output?: string;
  public readonly cwd: string;

  private readonly records: Verbose[];

  constructor(options: VerbosePoolOptions) {
    const { action, patterns, input, output, cwd } = options;

    this.action = action.trim();
    this.patterns = patterns;
    this.input = input;
    this.output = output;
    this.cwd = cwd;
    this.records = [];
  }

  public renderHeader(): string {
    const { action } = this;
    const patterns = chalk.green(pathsToString(this.patterns));

    if (
      this.input === undefined ||
      this.input === '' ||
      this.output === undefined ||
      this.output === ''
    ) {
      return `${action} ${patterns}.`;
    }

    const input = chalk.green(pathsToString(this.input));
    const output = chalk.green(pathsToString(this.output));
    if (this.input === this.output) {
      return `${action} ${patterns} in ${input}.`;
    }
    return `${action} ${patterns} from ${input} to ${output}.`;
  }

  public logHeader(): void {
    const cwd = chalk.gray(`Current work directory: ${this.cwd}`);
    logger.verbose(cwd);
    logger.verbose(this.renderHeader());
  }

  public addVerbose(verbose: Verbose): void {
    this.records.push(verbose);
    this.logVerbose(verbose);
  }

  public logVerbose(verbose: Verbose): void {
    logger.verbose(this.renderVerbose(verbose));
  }

  public renderVerbose(verbose: Verbose): string {
    const { cwd } = this;
    const { inputFile: src, outputFile: dest, stats } = verbose;
    let line = `  `;
    line += chalk.green(pth.relative(cwd, src));
    line += ` ${chalk.gray('=>')} `;
    line += chalk.green(pth.relative(cwd, dest));
    if (stats !== undefined && stats !== '') {
      line += ` ${stats}`;
    }
    return line;
  }

  public logAllVerbose(): void {
    this.records.forEach(verbose => logger.verbose(this.renderVerbose(verbose)));
  }
}
