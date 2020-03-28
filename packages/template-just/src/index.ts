import axios from 'axios';
import data, { names, foo, amount } from './data.json';

export { data };

export const version = __VERSION__;
export const env = __NODE_ENV__;

/**
 * The hello world text.
 */
export const helloWorld = 'Hello, World!';

/**
 * Return hello world text.
 */
export function sayHello(): string {
  return helloWorld;
}

export async function fetchHello(): Promise<string> {
  const { data: content } = await axios.get<string>('http://github.com/', {
    params: { names, foo, amount },
  });
  return content;
}
