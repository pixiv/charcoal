import { CharcoalAbstractTheme } from '@charcoal-ui/theme'
import {
  applyEffect,
  applyEffectToGradient,
  dur,
  gradient,
  GradientDirection,
} from '@charcoal-ui/utils'
import { CSSObject } from 'styled-components'
import warning from 'warning'
import { internal, Internal } from '../internal'
import { isSupportedEffect, onEffectPseudo } from '../lib'
import { TRANSITION_DURATION } from './transition'
import { useHalfLeadingCanceller } from './typography'

const overlayElement: CSSObject = {
  content: "''",
  display: 'block',
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
}

export const createGradientColorCss =
  <T extends CharcoalAbstractTheme>(theme: T) =>
  (
    color: keyof T['gradientColor'],
    effects: readonly (keyof T['effect'])[] = [],
    direction: GradientDirection
  ): Internal => {
    const toLinearGradient = gradient(direction)
    return internal((context) => {
      const optimized = !useHalfLeadingCanceller(context)
      const duration = dur(TRANSITION_DURATION)
      if (optimized && effects.length > 0) {
        return {
          position: 'relative',
          zIndex: 0,
          overflow: 'hidden',
          ...effects.filter(isSupportedEffect).reduce<CSSObject>(
            (acc, effect) => ({
              ...acc,
              '&::before': {
                zIndex: -1,
                ...overlayElement,
                transition: `${duration} background-color`,
              },
              '&::after': {
                zIndex: -2,
                ...overlayElement,
                ...toLinearGradient(theme.gradientColor[color]),
              },
              ...onEffectPseudo(effect, {
                '&::before': {
                  backgroundColor: applyEffect(
                    null,
                    theme.effect[effect] ?? []
                  ),
                },
              }),
            }),
            {}
          ),
        }
      } else {
        warning(
          effects.length === 0,
          // eslint-disable-next-line max-len
          `'Transition' will not be applied. You can get around this by specifying 'preserveHalfLeading' or both 'padding' and 'typograpy'.`
        )
        return {
          ...toLinearGradient(theme.gradientColor[color]),
          ...effects.filter(isSupportedEffect).reduce<CSSObject>(
            (acc, effect) => ({
              ...acc,
              ...onEffectPseudo(effect, {
                ...toLinearGradient(
                  applyEffectToGradient(theme.effect[effect] ?? [])(
                    theme.gradientColor[color]
                  )
                ),
              }),
            }),
            {}
          ),
        }
      }
    })
  }
