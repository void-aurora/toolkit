import pth from 'path';
import { resolve, logger } from 'just-task';
import { pathsToString } from './file-system';
import { normalizeArray } from './helpers';

export interface PartialPackage {
  name: string;
  version: string;
  bin?: string;
  main?: string;
  module?: string;
  types?: string;
  typing?: string;
}

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

/**
 * Resolve the path to the module's bin file.
 * @param moduleName module name to resolve.
 */
export function resolveBin(moduleName: string): string | null {
  const pkgPath = resolve(`${moduleName}/package.json`);
  if (typeof pkgPath !== 'string') {
    return null;
  }

  const pkg = tryRequire<PartialPackage>(`${moduleName}/package.json`);
  if (!pkg || typeof pkg.bin !== 'string' || pkg.bin === '') {
    return null;
  }

  return pth.resolve(pth.dirname(pkgPath), pkg.bin);
}

const NO_EFFECT = ' is not installed, so that the task has no effect.';

export function logMissingPackages(missing: string | string[]): void {
  const list = normalizeArray(missing);
  if (list.length === 0) {
    return;
  }
  if (list.length === 1) {
    logger.warn(`The package ${pathsToString(list)}${NO_EFFECT}`);
    return;
  }
  logger.warn(`Some of the packages ${pathsToString(list)}${NO_EFFECT}`);
}
