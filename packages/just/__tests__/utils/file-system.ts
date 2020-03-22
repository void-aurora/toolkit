import pth from 'path';
import { isDirectory, isFile, pathsToString, replaceExtName } from '../../src/utils/file-system';

function sep(path: string): string {
  return path.replace(/\\|\//g, pth.sep);
}

describe('utils/file-system.ts', () => {
  test('isDirectory', async () => {
    expect(await isDirectory(__dirname)).toEqual(true);
    expect(await isDirectory(__filename)).toEqual(false);
  });

  test('isDirectory error while not exists', async () => {
    expect.assertions(1);
    try {
      await isDirectory(pth.resolve(__dirname, '..', 'foobar', '__not_exists__'));
    } catch (error) {
      expect((error as NodeJS.ErrnoException).message).toMatch('ENOENT: no such file or directory');
    }
  });
  test('isFile', async () => {
    expect(await isFile(__dirname)).toEqual(false);
    expect(await isFile(__filename)).toEqual(true);
  });

  test('isFile error while not exists', async () => {
    try {
      await isFile(pth.resolve(__dirname, '..', 'foobar', '__not_exists__'));
    } catch (error) {
      expect((error as NodeJS.ErrnoException).message).toMatch('ENOENT: no such file or directory');
    }
  });

  test('pathsToString', () => {
    expect(pathsToString('')).toEqual(`''`);
    expect(pathsToString([])).toEqual(`''`);

    expect(pathsToString('/foo/bar')).toEqual("'/foo/bar'");
    expect(pathsToString(['/foo/bar'])).toEqual("'/foo/bar'");
    expect(pathsToString(['/foo/bar', '/bar/foo'])).toEqual("['/foo/bar', '/bar/foo']");

    expect(pathsToString('/foo/bar', '/foo')).toEqual(sep("'bar'"));
    expect(pathsToString('/bar/bar', '/foo')).toEqual(sep("'../bar/bar'"));
    expect(pathsToString(['/foo/bar', '/foo/barbar', '/foo/foo'], '/foo')).toEqual(
      "['bar', 'barbar', 'foo']",
    );
    expect(pathsToString(['/foo/bar', '/foo/barbar', '/foo/foo', '/bar/foo'], '/foo')).toEqual(
      sep("['bar', 'barbar', 'foo', '../bar/foo']"),
    );
  });

  test('replaceExtName', () => {
    expect(replaceExtName('foobar.foo', 'bar')).toEqual(sep('foobar.bar'));
    expect(replaceExtName('foobar.foo', '.bar')).toEqual(sep('foobar.bar'));
    expect(replaceExtName('/foo/bar/foobar.foo', 'bar')).toEqual(sep('/foo/bar/foobar.bar'));
    expect(replaceExtName('/foo/bar/foobar.foo', '.bar')).toEqual(sep('/foo/bar/foobar.bar'));
    expect(replaceExtName('../foo/foobar.foo', 'bar')).toEqual(sep('../foo/foobar.bar'));
    expect(replaceExtName('../bar/foobar.foo', '.bar')).toEqual(sep('../bar/foobar.bar'));

    expect(replaceExtName('foobar.foo', 'min.bar')).toEqual(sep('foobar.min.bar'));
    expect(replaceExtName('foobar.foo', '.min.bar')).toEqual(sep('foobar.min.bar'));
    expect(replaceExtName('/foo/bar/foobar.foo', 'min.bar')).toEqual(
      sep('/foo/bar/foobar.min.bar'),
    );
    expect(replaceExtName('/foo/bar/foobar.foo', '.min.bar')).toEqual(
      sep('/foo/bar/foobar.min.bar'),
    );
    expect(replaceExtName('../foo/foobar.foo', 'min.bar')).toEqual(sep('../foo/foobar.min.bar'));
    expect(replaceExtName('../bar/foobar.foo', '.min.bar')).toEqual(sep('../bar/foobar.min.bar'));
  });
});
