import { rgba } from 'polished'

import { common } from './common'
import light from './light'
import { Theme } from '.'

const color: Theme['color'] = {
  transparent: '#00000000',
  background1: '#1f1f1f',
  background2: '#000000',
  border: rgba('#ffffff', 0.12),
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
  brand: light.color.brand,
  premium: light.color.premium,
  callToAction: light.gradientColor.callToAction,
  r18: light.color.r18,
  like: light.color.like,
  marker: light.color.marker,
  assertive: light.color.assertive,
  warning: light.color.warning,
  success: light.color.success,
  gold: light.color.gold,
  silver: light.color.silver,
  bronze: light.color.bronze,
  updatedItem: rgba('#0096fa', 0.12),
}

const theme: Theme = {
  ...common,
  materials: color,
  effects: light.effects,
  effect: light.effect,
  elementEffect: light.elementEffect,
  semantic: {
    brand: '#0096fa',
    like: '#ff4060',
  },
  colors: color,
  color,
  gradientColor: light.gradientColor,
}

export { theme as default }
