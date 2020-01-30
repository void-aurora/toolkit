/* eslint-disable no-console */
import fs from 'fs-extra';
import chalk from 'chalk';

import { Command } from 'commander';
import { verifyCommitMessage } from '../../../utils/git';

export default function(program: Command): void {
  program
    .command('git-verify-commit-message')
    .description('Verify the git commit message via git hook pre-commit.')
    .action(async (...args: string[]) => {
      const {
        env: { GIT_PARAMS: messagePath },
      } = process;

      const message = await fs.readFile(messagePath as string, 'utf-8');

      verifyCommitMessage();
    });
}
