import { InternalResult } from '../type'
import { createGetCssFromCache } from './createGetCssFromCache'
import { css } from 'styled-components'

export function borderRadiusChain(n: number | 'oval') {
  const getCss = createGetCssFromCache()
  return {
    getResult: () => {
      if (n === 'oval') {
        return [
          getCss(
            n,
            () =>
              css`
                border-radius: 99999px;
              `
          ),
        ]
      }
      return [
        getCss(
          `${n}`,
          () =>
            css`
              border-radius: ${n}px;
            `
        ),
      ]
    },
  } as unknown as InternalResult
}
