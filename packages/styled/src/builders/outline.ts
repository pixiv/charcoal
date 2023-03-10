import { CharcoalAbstractTheme } from '@charcoal-ui/theme'
import { px, notDisabledSelector } from '@charcoal-ui/utils'
import { CSSObject } from 'styled-components'
import { objectKeys } from '../util'
import { Internal, createInternal } from './internal'
import { constFactory, factory, modifiedFactory } from '../factories/lib'

export const outlineType = ['focus'] as const
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

    return createInternal({
      toCSS() {
        return modifiers.includes('focus')
          ? onFocus(outlineCss(weight, color))
          : { '&&': { [notDisabledSelector]: outlineCss(weight, color) } }
      },
      context: {
        boxShadowTransition: true,
      },
    })
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

export default function outline<T extends CharcoalAbstractTheme>(theme: T) {
  const outlineCss = createOutlineColorCss(theme)
  const outlineObject = constFactory(
    {},
    {
      outline: factory({}, objectKeys(theme.outline), (variant) =>
        modifiedFactory(outlineType, (modifiers) =>
          outlineCss(variant, modifiers)
        )
      ),
    }
  )

  return outlineObject
}
