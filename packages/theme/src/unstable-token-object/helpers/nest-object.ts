import { isNonEmptyArray } from './is-empty-array'

type MakeNestObject<P extends readonly string[], T> = P extends [
  infer Head,
  ...infer Tail
]
  ? Head extends string
    ? Tail extends string[]
      ? {
          [K in Head]: MakeNestObject<Tail, T>
        }
      : { [K in Head]: T }
    : T
  : T

export const nestObject = <P extends [string, ...string[]], T>(
  path: P,
  value: T
): MakeNestObject<P, T> => {
  if (!isNonEmptyArray(path)) throw new Error('Path must be a non-empty array')

  const [key, ...rest] = path
  if (!isNonEmptyArray(rest)) return { [key]: value } as MakeNestObject<P, T>

  return {
    [key]: nestObject(rest, value),
  } as MakeNestObject<P, T>
}
