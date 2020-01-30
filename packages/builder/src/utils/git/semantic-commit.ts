import execa from 'execa';

export const COMMIT_TYPE_MAP = {
  fix: 'fix bugs',
  feat: 'adds features',
  refactor: 'changes codebase',
  perf: 'performance improvement',
  types: 'type system related',

  chore: 'change chore',
  release: 'new version and publish',
  ci: 'change continuous integration and deployment system',
  build: 'change build system: configs, scripts, workflow',
  test: 'update test scripts',
  docs: 'update document',
  style: 'fix code style',

  wip: 'work in process',
};

export type GitCommitTypeMap = typeof COMMIT_TYPE_MAP;

export type GitCommitType = keyof GitCommitTypeMap;

export const ALL_COMMIT_TYPES = Object.keys(COMMIT_TYPE_MAP) as readonly GitCommitType[];

export const COMMIT_MESSAGE_LIMIT = 50;

/**
 * The option for git semantic commit.
 */
export interface GitSemanticCommitOptions {
  type: GitCommitType;
  scope?: string;
  subject: string;
}

/**
 * Create a git commit with semantic message format.
 * @param options the options
 */
export async function semanticCommit(options: GitSemanticCommitOptions): Promise<void> {
  const { type, scope, subject } = options;
  if (!ALL_COMMIT_TYPES.includes(type)) {
    throw new Error(`Error: invalid commit type '${type}'`);
  }
  if (typeof subject !== 'string' || subject.length < 1 || subject.length > COMMIT_MESSAGE_LIMIT) {
    throw new Error(`Error: invalid commit subject length ${subject.length}`);
  }

  await execa('git', [
    'commit',
    '-m',
    `${type}${typeof scope === 'string' && scope.length > 0 ? `(${scope})` : ''}: ${subject}`,
  ]);
}
