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

/**
 * Replace the extension name of the `path` with `ext`.
 * @param path the file path
 * @param ext the extension name to use
 */
export function replaceExtName(path: string, ext: string): string {
  const dirName = pth.dirname(path);
  const baseName = pth.basename(path, pth.extname(path));
  const fileName = `${baseName}${ext.startsWith('.') ? '' : '.'}${ext}`;
  return pth.join(dirName, fileName);
}
