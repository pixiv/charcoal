import { Material } from '@charcoal-ui/foundation'
import { applyEffect, filterObject, mapObject } from '@charcoal-ui/utils'
import type { TailwindConfig } from 'tailwindcss/tailwind-config'
import { MergedEffect } from '../foundation'

import { TailwindVersion } from '../types'
import { getDefaultKeyName } from '../util'

import { AnyColorTheme, COLOR_PREFIX, isSingleColor } from './utils'

export function colorsToTailwindConfig(
  version: TailwindVersion,
  colors: AnyColorTheme,
  effects: MergedEffect
): TailwindConfig['theme']['colors'] {
  const targetColors = filterObject(colors, isSingleColor)
  const DEFAULT = getDefaultKeyName(version)

  /**
   * こういう感じのを吐き出す
   *
   * ```js
   * {
   *   DEFAULT: 'var(--tailwind-color-hoge1, #fff)',
   *   hover: 'var(--tailwind-color-hoge1--hover, #eee)',
   *   press: 'var(--tailwind-color-hoge1--press, #ddd)',
   *   disabled: 'var(--tailwind-color-hoge1--disabled, #eee)',
   * }
   * ```
   */
  function colorsForAllEffects(name: string, color: Material) {
    const varName = `${COLOR_PREFIX}${name}`

    return {
      [DEFAULT]: `var(${varName}, ${color})`,

      ...mapObject(effects, (effectName, effect) => [
        effectName,
        `var(${varName}--${effectName}, ${applyEffect(color, effect)})`,
      ]),
    }
  }

  return mapObject(targetColors, (name, color) => [
    name,
    colorsForAllEffects(name, color),
  ])
}
