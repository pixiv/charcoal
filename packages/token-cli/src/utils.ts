export function mustBeDefined<T>(
  value: T,
  name: string,
): asserts value is NonNullable<T> {
  if (typeof value === 'undefined') {
    throw new TypeError(`${name} must be defined.`)
  }
}
