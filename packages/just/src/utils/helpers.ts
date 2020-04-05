/**
 * Uses to normalize a argument to array type.
 * @param value the value of the argument.
 */
export function normalizeArray<T>(value: T | T[]): T[] {
  if (Array.isArray(value)) {
    return value;
  }
  return [value];
}

export function notEmptyString(value: string | null | undefined): value is string {
  return typeof value === 'string' && value !== '';
}
