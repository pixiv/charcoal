import { CSS, InternalResult } from '../type'
import { css } from 'styled-components'
import { columnSystem } from '@charcoal-ui/foundation'
import { createGetCssFromCache } from './createGetCssFromCache'

export type SizeChain = {
  px: (n: number) => InternalResult
  column: (n: number) => InternalResult
  auto: InternalResult
  full: InternalResult
}

export function createSizeChain(name: 'width' | 'height') {
  const getCss = createGetCssFromCache()
  const result = {
    _result: [] as CSS[],
    getResult() {
      return this._result.splice(0, this._result.length)
    },
    px(n: number) {
      const key = `${name}${n}`
      this._result.push(
        getCss(
          key,
          () =>
            css`
              ${name}:${n}px;
            `
        )
      )
      return this
    },
    column(n: number) {
      const key = `${name}${n}`
      this._result.push(
        getCss(
          key,
          () =>
            css`
              ${name}:${columnSystem(n, 80, 24)}px;
            `
        )
      )
      return this
    },
  }
  Object.defineProperty(result, 'auto', {
    get() {
      const key = `${name}auto`
      result._result.push(
        getCss(
          key,
          () =>
            css`
              ${name}:auto;
            `
        )
      )
      return result
    },
  })
  Object.defineProperty(result, 'full', {
    get() {
      const key = `${name}auto`
      result._result.push(
        getCss(
          key,
          () =>
            css`
              ${name}:100%;
            `
        )
      )
      return result
    },
  })
  return result as unknown as SizeChain
}
