const MESSAGE_REGEX = /^(?<typeRevert>revert: )?(?<type>feat|fix|docs|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release)(?<scope>\(.+\))?: (?<subject>.{1,50})/u;

export interface GitCommitMessageVerifyResult {
  valid: boolean;
  info: string;
}

export function verifyCommitMessage(message: string): GitCommitMessageVerifyResult {
  if (MESSAGE_REGEX.test(message)) {
    return {
      valid: true,
      info: 'valid',
    };
  }

  //   console.error(`
  //   ${chalk.bgRed.white(' ERROR ')} invalid commit message format.

  //   You must use the strict git commit message format:
  //     <type>(scope): <subject>

  //   - type: required
  //   - scope: optional
  //   - subject: required
  // `);

  return {
    valid: false,
    info: '',
  };
}
