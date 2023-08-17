import { createGetCssFromCache } from './createGetCssFromCache'
import { css } from 'styled-components'
import { PropertyResult } from '../PropertyResult'
import { InternalResult } from '../type'
import { SingleCssClassContext } from '../ThemeObjectContext'

export type OutlineChain = {
  default: {
    focus: InternalResult
  } & InternalResult
  assertive: {
    focus: InternalResult
  } & InternalResult
}

class OutlinePropertyResult extends PropertyResult {
  color?: 'default' | 'assertive'
}

export function createOutlineChain(ctx: SingleCssClassContext) {
  const getCss = createGetCssFromCache()
  const result = new OutlinePropertyResult()
  const childrenProps = {
    result,
    getResult() {
      return this.result.getResult()
    },
  }

  Object.defineProperty(childrenProps, 'focus', {
    get() {
      const key = `${result.color ?? ''}focus`
      result._result = [
        getCss(
          key,
          () =>
            css`
              :focus {
                outline: none;
                box-shadow: 0 0 0 4px rgba(0, 150, 250, 0.32);
              }
            `
        ),
      ]
      return childrenProps
    },
  })

  Object.defineProperty(result, 'default', {
    get() {
      result.color = 'default'
      result._result.push(
        getCss(
          'default',
          () =>
            css`
              outline: none;
              box-shadow: 0 0 0 4px rgba(0, 150, 250, 0.32);
            `
        )
      )
      ctx.transitions.add(`box-shadow`)
      return childrenProps
    },
  })

  Object.defineProperty(result, 'assertive', {
    get() {
      result.color = 'assertive'
      result._result.push(
        getCss(
          'assertive',
          () =>
            css`
              outline: none;
              box-shadow: 0 0 0 4px rgba(255, 43, 0, 0.32);
            `
        )
      )
      ctx.transitions.add(`box-shadow`)
      return childrenProps
    },
  })

  return result as unknown as OutlineChain
}
