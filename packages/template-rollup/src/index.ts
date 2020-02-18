// eslint-disable-next-line import/no-unassigned-import
import 'core-js';

export const helloWorld = 'Hello World!';

export * from './modules/foo';
export * from './modules/bar';
export * from './modules/fake';

export function sayHello(): void {
  console.log(helloWorld);
}
