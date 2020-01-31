import { Command } from 'commander';
import { verifyCommitMessage } from '../../../utils/git';

export default function(program: Command): void {
  program
    .command('git-verify-commit-message')
    .description('Verify the git commit message via git hook pre-commit.')
    .action(async (...args: string[]) => {
      const result = await verifyCommitMessage();
      if (typeof result === 'string') {
        // eslint-disable-next-line no-console
        console.error(result);
        process.exit(1);
      }
    });
}
