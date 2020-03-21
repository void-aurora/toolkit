import pth from 'path';
import {
  isDirectory,
  isFile,
  toRelativePathString,
  replaceExtName,
} from '../../src/utils/file-system';

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

  test('toRelativePathString', () => {
    expect(toRelativePathString('/foo', '/foo/bar')).toEqual("'bar'");
    expect(toRelativePathString('/foo', '/bar/bar')).toEqual("'../bar/bar'");
    expect(toRelativePathString('/foo', ['/foo/bar', '/foo/barbar', '/foo/foo'])).toEqual(
      "['bar', 'barbar', 'foo']",
    );
    expect(
      toRelativePathString('/foo', ['/foo/bar', '/foo/barbar', '/foo/foo', '/bar/foo']),
    ).toEqual("['bar', 'barbar', 'foo', '../bar/foo']");
  });

  test('replaceExtName', () => {
    expect(replaceExtName('foobar.foo', 'bar')).toEqual('foobar.bar');
    expect(replaceExtName('foobar.foo', '.bar')).toEqual('foobar.bar');
    expect(replaceExtName('/foo/bar/foobar.foo', 'bar')).toEqual('/foo/bar/foobar.bar');
    expect(replaceExtName('/foo/bar/foobar.foo', '.bar')).toEqual('/foo/bar/foobar.bar');
    expect(replaceExtName('../foo/foobar.foo', 'bar')).toEqual('../foo/foobar.bar');
    expect(replaceExtName('../bar/foobar.foo', '.bar')).toEqual('../bar/foobar.bar');
  });
});
