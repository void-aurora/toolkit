import pth from 'path';
import fse from 'fs-extra';

export async function isDirectory(path: string): Promise<boolean> {
  const stats = await fse.stat(path);
  return stats.isDirectory();
}

export async function isFile(path: string): Promise<boolean> {
  const stats = await fse.stat(path);
  return stats.isFile();
}

/**
 * Converts paths to relative paths.
 * The result string will be wrapped as `'<path>'` or `'['<path1>', '<path2>']'` automatically
 */
export function toRelativePathString(basePath: string, paths: string | string[]): string {
  if (Array.isArray(paths)) {
    return `['${paths.map(p => pth.relative(basePath, p)).join(`', '`)}']`;
  }

  return `'${pth.relative(basePath, paths)}'`;
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
