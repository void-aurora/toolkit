import { VERSION, helloWorld, sayHello, fake } from './index';

const pkg = require('../package.json');

describe('index.ts', () => {
  test('validate variable', () => {
    expect(VERSION).toEqual(pkg.version);
    expect(helloWorld).toEqual('Hello World!');
    expect(sayHello()).toEqual(helloWorld);
    expect(fake()).toEqual('this is a fake function');
  });
});
