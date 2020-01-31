import fs from 'fs-extra';
import chalk from 'chalk';

const MESSAGE_REGEX = /^(?<revert>revert: )?(?<type>fix|feat|refactor|perf|types|chore|release|ci|build|test|docs|style|wip)(?<scope>\(.+\))?: (?<subject>.{1,50})/u;

export async function verifyCommitMessage(): Promise<boolean | string> {
  const {
    env: { HUSKY_GIT_PARAMS: messagePath },
  } = process;

  const message = await fs.readFile(messagePath as string, 'utf-8');

  if (MESSAGE_REGEX.test(message)) {
    return true;
  }

  return `
  ${chalk.bgRed.white(' ERROR ')} invalid commit message.

  The head of the must matched by the following regex:
    ${chalk.greenBright(MESSAGE_REGEX.toString())}
`;
}
