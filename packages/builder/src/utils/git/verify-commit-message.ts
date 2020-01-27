/* eslint-disable no-console */
import fs from 'fs-extra';
import chalk from 'chalk';

const MESSAGE_REGEX = /^(?<typeRevert>revert: )?(?<type>feat|fix|docs|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release)(?<scope>\(.+\))?: (?<subject>.{1,50})/u;

export async function verifyCommitMessage(...args: string[]): Promise<boolean> {
  const {
    env: { GIT_PARAMS: messagePath },
  } = process;

  const message = await fs.readFile(messagePath as string, 'utf-8');

  if (MESSAGE_REGEX.test(message)) {
    return true;
  }

  console.error(`
  ${chalk.bgRed.white(' ERROR ')} invalid commit message format.

  You must use the strict git commit message format:
    <type>(scope): <subject>
  
  - type: required
  - scope: optional
  - subject: required
`);

  return false;
}
