/**
 * Run async functions at the same time in specified limit number.
 * @param actions the list of async functions.
 * @param limit the limit number of actions can be run at the same time.
 */
export async function asyncParallel<T>(
  actions: readonly (() => Promise<T>)[],
  limit: number = 5,
): Promise<T[]> {
  return new Promise<T[]>((resolve, reject) => {
    let count = 0;
    const max = Math.min(actions.length, limit);
    const result: T[] = [];

    const invoke = async (index: number): Promise<void> => {
      count += 1;
      try {
        result[index] = await actions[index]();
      } catch (error) {
        reject(error);
        return;
      }

      if (count === actions.length) {
        resolve(result);
        return;
      }

      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      invoke(count);
    };

    for (let index = 0; index < max; index++) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      invoke(index);
    }
  });
}
