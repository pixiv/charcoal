import { TokenDictionary, Tokens } from './types'

export type ReferenceToken = `{${string}}`

const isReferenceToken = (value: string): value is ReferenceToken =>
  value.startsWith('{') && value.endsWith('}')

const parseReferenceToken = (
  value: ReferenceToken,
): [category: string, key: string] => {
  const [category, key] = value.slice(1, -1).split('.')

  return [category, key]
}

export const createReferenceTokenResolver = <T extends TokenDictionary>(
  tokenDictionary: T,
  baseTokenDictionary: TokenDictionary,
): ((value: string) => string) => {
  const resolver = (value: string): string => {
    if (!isReferenceToken(value)) return value

    const [category, tokenKey] = parseReferenceToken(value)
    const baseTokens = baseTokenDictionary[category] as Tokens | undefined

    return resolver(
      (baseTokens?.[tokenKey] ?? tokenDictionary[category][tokenKey]).value,
    )
  }

  return resolver
}
