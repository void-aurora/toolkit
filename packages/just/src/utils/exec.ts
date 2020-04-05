import cp from 'child_process';

export interface SpawnError extends Error {
  code?: number | null;
}

export async function spawn(
  cmd: string,
  args: readonly string[],
  options: cp.SpawnOptions & {
    stdout?: NodeJS.WritableStream;
    stderr?: NodeJS.WritableStream;
  } = {},
): Promise<void> {
  return new Promise((resolve, reject) => {
    const child = cp.spawn(cmd, args, options);
    child.on('exit', code => {
      if (code !== 0) {
        const error: SpawnError = new Error(
          `Command failed with exit code ${code ?? 'UNKNOWN'}: ${[cmd, ...args].join(' ')}`,
        );
        error.code = code;
        reject(error);
        return;
      }
      resolve();
    });
    if (options.stdout) {
      child.stdout?.pipe(options.stdout);
    }
    if (options.stderr) {
      child.stderr?.pipe(options.stderr);
    }
  });
}
