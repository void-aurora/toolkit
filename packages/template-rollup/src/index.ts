export const version = __VERSION__;
export const helloWorld = 'Hello World!';

export * from './modules/foo';
export * from './modules/bar';
export * from './modules/fake';

/**
 * Say hello to console.
 */
export function sayHello(): void {
  console.log(helloWorld);
}
