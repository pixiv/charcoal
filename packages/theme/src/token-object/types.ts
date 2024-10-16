type UnionToIntersection<U> =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (U extends any ? (k: U) => void : never) extends (k: infer I) => void
  ? I
  : never

type TokenValue = string
export type Tokens = Record<string, { value: TokenValue }>
export type TokenMap = Record<string, Tokens>

export type ChainCaseToCamelCase<
  S extends string,
  D extends string = '-'
> = S extends `${infer F}${D}${infer R}`
  ? `${F}${Capitalize<ChainCaseToCamelCase<R>>}`
  : S
type ToTokenObject<S extends string, V> = S extends `${infer F}/${infer R}`
  ? {
    [K in F]: ToTokenObject<R, V>
  }
  : {
    [K in S]: V
  }

export type MappedTokenObject<T extends Tokens> = UnionToIntersection<
  {
    [K in keyof T]: ToTokenObject<K & string, T[K]['value']>
  }[keyof T]
>

export type NestedObject<P extends readonly string[], T> = P extends [
  infer Head,
  ...infer Tail
]
  ? Head extends string
  ? Tail extends string[]
  ? {
    [K in Head]: NestedObject<Tail, T>
  }
  : { [K in Head]: T }
  : T
  : T
