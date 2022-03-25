export type Effects = Readonly<Effect> | readonly Readonly<Effect>[]

export type Effect = AlphaEffect | OpacityEffect | ReplaceEffect

interface BaseEffect {}

export interface AlphaEffect extends BaseEffect {
  readonly type: 'alpha'
  /**
   * Color to blend with the base color using alpha blending.
   */
  readonly color: string
  /**
   * Multiplied with the alpha value of the effect's `color` before blending.
   *
   * `1` by default.
   */
  readonly opacity?: number
}

export interface OpacityEffect extends BaseEffect {
  readonly type: 'opacity'
  /**
   * Value to multiply with the current color's alpha value.
   */
  readonly opacity: number
}

export interface ReplaceEffect extends BaseEffect {
  readonly type: 'replace'
  /**
   * Replaces any given color with this color
   */
  readonly color?: string
  /**
   * Replaces the alpha value with this opacity.
   *
   * Overrides the `color`'s opacity as well.
   */
  readonly opacity?: number
}
