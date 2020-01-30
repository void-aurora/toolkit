import { Command } from 'commander';
import { semanticCommit } from '../../../utils/git';

export default function(program: Command): void {
  program
    .command('git-semantic-commit')
    .description('Create a git commit with semantic message format.')
    .action(
      async (...args: string[]): Promise<void> => {
        console.log(args);
        await verifyCommitMessage(...args);
      },
    );
}
