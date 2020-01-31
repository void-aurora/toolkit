import pth from 'path';
import fs from 'fs-extra';
import { Command } from 'commander';

import gitVerifyCommitMessage from './commands/git/verify-commit-message';

const pkg = fs.readJSONSync(pth.resolve(__dirname, '../../package.json'));

// The instance of the CLI
const program = new Command();
program.exitOverride();
program.version(pkg.version);

gitVerifyCommitMessage(program);

// Run the CLI
async function main(): Promise<void> {
  await program.parseAsync(process.argv);
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
main().catch((error: Error) => {
  // eslint-disable-next-line no-console
  console.error(error);
  process.exit(1);
});
