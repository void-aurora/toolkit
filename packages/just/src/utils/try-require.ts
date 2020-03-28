import { resolve, logger } from 'just-task';
import { pathsToString } from './file-system';

export function tryRequire<T>(specifier: string): T | null;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function tryRequire(specifier: string): any {
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface TryRequireMultiResult<T extends Record<string, any>> {
  /**
   * Paths of missing packages.
   */
  missing: string[];

  /**
   * Packages map.
   */
  packages: T;
}

/**
 * Try require multi packages.
 * @param map package { name: path } map
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function tryRequireMulti<T extends Record<string, any>>(
  map: Record<keyof T, string>,
): TryRequireMultiResult<T> {
  const missing: string[] = [];
  const packages = Object.fromEntries(
    Object.entries(map).map(([name, path]: [keyof T, string]) => {
      const pkg = tryRequire<T[keyof T]>(path);
      if (pkg === null) {
        missing.push(path);
      }
      return [name, pkg];
    }),
  ) as T;

  return { missing, packages };
}

export function logMissingPackages(missing: string[]): void {
  const noEffect = 'so that the task has no effect';
  if (missing.length === 0) {
    return;
  }
  if (missing.length === 1) {
    logger.warn(`The package ${pathsToString(missing)} is not installed, ${noEffect}.`);
    return;
  }
  logger.warn(`One of the packages ${pathsToString(missing)} is not installed, ${noEffect}.`);
}
