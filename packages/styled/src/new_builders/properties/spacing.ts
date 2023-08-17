import { spacingDirections } from '../../builders/spacing'
import { CSS, InternalResult } from '../type'
import { css } from 'styled-components'
import { PropertyResult } from '../PropertyResult'
import { SingleCssClassContext } from '../ThemeObjectContext'
import { createGetCssFromCache } from './createGetCssFromCache'

export type SpacingChain<K extends string | symbol = ''> = {
  [key in (typeof spacingDirections)[number]]: (
    n: number
  ) => Omit<SpacingChain<K | key>, K | key> & InternalResult
}

export function createSpacingChain(
  propName: string,
  ctx: SingleCssClassContext
) {
  const getCss = createGetCssFromCache()
  const result = new PropertyResult()
  spacingDirections.forEach((key) => {
    Object.defineProperty(result, key, {
      get: () => (n: number) => {
        const cacheKey = `${propName}${key}${n}`
        let obj: CSS
        if (key === 'all') {
          obj = getCss(
            cacheKey,
            () =>
              css`
                ${propName}: ${n}px;
              `
          )
          const i = result._result.length - 1
          if (propName === 'padding') {
            ctx.hasPadding = true
            ctx.paddingOptimize.push(() => {
              result._result.splice(i, 1)
              result._result.push(
                css`
                  ${propName}: ${n - 4}px ${n}px ${n - 4}px ${n}px;
                `
              )
            })
          }
        } else if (key === 'horizontal') {
          obj = getCss(
            cacheKey,
            () =>
              css`
                ${propName}-left: ${n}px;
                ${propName}-right: ${n}px;
              `
          )
        } else if (key === 'vertical') {
          obj = getCss(
            cacheKey,
            () =>
              css`
                ${propName}-top: ${n}px;
                ${propName}-bottom: ${n}px;
              `
          )
          if (propName === 'padding') {
            const i = result._result.length - 1
            ctx.hasHalfLeadingOptimize = true
            ctx.hasPadding = true
            ctx.paddingOptimize.push(() => {
              result._result.splice(i, 1)
              result._result.push(
                css`
                  ${propName}-top:${n - 4}px;
                  ${propName}-bottom:${n - 4}px;
                `
              )
            })
          }
        } else {
          obj = getCss(
            cacheKey,
            () =>
              css`
                ${propName}-${key}: ${n}px;
              `
          )
        }
        result._result.push(obj)
        return result
      },
    })
  })
  return result as unknown as SpacingChain
}
