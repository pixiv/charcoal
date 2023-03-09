import { CharcoalAbstractTheme } from '@charcoal-ui/theme'
import { px, notDisabledSelector } from '@charcoal-ui/utils'
import { CSSObject } from 'styled-components'
import { Internal, internal } from './internal'

const outlineType = ['focus'] as const
type OutlineType = typeof outlineType[number]

const outlineCss = (weight: number, color: string) => ({
  boxShadow: `0 0 0 ${px(weight)} ${color}`,
})

export const createOutlineColorCss =
  <T extends CharcoalAbstractTheme>(theme: T) =>
  (
    variant: keyof T['outline'],
    modifiers: readonly OutlineType[]
  ): Internal => {
    const weight = theme.outline[variant].weight
    const color = theme.outline[variant].color
    return internal(
      () =>
        modifiers.includes('focus')
          ? onFocus(outlineCss(weight, color))
          : { '&&': { [notDisabledSelector]: outlineCss(weight, color) } },
      {
        boxShadowTransition: true,
      }
    )
  }

/**
 * @see https://developer.mozilla.org/ja/docs/Web/CSS/:focus-visible#selectively_showing_the_focus_indicator
 */
const onFocus = (css: CSSObject) => ({
  [notDisabledSelector]: {
    '&:focus, &:active': {
      outline: 'none',
      ...css,
    },

    '&:focus:not(:focus-visible), &:active:not(:focus-visible)': {
      outline: 'none',
    },

    '&:focus-visible': {
      outline: 'none',
      ...css,
    },
  },
})
