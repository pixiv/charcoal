import { camelCase } from 'change-case'

const isObject = (value: unknown): value is Record<string, unknown> => {
  if (value instanceof RegExp) return false
  if (value instanceof Date) return false
  if (value instanceof Error) return false

  return typeof value === 'object' && value !== null
}

type CamelCase<
  T extends string,
  D extends string = '-'
> = T extends `${infer A}${D}${infer B}`
  ? `${Lowercase<A>}${Capitalize<CamelCase<B, D>>}`
  : T

type CamelCaseKeys<
  T extends Record<string, unknown>,
  D extends string = '-'
> = {
  [K in keyof T as CamelCase<K & string, D>]: T[K] extends Record<
    string,
    unknown
  >
    ? CamelCaseKeys<T[K], D>
    : T[K]
}

export const camelCaseKeys = <
  T extends Record<string, unknown>,
  Delimiter extends string = '-'
>(
  obj: T
): CamelCaseKeys<T, Delimiter> => {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [
      camelCase(key),
      isObject(value) ? camelCaseKeys(value) : value,
    ])
  ) as CamelCaseKeys<T, Delimiter>
}
