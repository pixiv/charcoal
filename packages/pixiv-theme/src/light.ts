import { rgba } from 'polished'
import { common } from './common'
import { Theme } from '.'

const color: Theme['color'] = {
  transparent: '#00000000',
  background1: '#ffffff',
  background2: '#f5f5f5',
  border: rgba('#000000', 0.08),
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
  brand: '#0096fa',
  premium: '#fd9e16',
  callToAction: [
    { color: '#d1ff1a', ratio: 0 },
    { color: '#1ad1ff', ratio: 100 },
  ],
  r18: '#ff4060',
  // value is same as `r18`
  like: '#ff4060',
  marker: '#cc2954',
  assertive: '#ff2b00',
  warning: '#ffaf0f',
  success: '#b1cc29',
  gold: '#d7bb49',
  silver: '#d6d6d6',
  bronze: '#c8a17e',
  updatedItem: rgba('#0096fa', 0.04),
}

const effect: Theme['effect'] = {
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
}

const effects: Theme['effects'] = {
  ...effect,
  disabled: {
    type: 'opacity',
    opacity: 0.32,
  },
}

const elementEffect: Theme['elementEffect'] = {
  disabled: {
    type: 'opacity',
    opacity: 0.32,
  },
}

const theme: Theme = {
  ...common,
  materials: color,
  effects,
  effect,
  elementEffect,
  semantic: {
    brand: color.brand,
    like: '#ff4060',
  },
  colors: color,
  color,
  gradientColor: {
    surface4Gradient: [
      { color: color.surface4, ratio: 0 },
      { color: rgba(color.surface4, 0), ratio: 100 },
    ],
    callToAction: [
      { color: '#d1ff1a', ratio: 0 },
      { color: '#1ad1ff', ratio: 100 },
    ],
  },
}

export { theme as default }
