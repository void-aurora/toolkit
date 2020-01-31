import { Command } from 'commander';
import { semanticCommitPrompt } from '../../../utils/git';

export default function(program: Command): void {
  program
    .command('git-semantic-commit')
    .description('Pumps a git commit with semantic message format from prompts.')
    .action(async (...args: string[]) => semanticCommitPrompt());
}
