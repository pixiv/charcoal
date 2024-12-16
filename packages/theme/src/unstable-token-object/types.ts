type UnionToIntersection<U> =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (U extends any ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never

export type TokenValue = { value: string }
export type Tokens = {
  [key: string]: TokenValue
}
export type TokenDictionary = {
  [category: string]: Tokens
}

type TokenToObject<S extends string, V> = S extends `${infer F}/${infer R}`
  ? { [K in F]: TokenToObject<R, V> }
  : { [K in S]: V }

export type TokenObject<T extends Tokens> = UnionToIntersection<
  { [K in keyof T]: TokenToObject<K & string, T[K]['value']> }[keyof T]
>
