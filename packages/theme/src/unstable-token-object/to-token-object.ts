import deepmerge from 'deepmerge'
import { isNonEmptyArray } from './helpers/is-empty-array'
import { nestObject } from './helpers/nest-object'
import { Tokens, TokenObject } from './types'

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
