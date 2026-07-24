import deepmerge from 'deepmerge'
import { isNonEmptyArray } from './helpers/is-empty-array.ts'
import { nestObject } from './helpers/nest-object.ts'
import type { Tokens, TokenObject } from './types.ts'

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
