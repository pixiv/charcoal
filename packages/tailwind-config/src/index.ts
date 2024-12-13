import { GRID_COUNT, mergeEffect } from './foundation'

import type { TailwindConfig } from 'tailwindcss/tailwind-config'
import { TailwindVersion, ThemeMap } from './types'

import {
  assertAllThemeHaveSameKeys,
  getDefaultKeyName,
  getVariantOption,
} from './util'
import {
  COLUMN_UNIT,
  GUTTER_UNIT,
  SPACING,
  BORDER_RADIUS,
} from '@charcoal-ui/foundation'
import { light } from '@charcoal-ui/theme'
import { mapObject, px } from '@charcoal-ui/utils'
import { colorsToTailwindConfig } from './colors/toTailwindConfig'

import cssVariableColorPlugin from './colors/plugin'
import cssVariableGradientPlugin from './gradient/plugin'
import typographyPlugin from './typography/plugin'
export { unstable_createTailwindConfigTokenV2 } from './tokenV2'

interface Options {
  version?: TailwindVersion
  theme?: ThemeMap
}

export function createTailwindConfig({
  theme = { ':root': light },
  version = 'v3',
}: Options): TailwindConfig {
  assertAllThemeHaveSameKeys(theme)

  const defaultTheme = theme[':root']
  const effects = mergeEffect(defaultTheme)
  const DEFAULT = getDefaultKeyName(version)

  return {
    theme: {
      screens: {
        screen1: px(0),
        screen2: px(defaultTheme.breakpoint.screen1),
        screen3: px(defaultTheme.breakpoint.screen2),
        screen4: px(defaultTheme.breakpoint.screen3),
        screen5: px(defaultTheme.breakpoint.screen4),
      },
      colors: {
        // @deprecated
        black: '#000',

        // @deprecated
        white: '#fff',

        transparent: 'transparent',
        current: 'currentColor',
        ...colorsToTailwindConfig(version, defaultTheme.color, effects),
      },
      borderColor: {
        ...colorsToTailwindConfig(
          version,
          mapObject(defaultTheme.border, (k, v) => [k, v.color]),
          effects
        ),
      },
      spacing: mapObject(SPACING, (name, pixel) => [name, px(pixel)]),
      width: {
        full: '100%',
        screen: '100vw',
        auto: 'auto',
        fit: 'fit-content',

        /**
         * generates classes like "w-col-span-1"
         */
        ...Array.from({ length: GRID_COUNT }, (_, i) => i + 1).reduce(
          (styles, i) => ({
            ...styles,
            [`col-span-${i}`]: px(COLUMN_UNIT * i + GUTTER_UNIT * (i - 1)),
          }),
          {}
        ),

        /**
         * generates classes like "w-1/12" (except for 12/12, which just equals to w-full)
         */
        ...Array.from({ length: GRID_COUNT - 1 }, (_, i) => i + 1).reduce(
          (styles, i) => ({
            ...styles,
            [`${i}/${GRID_COUNT}`]: `${(i / GRID_COUNT) * 100}%`,
          }),
          {}
        ),
      },
      gap: {
        fixed: px(GUTTER_UNIT),
      },
      borderRadius: mapObject(BORDER_RADIUS, (name, value) => [
        name,
        px(value),
      ]),
      transitionDuration: {
        [DEFAULT]: '0.2s',
      },
    },

    ...getVariantOption(version),

    corePlugins: {
      // @ts-expect-error 配列にしろと言ってくるが、たぶん @types が間違っている
      lineHeight: false,
    },
    plugins: [
      typographyPlugin,
      cssVariableColorPlugin(theme),

      ...Object.entries(theme).map(([selectorOrMediaQuery, theme]) =>
        cssVariableGradientPlugin(
          theme.gradientColor,
          mergeEffect(theme),
          selectorOrMediaQuery
        )
      ),
    ],
  }
}

export const config: TailwindConfig = createTailwindConfig({})
