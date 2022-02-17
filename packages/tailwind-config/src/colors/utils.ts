import { GradientMaterial, Material } from '@pixiv-elements/theme'

export const COLOR_PREFIX = '--tailwind-color-'

export function isSingleColor(color: AnyColor): color is Material {
  return typeof color === 'string'
}

type AnyColor = Material | GradientMaterial

export type AnyColorTheme = Record<string, AnyColor>
