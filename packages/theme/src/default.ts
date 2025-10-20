/** This file is auto generated. DO NOT EDIT BY HAND. */
import { CharcoalTheme } from './theme'

const common = {
  borderRadius: {
    '4': 4,
    '8': 8,
    '16': 16,
    '24': 24,
    none: 0,
    oval: 999999,
  },
  breakpoint: {
    screen1: 744,
    screen2: 952,
    screen3: 1160,
    screen4: 1368,
  },
  elementEffect: {
    disabled: {
      opacity: 0.32,
      type: 'opacity',
    },
  },
  gradientColor: {
    callToAction: [
      {
        color: '#d1ff1a',
        ratio: 0,
      },
      {
        color: '#1ad1ff',
        ratio: 100,
      },
    ],
    surface5: [
      {
        color: 'rgba(0,0,0,0.32)',
        ratio: 0,
      },
      {
        color: 'rgba(0,0,0,0)',
        ratio: 100,
      },
    ],
  },
  grid: {
    unit: {
      column: 80,
      gutter: 24,
    },
  },
  outline: {
    assertive: {
      color: 'rgba(255,43,0,0.32)',
      weight: 4,
    },
    default: {
      color: 'rgba(0,150,250,0.32)',
      weight: 4,
    },
  },
  spacing: {
    '0': 0,
    '4': 4,
    '8': 8,
    '16': 16,
    '24': 24,
    '40': 40,
    '64': 64,
    '104': 104,
    '168': 168,
    '272': 272,
    '440': 440,
  },
  transition: {
    default: {
      duration: 0.2,
    },
  },
  typography: {
    size: {
      '12': {
        fontSize: 12,
        lineHeight: 20,
      },
      '14': {
        fontSize: 14,
        lineHeight: 22,
      },
      '16': {
        fontSize: 16,
        lineHeight: 24,
      },
      '20': {
        fontSize: 20,
        lineHeight: 28,
      },
      '32': {
        fontSize: 32,
        lineHeight: 40,
      },
    },
  },
} as const

export const light: CharcoalTheme = {
  ...common,
  ...{
    border: {
      default: {
        color: 'rgba(0,0,0,0.08)',
      },
    },
    color: {
      assertive: '#ff2b00',
      background1: '#ffffff',
      background2: '#f5f5f5',
      border: 'rgba(0,0,0,0.08)',
      brand: '#0096fa',
      icon6: 'rgba(255,255,255,0.28)',
      link1: '#3d7699',
      link2: 'rgba(255,255,255,0.36)',
      success: '#b1cc29',
      surface1: '#ffffff',
      surface10: 'rgba(0,0,0,0.16)',
      surface2: 'rgba(0,0,0,0.02)',
      surface3: 'rgba(0,0,0,0.04)',
      surface4: 'rgba(0,0,0,0.32)',
      surface6: 'rgba(0,0,0,0.88)',
      surface7: 'rgba(0,0,0,0.02)',
      surface8: 'rgba(0,0,0,0.88)',
      surface9: '#ffffff',
      text1: '#1f1f1f',
      text2: '#474747',
      text3: '#858585',
      text4: '#adadad',
      text5: '#ffffff',
      transparent: 'rgba(0,0,0,0)',
      updatedItem: 'rgba(0,150,250,0.04)',
      warning: '#ffaf0f',
    },
    effect: {
      hover: {
        color: 'rgba(0,0,0,0.04)',
        type: 'alpha',
      },
      press: {
        color: 'rgba(0,0,0,0.16)',
        type: 'alpha',
      },
    },
  },
}

export const dark: CharcoalTheme = {
  ...common,
  ...{
    border: {
      default: {
        color: 'rgba(255,255,255,0.12)',
      },
    },
    color: {
      assertive: '#ff2b00',
      background1: '#1f1f1f',
      background2: '#000000',
      border: 'rgba(255,255,255,0.12)',
      brand: '#0096fa',
      icon6: 'rgba(255,255,255,0.28)',
      link1: '#669FC2',
      link2: 'rgba(255,255,255,0.36)',
      success: '#b1cc29',
      surface1: '#1f1f1f',
      surface10: 'rgba(255,255,255,0.2)',
      surface2: 'rgba(0,0,0,0.16)',
      surface3: 'rgba(255,255,255,0.12)',
      surface4: 'rgba(0,0,0,0.32)',
      surface6: 'rgba(255,255,255,0.12)',
      surface7: 'rgba(0,0,0,0)',
      surface8: 'rgba(0,0,0,0.88)',
      surface9: '#333333',
      text1: '#f5f5f5',
      text2: '#d6d6d6',
      text3: '#858585',
      text4: '#5c5c5c',
      text5: '#f5f5f5',
      transparent: 'rgba(0,0,0,0)',
      updatedItem: 'rgba(0,150,250,0.12)',
      warning: '#ffaf0f',
    },
    effect: {
      hover: {
        color: 'rgba(255,255,255,0.12)',
        type: 'alpha',
      },
      press: {
        color: 'rgba(255,255,255,0.2)',
        type: 'alpha',
      },
    },
  },
}
