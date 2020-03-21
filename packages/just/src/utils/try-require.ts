import { resolve } from 'just-task';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function tryRequire(specifier: string): any | null {
  const resolved = resolve(specifier);

  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (!resolved) {
    return null;
  }

  let requiredModule = null;

  try {
    // eslint-disable-next-line global-require,import/no-dynamic-require,@typescript-eslint/no-require-imports
    requiredModule = require(resolved);
  } catch (e) {
    // ignore
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return requiredModule;
}
