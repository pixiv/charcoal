import { Material } from '@charcoal-ui/foundation'
import { CharcoalTheme as Theme } from '@charcoal-ui/theme'
import {
  applyEffect,
  filterObject,
  flatMapObject,
  mapObject,
} from '@charcoal-ui/utils'
import plugin from 'tailwindcss/plugin'
import { mergeEffect } from '../foundation'
import { CSSVariableName, CSSVariables, Definition, ThemeMap } from '../types'
import { COLOR_PREFIX, isSingleColor } from './utils'

/**
 * `:root` 以外のケースで各 CSS Variable がどういう値を取るかを定義する
 */
export default function cssVariableColorPlugin({
  ':root': _defaultTheme,
  ...themes
}: ThemeMap) {
  const definitions = defineCssVariables(themes)

  return plugin(({ addBase }) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    addBase(definitions)
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
