import { CharcoalAbstractTheme } from '@charcoal-ui/theme'
import { CSSObject } from 'styled-components'
import { ReadonlyArrayConstructor, unreachable } from '../util'
import { Internal, internal } from './internal'
import { isSupportedEffect, onEffectPseudo } from './lib'

export const createElementEffectCss =
  <
    T extends CharcoalAbstractTheme,
    TElementEffect extends T['elementEffect']
  >(theme: {
    elementEffect: TElementEffect
  }) =>
  (effects: readonly (keyof TElementEffect)[] = []): Internal =>
    internal(() =>
      effects.filter(isSupportedEffect).reduce<CSSObject>(
        (acc, effect) => ({
          ...acc,
          ...onEffectPseudo(effect, {
            opacity:
              !(Array as ReadonlyArrayConstructor).isArray(
                theme.elementEffect[effect]
              ) && theme.elementEffect[effect]?.type === 'opacity'
                ? theme.elementEffect[effect]?.opacity
                : unreachable(),
          }),
        }),
        {}
      )
    )
