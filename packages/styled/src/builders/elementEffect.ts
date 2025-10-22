import { CharcoalAbstractTheme, EffectType } from '@charcoal-ui/theme'
import { CSSObject } from 'styled-components'
import {
  isSupportedEffect,
  keyof,
  onEffectPseudo,
  ReadonlyArrayConstructor,
  unreachable,
} from '../util'
import { Internal, createInternal } from '../internals'
import { definePropertyChains } from '../factories/lib'

export const createElementEffectCss =
  <
    T extends CharcoalAbstractTheme,
    TElementEffect extends T['elementEffect'],
  >(theme: {
    elementEffect: TElementEffect
  }) =>
  (effects: readonly (keyof TElementEffect)[] = []): Internal =>
    createInternal({
      toCSS() {
        return effects.filter(isSupportedEffect).reduce<CSSObject>(
          (acc, effect) => ({
            ...acc,
            ...onEffectPseudo(effect, {
              opacity:
                !(Array as ReadonlyArrayConstructor).isArray(
                  theme.elementEffect[effect],
                ) && theme.elementEffect[effect]?.type === 'opacity'
                  ? theme.elementEffect[effect]?.opacity
                  : unreachable(),
            }),
          }),
          {},
        )
      },
    })

export default function elementEffect<T extends CharcoalAbstractTheme>(
  theme: T,
) {
  const effectTypes = keyof<T['elementEffect']>(
    theme.elementEffect,
  ) as EffectType[]

  // 要素へのエフェクト (etc: 透過)
  const elementEffectCss = createElementEffectCss(theme)
  const elementEffectObject = definePropertyChains(effectTypes, (modifiers) =>
    elementEffectCss(modifiers),
  )

  return elementEffectObject
}
