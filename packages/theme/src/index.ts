import { Effect, Effects, OpacityEffect } from './effect'

export default {}

export * from './effect'

export type Material = string
export type GradientMaterial = { color: Material; ratio: number }[]

/**
 * @deprecated
 */
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type ThemeMaterials = {
  background1: Material
  background2: Material
  surface1: Material
  surface2: Material
  /**
   * Black Fade 20にするとボーダーと共通化できる
   */
  surface3: Material
  surface4: Material
  // NOTE: the current definition of surface5 is invalid
  surface6: Material
  /**
   * サムネイルに被せる色。
   * Lightモードの色が2と共通。コントラストの低下を狙うなら2でいいが、サムネイルで色味を調整しすぎる感がある。
   */
  surface7: Material
  /**
   * 磨りガラス効果を使えれば6と統合できそう
   */
  surface8: Material
  surface9: Material
  link1: Material
  link2: Material
  text1: Material
  /**
   * 1と2は統合できるかもしれない
   */
  text2: Material
  text3: Material
  /**
   * Surface 4に重ねた時に薄すぎる感あり
   */
  text4: Material
  text5: Material
  icon6: Material
  border: Material
}

/**
 * @deprecated
 */
export interface ThemeEffects {
  hover: Effects
  press: Effects
  disabled: Effects
}

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type ThemeEffect = {
  hover: Effect
  press: Effect
}

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type ThemeElementEffect = {
  disabled: OpacityEffect
}

/**
 * @deprecated
 */
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type ThemeSemantic = {
  brand: Material
}

/**
 * @deprecated Use `ThemeColor` instead
 */
export type ThemeColors = ThemeMaterials &
  ThemeSemantic & {
    premium: Material
  }

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type ThemeColor = {
  transparent: Material
  background1: Material
  background2: Material
  surface1: Material
  surface2: Material
  surface3: Material
  surface4: Material
  surface6: Material
  surface7: Material
  surface8: Material
  surface9: Material
  link1: Material
  link2: Material
  text1: Material
  text2: Material
  text3: Material
  text4: Material
  text5: Material
  icon6: Material
  border: Material
  brand: Material
  assertive: Material
  /**
   * @deprecated
   */
  premium: Material
}

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type ThemeColorGradient = {
  surface4Gradient: GradientMaterial
}

export interface Theme {
  /**
   * @deprecated
   *
   * Use `color` instead.
   */
  materials: ThemeMaterials
  /**
   * @deprecated
   *
   * Use `color` instead.
   */
  semantic: ThemeSemantic
  /**
   * @deprecated Use `color` instead
   */
  colors: ThemeColors
  color: ThemeColor
  gradientColor: ThemeColorGradient
  /**
   * @deprecated Use `effect` instead
   */
  effects: ThemeEffects
  /**
   * effect for color (background or font color)
   */
  effect: ThemeEffect
  /**
   * effect for element its own (opacify element includes descendants)
   */
  elementEffect: ThemeElementEffect
}
