import { CharcoalAbstractTheme } from '@charcoal-ui/theme'
import { createTypographyChain } from './properties/typography'
import { createBGChain } from './properties/colors'
import { CSS, InternalResult } from './type'
import { createSizeChain } from './properties/size'
import { css } from 'styled-components'
import { createSpacingChain } from './properties/spacing'
import { createOutlineChain } from './properties/outline'
import { borderRadiusChain } from './properties/borderRadius'
import { disabledChain } from './properties/disabled'
import { createBorderChain } from './properties/border'
import { PropertyResult } from './PropertyResult'
import { ThemeObject } from './ThemeObject'
import { SingleCssClassContext } from './ThemeObjectContext'

/**
 * 実験的に高速化したcreateTheme
 *
 * @param theme 適用したいテーマのスキーマを持つオブジェクト、各キーを利用するのでライトでもダークでも良い。
 * @returns
 */
export function createTheme_experimental<T extends CharcoalAbstractTheme>(
  theme: T
): (
  cb: (
    o: ThemeObject<T['color']>
  ) => InternalResult | (InternalResult | undefined | false)[]
) => CSS[] {
  const ctx: SingleCssClassContext = {
    transitions: new Set(),
    paddingOptimize: [],
  }
  const o = {
    bg: createBGChain('background-color', theme.color, ctx),
    font: createBGChain('color', theme.color, ctx),
    margin: createSpacingChain('margin', ctx),
    padding: createSpacingChain('padding', ctx),
    disabled: disabledChain,
    width: createSizeChain('width'),
    height: createSizeChain('height'),
    borderRadius: borderRadiusChain,
    typography: createTypographyChain(ctx),
    outline: createOutlineChain(ctx),
    border: createBorderChain(),
  } as ThemeObject<T['color']>

  return (cb) => {
    const results = cb(o)
    let cssList: CSS[] = []
    if (ctx.hasHalfLeadingOptimize === true && ctx.hasPadding === true) {
      ctx.paddingOptimize.map((x) => x())
    }
    if (!Array.isArray(results)) {
      cssList = (results as unknown as PropertyResult).getResult()
    } else {
      const allResults = results
        .filter((x) => x !== undefined && x !== false)
        .map((x) => (x as unknown as PropertyResult).getResult())
      cssList = allResults.flat()
    }
    cssList.push(createTransitions(ctx))
    ctx.transitions = new Set()
    if (ctx.hasHalfLeadingOptimize === true) {
      ctx.hasHalfLeadingOptimize = undefined
    }
    if (ctx.hasPadding === true) {
      ctx.hasPadding = undefined
    }
    ctx.paddingOptimize = []
    return cssList
  }
}

function createTransitions(ctx: SingleCssClassContext) {
  return css`
    transition: ${[...ctx.transitions].map((x) => `0.2s ${x}`).join(',')};
  `
}
