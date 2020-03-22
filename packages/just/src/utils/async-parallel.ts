/**
 * Run async functions at the same time in specified limit number.
 * @param actions the list of async functions.
 * @param limit the limit number of actions can be run at the same time.
 */
export async function asyncParallel<T>(
  actions: readonly (() => Promise<T>)[],
  limit: number = 5,
): Promise<T[]> {
  if (actions.length === 0) {
    return [];
  }

  if (limit === 0 || limit >= actions.length) {
    return Promise.all(actions.map(async a => a()));
  }

  return new Promise<T[]>((resolve, reject) => {
    const { length } = actions;
    const pool = [...actions];
    const result: T[] = [];
    let activeCount = 0;
    let finishCount = 0;
    const invoke = async (): Promise<void> => {
      const index = activeCount;
      activeCount += 1;
      const { [index]: action } = pool;
      if (action) {
        try {
          result[index] = await action();
          finishCount += 1;
          if (finishCount === length) {
            resolve(result);
            return;
          }
        } catch (error) {
          reject(error);
          return;
        }
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        invoke();
      }
    };

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    Promise.all(pool.slice(0, limit).map(async () => invoke()));
  });
}
