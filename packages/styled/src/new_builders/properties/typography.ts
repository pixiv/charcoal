import { CSS, InternalResult } from '../type'
import { css } from 'styled-components'
import { PropertyResult } from '../PropertyResult'
import { createGetCssFromCache } from './createGetCssFromCache'
import { SingleCssClassContext } from '../ThemeObjectContext'

type TypographyStyleChain = {
  bold: string
  monospace: string
  preserveHalfLeading: string
}

export type TypographyChain<K extends number | string | symbol> = {
  [key in keyof TypographyStyleChain]: Omit<TypographyChain<K | key>, K | key> &
    InternalResult
}

class TypographyPropertyResult extends PropertyResult {
  removeHalfLeading = true
}

export function createTypographyChain(ctx: SingleCssClassContext) {
  const getCss = createGetCssFromCache()
  return function typography(n: number) {
    const result = new TypographyPropertyResult()
    ctx.hasHalfLeadingOptimize = true
    const obj = getCss(
      `${n}_hl`,
      () => css`
        display: flow-root;
        ::before {
          display: block;
          width: 0;
          height: 0;
          content: '';
          margin-top: -4px;
        }
        ::after {
          display: block;
          width: 0;
          height: 0;
          content: '';
          margin-bottom: -4px;
        }
      `
    )
    result._result.push(obj)
    result._result.push(
      getCss(
        `${n}`,
        () =>
          css`
            font-size: ${n}px;
            line-height: ${n + 8}px;
          `
      )
    )
    ctx.paddingOptimize.push(() => {
      result._result.splice(0, 1)
    })
    function createGetter(type: 'monospace' | 'bold' | 'preserveHalfLeading') {
      return function get() {
        const key = `${n}${type}`
        let obj: CSS
        if (type === 'bold') {
          obj = getCss(
            key,
            () =>
              css`
                font-weight: bold;
              `
          )
          result._result.push(obj)
        } else if (type === 'monospace') {
          obj = getCss(
            key,
            () =>
              css`
                font-family: monospace;
              `
          )
          result._result.push(obj)
        } else {
          if (result.removeHalfLeading) {
            result._result.splice(0, 1)
            ctx.hasHalfLeadingOptimize = false
          }
        }
        return result
      }
    }
    Object.defineProperty(result, 'bold', {
      get: createGetter('bold'),
    })
    Object.defineProperty(result, 'monospace', {
      get: createGetter('monospace'),
    })
    Object.defineProperty(result, 'preserveHalfLeading', {
      get: createGetter('preserveHalfLeading'),
    })
    return result
  } as unknown as (n: number) => TypographyChain<''> & InternalResult
}
