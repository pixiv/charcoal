/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { GRID_COUNT, mergeEffect } from './foundation'

import { Config } from 'tailwindcss'
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
import { unstable_createTailwindConfigTokenV2 } from './tokenV2'
export { unstable_createTailwindConfigTokenV2 }

interface Options {
  version?: TailwindVersion
  theme?: ThemeMap
  cssVariablesV1?: boolean
  unstableTokenV2?: boolean
}

export function createTailwindConfig({
  theme = { ':root': light },
  version = 'v3',
  cssVariablesV1 = true,
  unstableTokenV2 = false,
}: Options): Omit<Config, 'content'> {
  assertAllThemeHaveSameKeys(theme)

  const defaultTheme = theme[':root']
  const effects = mergeEffect(defaultTheme)
  const DEFAULT = getDefaultKeyName(version)

  const {
    borderWidth: borderWidthV2,
    borderRadius: borderRadiusV2,
    borderColor: borderColorV2,
    colors: colorsV2,
    fontSize: fontSizeV2,
    fontWeight: fontWeightV2,
    spacing: spacingV2,
    gap: gapV2,
    width: widthV2,
  }: Partial<NonNullable<Config['theme']>> = unstableTokenV2
    ? unstable_createTailwindConfigTokenV2().theme
    : {}

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
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
        ...colorsV2,
      },
      borderColor: {
        ...colorsToTailwindConfig(
          version,
          mapObject(defaultTheme.border, (k, v) => [k, v.color]),
          effects
        ),
        ...borderColorV2,
      },
      spacing: {
        ...mapObject(
          SPACING,
          (name, pixel) => [name, px(pixel)] as [string, string]
        ),
        ...spacingV2,
      },
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
        ...widthV2,
      },
      gap: {
        fixed: px(GUTTER_UNIT),
        ...gapV2,
      },
      borderRadius: {
        ...mapObject(
          BORDER_RADIUS,
          (name, value) => [name, px(value)] as [string, string]
        ),
        ...borderRadiusV2,
      },
      transitionDuration: {
        [DEFAULT]: '0.2s',
      },
      ...(unstableTokenV2
        ? {
            borderWidth: borderWidthV2,
            fontSize: fontSizeV2,
            fontWeight: fontWeightV2,
          }
        : {}),
    },

    ...getVariantOption(version),

    corePlugins: {
      lineHeight: false,
    },
    plugins: [
      typographyPlugin,
      cssVariableColorPlugin(theme, Boolean(cssVariablesV1)),

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

export const config: Omit<Config, 'content'> = createTailwindConfig({})

export default config
