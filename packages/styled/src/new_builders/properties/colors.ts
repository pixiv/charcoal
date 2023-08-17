import { InternalResult } from '../type'
import { css } from 'styled-components'
import { SingleCssClassContext } from '../ThemeObjectContext'
import { PropertyResult } from '../PropertyResult'
import { createGetCssFromCache } from './createGetCssFromCache'

export type ColorChain<K extends number | string | symbol, KEY, KEY2> = {
  [key in keyof KEY]: Omit<ColorChainSecondProps<K | key, KEY2>, K | key> &
    InternalResult
}

export type ColorChainSecondProps<K extends number | string | symbol, KEY> = {
  [key in keyof KEY]: Omit<ColorChainSecondProps<K | key, KEY>, K | key> &
    InternalResult
}

export type HoverPressEffect = {
  hover: string
  press: string
}

const callToActionMap = {
  hover: css`
    background-color: #c9f519;
    background-image: linear-gradient(to right, #c9f519 0%, #19c9f5 100%);
  `,
  active: css`
    background-color: #b0d616;
    background-image: linear-gradient(to right, #b0d616 0%, #16b0d6 100%);
  `,
  value: css`
    background-color: #d1ff1a;
    background-image: linear-gradient(to right, #d1ff1a 0%, #1ad1ff 100%);
  `,
}
export function createBGChain<KEY extends object>(
  propName: string,
  obj: KEY,
  ctx: SingleCssClassContext
): ColorChain<'', KEY, HoverPressEffect> {
  const getCss = createGetCssFromCache()
  const result = new PropertyResult()
  let color = ''
  const valueOf_color = {
    parent: result,
    getResult() {
      return this.parent.getResult()
    },
  }
  function createGetter(effect: string, selector: 'hover' | 'active') {
    return function get() {
      const key = `${color}-${effect}`
      const obj = getCss(
        key,
        () => css`
          :${selector}:not(:disabled):not([aria-disabled]),&[aria-disabled=false]  {
            ${propName}: var(--charcoal-${color}-${effect});
          }
        `
      )
      if (color === 'callToAction') {
        valueOf_color.parent._result.push(callToActionMap[selector])
        return
      }
      ctx.transitions.add(propName)
      valueOf_color.parent._result.push(obj)
      return valueOf_color
    }
  }
  Object.defineProperty(valueOf_color, 'hover', {
    get: createGetter('hover', 'hover'),
  })
  Object.defineProperty(valueOf_color, 'press', {
    get: createGetter('press', 'active'),
  })

  Object.keys(obj).forEach((key) => {
    Object.defineProperty(result, key, {
      get() {
        color = key
        const obj = getCss(
          key,
          () => css`
            ${propName}: var(--charcoal-${key});
          `
        )
        result._result.push(obj)
        return valueOf_color
      },
    })
  })
  Object.defineProperty(result, 'callToAction', {
    get() {
      return function (_dir: string) {
        // TODO: dirに合わせてスタイルを変更する
        const obj = callToActionMap.value
        result._result.push(obj)
        return valueOf_color
      }
    },
  })

  return result as unknown as ColorChain<'', KEY, HoverPressEffect>
}
