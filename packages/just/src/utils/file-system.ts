import pth from 'path';
import fse from 'fs-extra';
import { normalizeArray } from './helpers';

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
export function pathsToString(paths: string | string[], from?: string): string {
  const array = normalizeArray(paths);

  if (array.length === 0) {
    return "''";
  }

  if (array.length > 1) {
    if (typeof from === 'string') {
      return `['${array.map(to => pth.relative(from, to)).join(`', '`)}']`;
    }
    return `['${array.join(`', '`)}']`;
  }

  if (typeof from === 'string') {
    return `'${pth.relative(from, array[0])}'`;
  }
  return `'${array[0]}'`;
}

const REG_TO_TRIM_DOTS = /^\.+|\.+$/g;

export function trimDots(text: string): string {
  return text.replace(REG_TO_TRIM_DOTS, '');
}

/**
 * Replace the extension name of the `path` with `ext`.
 * @param path the file path
 * @param ext the extension name to use
 */
export function replaceExtName(path: string, ext: string): string {
  const dirName = pth.dirname(path);
  const baseName = pth.basename(path, pth.extname(path));
  return pth.join(dirName, `${baseName}.${trimDots(ext)}`);
}

/**
 * Insert postfix to the filename of a path.
 * @param path the file path
 * @param postfix the postfix text, e.g. 'min'
 * @param separator the separator to combine original filename and prefix, default `'.'`
 */
export function applyPostfix(path: string, postfix: string, separator: string = '.'): string {
  const dirName = pth.dirname(path);
  const extName = pth.extname(path);
  const baseName = pth.basename(path, extName);
  return pth.join(dirName, `${baseName}${separator}${postfix}${extName}`);
}

/**
 * Insert prefix to the filename of a path.
 * @param path the file path
 * @param prefix the prefix text
 * @param separator the separator to combine original filename and the prefix, default `'.'`
 */
export function applyPrefix(path: string, prefix: string, separator: string = '.'): string {
  const dirName = pth.dirname(path);
  const extName = pth.extname(path);
  const baseName = pth.basename(path, extName);
  return pth.join(dirName, `${prefix}${separator}${baseName}${extName}`);
}
