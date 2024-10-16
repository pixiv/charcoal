import deepmerge from 'deepmerge'
import {
  NestedObject,
  Tokens,
  MappedTokenObject,
  TokenMap,
} from './types'

const isNonEmptyArray = <T>(arr: T[]): arr is [T, ...T[]] => arr.length > 0

export const pathToObject = <P extends [string, ...string[]], T>(
  path: P,
  value: T
): NestedObject<P, T> => {
  if (!isNonEmptyArray(path)) throw new Error('Path must be a non-empty array')

  const [key, ...rest] = path
  if (!isNonEmptyArray(rest)) return { [key]: value } as NestedObject<P, T>

  return {
    [key]: pathToObject(rest, value),
  } as NestedObject<P, T>
}

export const mappedTokenObject = <T extends Tokens>(
  tokens: T
): MappedTokenObject<T> => {
  let result = {}
  for (const key in tokens) {
    const { value } = tokens[key]
    const splitted = key.split('/')
    if (!isNonEmptyArray(splitted)) continue

    const v = pathToObject(splitted, value)
    result = deepmerge(result, v)
  }

  return result as MappedTokenObject<T>
}

type Template = `{${string}}`
const isTemplate = (value: string): value is Template =>
  value.startsWith('{') && value.endsWith('}')

const parseTemplate = (value: Template): [string, string] => {
  const [category, key] = value.slice(1, -1).split('.')

  return [category, key]
}

export const createTemplateResolver = <T extends TokenMap>(
  tokenMap: T,
  baseToken: TokenMap
) => {
  const resolver = (value: string): string => {
    if (!isTemplate(value)) return value

    const [category, tokenKey] = parseTemplate(value)
    const baseTokens = baseToken[category] as Tokens | undefined

    return resolver(
      (baseTokens?.[tokenKey] ?? tokenMap[category][tokenKey]).value
    )
  }

  return resolver
}

export const createTokenObject = <T extends TokenMap>(
  tokenMap: T,
  baseToken: TokenMap,
): { [K in keyof T]: MappedTokenObject<T[K]> } => {
  const result = {} as { [K in keyof T]: MappedTokenObject<T[K]> }
  const templateResolver = createTemplateResolver(tokenMap, baseToken)

  for (const category in tokenMap) {
    const value = tokenMap[category]

    // category ごとに template を展開していく
    const transformed = Object.fromEntries(
      Object.entries(value).map(([key, value]) => [
        key,
        { value: templateResolver(value.value) },
      ])
    ) as typeof value

    result[category] = mappedTokenObject(transformed)
  }

  return result
}
