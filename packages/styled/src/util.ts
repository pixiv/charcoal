/**
 * Function used to assert a given code path is unreachable
 */
export function unreachable(): never
/**
 * Function used to assert a given code path is unreachable.
 * Very useful for ensuring switches are exhaustive:
 *
 * ```ts
 * switch (a.type) {
 *   case Types.A:
 *   case Types.B:
 *     break
 *   default:
 *     unreachable(a) // will cause a build error if there was
 *                    // a Types.C that was not checked
 * }
 * ```
 *
 * @param value Value to be asserted as unreachable
 */
// NOTE: Uses separate overloads, _not_ `value?: never`, to not allow `undefined` to be passed
// eslint-disable-next-line @typescript-eslint/unified-signatures
export function unreachable(value: never): never
export function unreachable(value?: never): never {
  throw new Error(
    arguments.length === 0
      ? 'unreachable'
      : `unreachable (${JSON.stringify(value)})`
  )
}

/**
 * Check whether a value is non-null and non-undefined
 *
 * @param value nullable
 */
export const isPresent = <T>(value: T): value is NonNullable<T> => value != null

type Head<U> = U extends [infer T, ...any[]] ? T : never

type Tail<U> = U extends [any, any, ...any[]]
  ? ((...args: U) => any) extends (head: any, ...args: infer T) => any
    ? T
    : never
  : never
// Buggy at ts@4.0.0-dev20200506
// type Tail<U> = U extends [any, ...infer T] ? T : never

type RecursiveObjectAssign<T, S extends any[]> = {
  0: T & Head<S>
  1: RecursiveObjectAssign<T & Head<S>, Tail<S>>
}[Tail<S> extends never ? 0 : 1]

type ObjectAssign<T extends any[]> = RecursiveObjectAssign<
  Record<string, unknown>,
  T
>

export function objectAssign<T extends any[]>(...sources: T) {
  return Object.assign({}, ...sources) as ObjectAssign<T>
}

export function objectKeys<V, K extends keyof V>(obj: V) {
  return Object.keys(obj) as K[]
}

export interface ReadonlyArrayConstructor {
  isArray(value: any): value is readonly any[]
}

export function extractNonNullKeys<V, K extends keyof V>(obj: {
  [key in K]: V[key]
}) {
  return Object.entries(obj)
    .filter(([_, v]) => v !== null)
    .map(([k]) => k) as { [key in K]: V[key] extends null ? never : key }[K][]
}
