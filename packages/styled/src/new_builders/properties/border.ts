import { InternalResult } from '../type'
import { css } from 'styled-components'
import { PropertyResult } from '../PropertyResult'

export type BorderChain = {
  default: {
    top: InternalResult
    left: InternalResult
    right: InternalResult
    bottom: InternalResult
  } & InternalResult
}

/**
 * BorderChainに適用するオブジェクトを返す
 * 型は呼び方を制限するためのもので、実際のオブジェクト構造と異なる
 */
export function createBorderChain() {
  const result = new PropertyResult()
  let isAll = true
  const valueOf_default = {
    result,
    getResult() {
      return this.result.getResult()
    },
  }
  Object.defineProperty(result, 'default', {
    get() {
      result._result.push(
        css`
          border: 1px solid var(--charcoal-border-default);
        `
      )
      return valueOf_default
    },
  })
  dirs.forEach((dir) => {
    Object.defineProperty(valueOf_default, dir, {
      get() {
        if (isAll) {
          result._result = []
          isAll = false
        }
        result._result.push(
          css`border-${dir}: 1px solid var(--charcoal-border-default);`
        )
        return result
      },
    })
  })
  return result as unknown as BorderChain
}

const dirs = ['top', 'bottom', 'left', 'right']
