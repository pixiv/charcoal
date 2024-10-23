import { createReferenceTokenResolver } from './reference-token'
import { toTokenObject } from './to-token-object'
import type { TokenObject, TokenDictionary, TokenValue } from './types'

export { camelCaseKeys } from './helpers/changecase-keys'

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
