import { TypographyDescriptor } from '@pixiv-elements/foundation'
import {
  Effect,
  GradientMaterial,
  Material,
  OpacityEffect,
} from '@pixiv-elements/theme'

export type EffectType = 'hover' | 'press' | 'disabled'

export type Key = string | number | symbol

export type ColorStyleTheme = {
  [key in Key]: Material
}

export interface StyledTheme {
  color: ColorStyleTheme
  gradientColor: { [key in Key]: GradientMaterial }
  effect: { [key in EffectType]?: Effect }
  elementEffect: { [key in EffectType]?: OpacityEffect }
  spacing: { [key in Key]: number }
  typography: {
    size: { [key in Key]: TypographyDescriptor }
    // TODO
    // weight: { [key in Key]: string }
    // variant: { [key in Key]: string }
  }
  borderRadius: { [key in Key]: number }
  border: {
    [key in Key]: {
      color: Material
      // TODO
      // thickness: number
    }
  }
  outline: {
    [key in Key]: {
      color: Material
      weight: number
    }
  }
}
