import { CharcoalAbstractTheme } from '@charcoal-ui/theme'
import { customPropertyToken } from '@charcoal-ui/utils'
import { CSSObject } from 'styled-components'
import { Internal, internal } from '../internal'
import { isSupportedEffect, onEffectPseudo, variable } from '../lib'

const colorProperties = ['bg', 'font'] as const
type ColorProperty = typeof colorProperties[number]

function targetProperty(target: ColorProperty) {
  return target === 'bg' ? 'background-color' : 'color'
}

export const createColorCss =
  <T extends CharcoalAbstractTheme>(_theme: T) =>
  (
    target: ColorProperty,
    color: keyof T['color'],
    effects: readonly (keyof T['effect'])[] = []
  ): Internal =>
    internal(
      () => ({
        [targetProperty(target)]: variable(
          customPropertyToken(color.toString())
        ),
        ...effects.filter(isSupportedEffect).reduce<CSSObject>(
          (acc, effect) => ({
            ...acc,
            ...onEffectPseudo(effect, {
              [targetProperty(target)]: variable(
                customPropertyToken(color.toString(), [effect])
              ),
            }),
          }),
          {}
        ),
      }),
      effects.length > 0
        ? target === 'font'
          ? {
              colorTransition: true,
            }
          : {
              backgroundColorTransition: true,
            }
        : {}
    )
