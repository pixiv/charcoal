import deepmerge from 'deepmerge'
import { isNonEmptyArray } from './helpers/is-empty-array'
import { nestObject } from './helpers/nest-object'
import { createReferenceTokenResolver } from './reference-token'
import type { Tokens, TokenObject, TokenDictionary, TokenValue } from './types'

export const toTokenObject = <T extends Tokens>(tokens: T): TokenObject<T> => {
  let result = {}
  for (const key in tokens) {
    const { value } = tokens[key]
    const splitted = key.split('/')
    if (!isNonEmptyArray(splitted)) continue

    const v = nestObject(splitted, value)
    result = deepmerge(result, v)
  }

  return result as TokenObject<T>
}

export const createTokenObject = <T extends TokenDictionary>(
  tokenDictionary: T,
  baseTokenDictionary: TokenDictionary
): { [K in keyof T]: TokenObject<T[K]> } => {
  const result = {} as { [K in keyof T]: TokenObject<T[K]> }
  const referenceTokenResolver = createReferenceTokenResolver(
    tokenDictionary,
    baseTokenDictionary
  )

  for (const category in tokenDictionary) {
    const value = tokenDictionary[category]

    // category ごとに template を展開していく
    const resolvedTokens = Object.fromEntries(
      Object.entries(value).map(([key, value]) => [
        key,
        { value: referenceTokenResolver(value.value) } satisfies TokenValue,
      ])
    ) as typeof value

    result[category] = toTokenObject(resolvedTokens)
  }

  return result
}
