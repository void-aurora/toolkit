import cp from 'child_process';

export async function spawn(
  cmd: string,
  args: readonly string[],
  options: cp.SpawnOptions = {},
): Promise<void> {
  return new Promise((resolve, reject) => {
    const child = cp.spawn(cmd, args, options);
    child.on('exit', code => {
      if (code !== 0) {
        const error = new Error(
          `Command failed (exit code: ${code ?? 'UNKNOWN'}): ${[cmd, ...args].join(' ')}`,
        );
        reject(error);
        return;
      }
      resolve();
    });
  });
}
