import pth from 'path';
import fse from 'fs-extra';
import { normalizeArray } from './helpers';

const REG_SEP = /\\|\//g;
const REG_DOTS_START_END = /^\.+|\.+$/g;

/**
 * Normalize path separator to posix style `/`.
 */
export function normalizePathSep(path: string): string {
  return path.replace(REG_SEP, '/');
}

export async function isDirectory(path: string): Promise<boolean> {
  const stats = await fse.stat(path);
  return stats.isDirectory();
}

export async function isFile(path: string): Promise<boolean> {
  const stats = await fse.stat(path);
  return stats.isFile();
}

/**
 * Wrap paths as print text.
 * @param paths the paths
 * @param from solve path relative from
 */
export function pathsToString(
  paths: string | string[] | Record<string, string> | undefined,
  from?: string,
): string {
  const array: string[] = [];

  switch (typeof paths) {
    case 'undefined':
      return `''`;

    case 'string':
      array.push(paths.trim());
      break;

    case 'object':
      if (Array.isArray(paths)) {
        paths.forEach(p => array.push(p.trim()));
      } else {
        Object.values(paths).forEach(p => array.push(p.trim()));
      }
      break;

    default:
      throw new Error(
        `Invalid value ${Object.prototype.toString.call(paths)} of the param 'paths'`,
      );
  }

  if (array.length === 0) {
    return `''`;
  }

  if (array.length > 1) {
    if (typeof from === 'string') {
      return normalizePathSep(`['${array.map(to => pth.relative(from, to)).join(`', '`)}']`);
    }
    return `['${array.join(`', '`)}']`;
  }

  if (typeof from === 'string') {
    return normalizePathSep(`'${pth.relative(from, array[0])}'`);
  }
  return `'${array[0]}'`;
}

export function trimDots(text: string): string {
  return text.replace(REG_DOTS_START_END, '');
}

/**
 * Replace the extension name of the `path` with `ext`.
 * @param path the file path
 * @param ext the extension name to use
 */
export function replaceExtName(path: string, ext: string): string {
  const dirName = pth.dirname(path);
  const baseName = pth.basename(path, pth.extname(path));
  return normalizePathSep(pth.join(dirName, `${baseName}.${trimDots(ext)}`));
}

/**
 * Insert postfix to the basename of a path.
 * @param path the file path
 * @param postfix the postfix text, e.g. 'min'
 * @param separator the separator to combine original basename and postfix, default `'.'`
 */
export function applyPostfix(path: string, postfix: string, separator: string = '.'): string {
  const dirName = pth.dirname(path);
  const extName = pth.extname(path);
  const baseName = pth.basename(path, extName);
  return normalizePathSep(pth.join(dirName, `${baseName}${separator}${postfix}${extName}`));
}

/**
 * Insert prefix to the basename of a path.
 * @param path the file path
 * @param prefix the prefix text
 * @param separator the separator to combine original basename and the prefix, default `'.'`
 */
export function applyPrefix(path: string, prefix: string, separator: string = '.'): string {
  const dirName = pth.dirname(path);
  const extName = pth.extname(path);
  const baseName = pth.basename(path, extName);
  return normalizePathSep(pth.join(dirName, `${prefix}${separator}${baseName}${extName}`));
}
