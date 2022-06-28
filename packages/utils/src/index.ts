import { linearGradient, parseToRgb, rgba, rgbToColorString } from 'polished'
import { RgbColor } from 'polished/lib/types/color'

import {
  type AlphaEffect,
  type Effect,
  type Effects,
  type GradientMaterial,
  type OpacityEffect,
  type ReplaceEffect,
  type TypographyDescriptor,
} from '@charcoal-ui/foundation'

export const GRADIENT_DIRECTIONS = [
  'to top',
  'to bottom',
  'to left',
  'to right',
] as const

export type GradientDirection = typeof GRADIENT_DIRECTIONS[number]

export function transparentGradient(
  color: string,
  defaultDirection: GradientDirection = 'to bottom'
) {
  return function transparentGradient(
    direction: GradientDirection | object = defaultDirection
  ) {
    const transparent = rgba(color, 0)
    return linearGradient({
      colorStops: [color, transparent],
      fallback: transparent,
      toDirection: typeof direction === 'object' ? defaultDirection : direction,
    })
  }
}

export function gradient(toDirection: GradientDirection = 'to bottom') {
  return function toLinearGradient(value: GradientMaterial) {
    return linearGradient({
      colorStops: value.map(({ color, ratio }) => `${color} ${ratio}%`),
      fallback: value[0]?.color,
      toDirection,
    })
  }
}

export function applyEffectToGradient(effect: Effects) {
  return function toGradient(value: GradientMaterial): GradientMaterial {
    return value.map(({ color, ratio }) => ({
      color: applyEffect(color, effect),
      ratio,
    }))
  }
}

interface RgbaColor extends RgbColor {
  alpha?: number
}

interface ReadonlyArrayConstructor {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  isArray(value: any): value is readonly any[]
}

export function applyEffect(
  baseColor: string | null,
  effects: Effects
): string {
  const color = baseColor ?? '#00000000'
  if ((Array as ReadonlyArrayConstructor).isArray(effects)) {
    return effects.reduce(applySingleEffect, color)
  }
  return applySingleEffect(color, effects)
}

function applySingleEffect(baseColor: string, effect: Effect): string {
  switch (effect.type) {
    case 'alpha':
      return applyAlpha(baseColor, effect)
    case 'opacity':
      return applyOpacity(baseColor, effect)
    case 'replace':
      return applyReplace(baseColor, effect)
    default:
      throw new RangeError(
        `Unknown effect type ${
          (effect as Effect).type
        }, upgrade @charcoal-ui/utils`
      )
  }
}

function applyAlpha(baseColor: string, { color, opacity }: AlphaEffect) {
  const base: RgbaColor = parseToRgb(baseColor)
  const effect: RgbaColor = parseToRgb(color)
  const src = [base.red, base.green, base.blue, base.alpha ?? 1.0] as const
  const dst = [
    effect.red,
    effect.green,
    effect.blue,
    clamp(0, 1, (effect.alpha ?? 1.0) * (opacity ?? 1.0)),
  ] as const
  return rgba(...alphaBlend(src, dst))
}

function applyOpacity(baseColor: string, { opacity }: OpacityEffect) {
  const parsed: RgbaColor = parseToRgb(baseColor)
  parsed.alpha = clamp(0, 1, (parsed.alpha ?? 1.0) * opacity)
  return rgbToColorString(parsed)
}

function applyReplace(
  baseColor: string,
  { color = baseColor, opacity }: ReplaceEffect
) {
  if (opacity === undefined) {
    return color
  }
  const parsed: RgbaColor = parseToRgb(color)
  // NOTE: intentionally ignores any alpha value in the baseColor
  parsed.alpha = opacity
  return rgbToColorString(parsed)
}

type Color4 = readonly [number, number, number, number]

/**
 * NOTE: alpha component must be in range from 0.0 to 1.0. (0.0 represents a fully transparent)
 *
 * @param src `[r, g, b, alpha]` Background
 * @param dst `[r, g, b, alpha]` Foreground
 */
function alphaBlend(src: Color4, dst: Color4): Color4 {
  const srcA = src[3]
  const dstA = dst[3]
  const outA = srcA + dstA * (1 - srcA)
  if (outA < EPS) {
    // blending 0% alpha with 0% alpha
    return [0, 0, 0, 0]
  }
  return [
    Math.round((src[0] * srcA * (1 - dstA) + dst[0] * dstA) / outA),
    Math.round((src[1] * srcA * (1 - dstA) + dst[1] * dstA) / outA),
    Math.round((src[2] * srcA * (1 - dstA) + dst[2] * dstA) / outA),
    outA,
  ]
}
const EPS = 1e-6

function clamp(min: number, max: number, value: number) {
  return Math.min(Math.max(value, min), max)
}

/**
 * affix `px` unit
 *
 * @param value pixel
 */
export function px(value: number) {
  return `${value}px`
}

/**
 * affix `s` unit
 *
 * @param value second
 */
export function dur(value: number) {
  return `${value}s`
}

export const notDisabledSelector = `&:not(:disabled):not([aria-disabled]), &[aria-disabled=false]`

export const disabledSelector = `&:disabled, &[aria-disabled]:not([aria-disabled=false])`

/**
 * Construct media query from breakpoint
 */
export function maxWidth(breakpoint: number) {
  return `(max-width: ${breakpoint - 1}px)`
}

/**
 * Derive half-leading from typography size
 */
export const halfLeading = ({ fontSize, lineHeight }: TypographyDescriptor) =>
  (lineHeight - fontSize) / 2

/**
 * Namespaced custom property
 */
export const customPropertyToken = (
  id: string,
  modifiers: readonly string[] = []
) =>
  `--charcoal-${id}${modifiers.length === 0 ? '' : ['', modifiers].join('-')}`
