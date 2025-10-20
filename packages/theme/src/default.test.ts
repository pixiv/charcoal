import { rgba } from 'polished'
import prettier from 'prettier'
import { CharcoalTheme } from './theme'
import {
  BORDER_RADIUS,
  BREAKPOINT,
  COLUMN_UNIT,
  GUTTER_UNIT,
  SPACING,
  TYPOGRAPHY_SIZE,
} from '@charcoal-ui/foundation'
import { applyEffect } from '@charcoal-ui/utils'

const outlineEffect = {
  type: 'opacity',
  opacity: 0.32,
} as const

const assertive = '#ff2b00'
const brand = '#0096fa'
const borderForLight = rgba('#000000', 0.08)
const borderForDark = rgba('#ffffff', 0.12)

const common = {
  typography: {
    size: TYPOGRAPHY_SIZE,
  },
  spacing: SPACING,
  grid: {
    unit: {
      column: COLUMN_UNIT,
      gutter: GUTTER_UNIT,
    },
  },
  borderRadius: BORDER_RADIUS,
  transition: {
    default: {
      duration: 0.2,
    },
  },
  breakpoint: {
    screen1: BREAKPOINT[6],
    screen2: BREAKPOINT[8],
    screen3: BREAKPOINT[10],
    screen4: BREAKPOINT[12],
  },
  gradientColor: {
    surface5: [
      { color: rgba('#000000', 0.32), ratio: 0 },
      { color: rgba('#000000', 0), ratio: 100 },
    ],
    callToAction: [
      { color: '#d1ff1a', ratio: 0 },
      { color: '#1ad1ff', ratio: 100 },
    ],
  },
  outline: {
    default: {
      color: applyEffect(brand, outlineEffect),
      weight: 4,
    },
    assertive: {
      color: applyEffect(assertive, outlineEffect),
      weight: 4,
    },
  },
  elementEffect: {
    disabled: {
      type: 'opacity',
      opacity: 0.32,
    },
  },
} as const

export const light: CharcoalTheme = {
  ...common,
  effect: {
    hover: {
      type: 'alpha',
      color: rgba('#000000', 0.04), // surface3
    },
    press: {
      type: 'alpha',
      color: rgba('#000000', 0.16), // surface10
    },
  },
  color: {
    // TODO: colors should be picked from foundation color palette
    transparent: rgba('#000000', 0),
    background1: '#ffffff',
    background2: '#f5f5f5',
    icon6: rgba('#ffffff', 0.28),
    link1: '#3d7699',
    link2: rgba('#ffffff', 0.36),
    surface1: '#ffffff',
    surface2: rgba('#000000', 0.02),
    surface3: rgba('#000000', 0.04),
    surface4: rgba('#000000', 0.32),
    surface6: rgba('#000000', 0.88),
    surface7: rgba('#000000', 0.02),
    surface8: rgba('#000000', 0.88),
    surface9: '#ffffff',
    surface10: rgba('#000000', 0.16),
    text1: '#1f1f1f',
    text2: '#474747',
    text3: '#858585',
    text4: '#adadad',
    text5: '#ffffff',
    brand,
    assertive,
    warning: '#ffaf0f',
    success: '#b1cc29',
    updatedItem: rgba(0, 150, 250, 0.04),
    border: borderForLight,
  },
  border: {
    default: {
      color: borderForLight,
    },
  },
}

export const dark: CharcoalTheme = {
  ...common,
  effect: {
    hover: {
      type: 'alpha',
      color: rgba('#ffffff', 0.12), // surface3
    },
    press: {
      type: 'alpha',
      color: rgba('#ffffff', 0.2), // surface10
    },
  },
  color: {
    transparent: rgba('#000000', 0),
    background1: '#1f1f1f',
    background2: '#000000',
    icon6: light.color.icon6,
    link1: '#669FC2',
    link2: light.color.link2,
    surface1: '#1f1f1f',
    surface2: rgba('#000000', 0.16),
    surface3: rgba('#ffffff', 0.12),
    surface4: light.color.surface4,
    surface6: rgba('#ffffff', 0.12),
    surface7: rgba('#000000', 0),
    surface8: light.color.surface8,
    surface9: '#333333',
    surface10: rgba('#ffffff', 0.2),
    text1: '#f5f5f5',
    text2: '#d6d6d6',
    text3: '#858585',
    text4: '#5c5c5c',
    text5: '#f5f5f5',
    brand,
    assertive,
    warning: light.color.warning,
    success: light.color.success,
    updatedItem: rgba(0, 150, 250, 0.12),
    border: borderForDark,
  },
  border: {
    default: {
      color: borderForDark,
    },
  },
}

// The MIT License (MIT)
// Copyright (c) 2023-present Fabio Spampinato
// https://github.com/fabiospampinato/json-sorted-stringify/blob/b4b87427d471ec4e5972489638dbba100d47ef18/src/index.ts
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const sortReplacer = (_: string, value: any): any => {
  if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
    const keys = Object.keys(value).sort()
    const clone: Record<string, unknown> = {}

    for (let i = 0, l = keys.length; i < l; i++) {
      const key = keys[i]

      clone[key] = value[key]
    }

    return clone
  }

  return value
}

it('writes default.ts', () => {
  const code = `
/** This file is auto generated. DO NOT EDIT BY HAND. */
import { CharcoalTheme } from './theme'

export const light: CharcoalTheme = ${JSON.stringify(light, sortReplacer, 2)};

export const dark: CharcoalTheme = ${JSON.stringify(dark, sortReplacer, 2)};
`
  const fmt = prettier.format(code)
  expect(fmt).toMatchFileSnapshot('./default.ts')
})
