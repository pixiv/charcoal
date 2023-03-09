import { CSSObject } from 'styled-components'
import { Context } from './context'

/**
 * NEVER export this
 */
const internalSym: unique symbol = Symbol('internal')

export function internal(
  operation: (context: Context) => CSSObject,
  context: Context = {}
): Internal {
  return {
    [internalSym]: {
      operation,
      context,
    },
  }
}

export interface Internal {
  [internalSym]: {
    operation: (context: Context) => CSSObject
    context: Context
  }
}

export function __DO_NOT_USE_GET_INTERNAL__(target: Internal) {
  return target[internalSym]
}
