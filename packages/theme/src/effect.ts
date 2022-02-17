export type Effects = Readonly<Effect> | readonly Readonly<Effect>[]

export type Effect = AlphaEffect | OpacityEffect | ReplaceEffect

interface BaseEffect {}

export interface AlphaEffect extends BaseEffect {
  type: 'alpha'
  /**
   * Color to blend with the base color using alpha blending.
   */
  color: string
  /**
   * Multiplied with the alpha value of the effect's `color` before blending.
   *
   * `1` by default.
   */
  opacity?: number
}

export interface OpacityEffect extends BaseEffect {
  type: 'opacity'
  /**
   * Value to multiply with the current color's alpha value.
   */
  opacity: number
}

export interface ReplaceEffect extends BaseEffect {
  type: 'replace'
  /**
   * Replaces any given color with this color
   */
  color?: string
  /**
   * Replaces the alpha value with this opacity.
   *
   * Overrides the `color`'s opacity as well.
   */
  opacity?: number
}
