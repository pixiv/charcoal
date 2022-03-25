import { rgba } from 'polished'
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
      color: '#000000',
      opacity: 0.08,
    },
    press: {
      type: 'alpha',
      color: '#000000',
      opacity: 0.16,
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
    surface9: rgba('#ffffff', 0.84),
    text1: rgba('#000000', 0.88),
    text2: rgba('#000000', 0.64),
    text3: rgba('#000000', 0.32),
    text4: rgba('#000000', 0.16),
    text5: '#ffffff',
    brand,
    assertive,
  },
  border: {
    default: {
      color: rgba('#000000', 0.08),
    },
  },
}

export const dark: CharcoalTheme = {
  ...common,
  effect: {
    hover: {
      type: 'alpha',
      color: '#000000',
      opacity: 0.08,
    },
    press: {
      type: 'alpha',
      color: '#000000',
      opacity: 0.16,
    },
  },
  color: {
    transparent: rgba('#000000', 0),
    background1: '#1f1f1f',
    background2: '#000000',
    icon6: light.color.icon6,
    link1: light.color.link1,
    link2: light.color.link2,
    surface1: '#1f1f1f',
    surface2: rgba('#000000', 0.16),
    surface3: rgba('#ffffff', 0.12),
    surface4: light.color.surface4,
    surface6: rgba('#ffffff', 0.12),
    surface7: light.color.surface7,
    surface8: light.color.surface8,
    surface9: light.color.surface9,
    text1: '#ffffff',
    text2: rgba('#ffffff', 0.68),
    text3: rgba('#ffffff', 0.36),
    text4: rgba('#ffffff', 0.28),
    text5: light.color.text5,
    brand,
    assertive,
  },
  border: {
    default: {
      color: rgba('#ffffff', 0.12),
    },
  },
}
