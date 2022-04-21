import {
  type GradientMaterial,
  type Material,
  type TypographyDescriptor,
  type Effect,
  type OpacityEffect,
  SPACING,
  BORDER_RADIUS,
} from '@charcoal-ui/foundation'
import { CharcoalAbstractTheme } from './abstract-theme'

export interface CharcoalTheme extends CharcoalAbstractTheme {
  readonly color: ThemeColor
  readonly gradientColor: ThemeColorGradient
  /**
   * effect for color (background or font color)
   */
  readonly effect: ThemeEffect
  /**
   * effect for element its own (opacify element includes descendants)
   */
  readonly elementEffect: ThemeElementEffect
  readonly spacing: Spacing
  readonly typography: {
    readonly size: Typography
  }
  readonly borderRadius: BorderRadius
  readonly border: {
    readonly default: {
      readonly color: Material
    }
  }
  readonly outline: {
    readonly default: {
      readonly color: string
      readonly weight: 4
    }
    readonly assertive: {
      readonly color: string
      readonly weight: 4
    }
  }
  readonly breakpoint: Breakpoint
}

export type ThemeColor = {
  readonly transparent: Material
  readonly background1: Material
  readonly background2: Material
  readonly surface1: Material
  readonly surface2: Material
  readonly surface3: Material
  readonly surface4: Material
  readonly surface6: Material
  readonly surface7: Material
  readonly surface8: Material
  readonly surface9: Material
  readonly surface10: Material
  readonly link1: Material
  readonly link2: Material
  readonly text1: Material
  readonly text2: Material
  readonly text3: Material
  readonly text4: Material
  readonly text5: Material
  readonly icon6: Material
  readonly brand: Material
  readonly assertive: Material
}

export type ThemeEffect = {
  readonly hover: Effect
  readonly press: Effect
}

export type ThemeElementEffect = {
  readonly disabled: OpacityEffect
}

export type ThemeColorGradient = {
  readonly surface5: GradientMaterial
  readonly callToAction: GradientMaterial
}

export type Typography = {
  readonly [12]: TypographyDescriptor
  readonly [14]: TypographyDescriptor
  readonly [16]: TypographyDescriptor
  readonly [20]: TypographyDescriptor
  readonly [32]: TypographyDescriptor
}

export type Breakpoint = {
  readonly screen1: number
  readonly screen2: number
  readonly screen3: number
  readonly screen4: number
}

export type Spacing = Readonly<Record<keyof typeof SPACING, number>>
export type BorderRadius = Readonly<Record<keyof typeof BORDER_RADIUS, number>>
