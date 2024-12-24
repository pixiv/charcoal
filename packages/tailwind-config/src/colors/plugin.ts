import { Material } from '@charcoal-ui/foundation'
import { CharcoalTheme as Theme } from '@charcoal-ui/theme'
import {
  applyEffect,
  filterObject,
  flatMapObject,
  mapObject,
} from '@charcoal-ui/utils'
import plugin, { TailwindPlugin } from 'tailwindcss/plugin'
import { mergeEffect } from '../foundation'
import { CSSVariableName, CSSVariables, Definition, ThemeMap } from '../types'
import { COLOR_PREFIX, isSingleColor } from './utils'
import { defineCssVariablesV1 } from './pluginTokenV1'

/**
 * --tailwind-* また --charcoal-* を生成する
 * TODO: --tailwindをやめる
 */
export default function cssVariableColorPlugin(
  themeMap: ThemeMap,
  cssVariablesV1: boolean
): TailwindPlugin {
  // `:root` 以外のケースで各 CSS Variable がどういう値を取るかを定義する
  const { ':root': _defaultTheme, ...otherThemes } = themeMap
  const definitions = defineCssVariables(otherThemes)

  return plugin(({ addBase }) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    addBase(definitions)

    // styledのTokenInjector移植(background処理除く)
    if (cssVariablesV1) {
      const cssVariablesV1 = defineCssVariablesV1(themeMap)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      addBase(cssVariablesV1)
    }
  })
}

export function defineCssVariables(themes: Omit<ThemeMap, ':root'>) {
  return mapObject(themes, (selectorOrMediaQuery, theme) => {
    const css = toCssVariables(theme)

    if (selectorOrMediaQuery.startsWith('@media')) {
      return [
        selectorOrMediaQuery,
        {
          ':root': css,
        },
      ]
    } else {
      return [selectorOrMediaQuery, css]
    }
  }) as Definition
}

function toCssVariables(theme: Theme): CSSVariables {
  const colors = filterObject(theme.color, isSingleColor)
  const effects = Object.entries(mergeEffect(theme))

  return flatMapObject(colors, (name, color) => {
    const varName: keyof CSSVariables = `${COLOR_PREFIX}${name}`

    return [
      [varName, color],

      ...effects.map<[CSSVariableName, Material]>(([type, effect]) => [
        `${varName}--${type}`,
        applyEffect(color, effect),
      ]),
    ]
  })
}
