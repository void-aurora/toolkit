import execa from 'execa';

export type CommitType =
  | 'feat' // adds features
  | 'fix' // fixs bugs
  | 'docs' // changes document
  | 'style' // fixs coding style and format
  | 'refactor' // changes codebase without adding feature and fixing bugs
  | 'perf' // performance improvement
  | 'test' // changes for unit test and e2e test
  | 'build' // related to build system
  | 'ci' // related to the continuous integration and deployment system
  | 'chore' // alias of `build`
  | 'types' // related to type system
  | 'wip' // work in progress
  | 'release' // release and publish
  | 'revert'; // revert commit

const allCommitTypes: CommitType[] = ['feat'];

/**
 * Git commit with semantic message.
 * @param type
 * @param scope
 * @param subject
 * @param body
 * @param footer
 */
export function sematicCommit(
  type: CommitType,
  scope: string,
  subject: string,
  body: string,
  footer: string,
): void {}
