import type {
  GradientMaterial,
  Material,
  TypographyDescriptor,
  Effect,
  OpacityEffect,
} from '@charcoal-ui/foundation'

export type EffectType = 'hover' | 'press' | 'disabled'

export type Key = string | number | symbol

export type ColorStyleTheme = {
  [key in Key]: Material
}

export interface CharcoalAbstractTheme {
  color: ColorStyleTheme
  gradientColor: { [key in Key]: GradientMaterial }
  effect: { [key in EffectType]?: Effect }
  elementEffect: { [key in EffectType]?: OpacityEffect }
  spacing: { [key in Key]: number }
  typography: {
    size: { [key in Key]: TypographyDescriptor }
    // TODO: the theme model has no `weight`/`variant` fields, so consumers can't express
    // font weight or variant (e.g. italic) through the theme. Adding these is a public
    // type change and interacts with the Figma tokens pipeline (`.github/workflows/tokens.yml`),
    // so it needs its own scoped issue rather than an ad-hoc addition here.
    // weight: { [key in Key]: string }
    // variant: { [key in Key]: string }
  }
  borderRadius: { [key in Key]: number }
  border: {
    [key in Key]: {
      color: Material
      // TODO: the theme model has no `thickness` field, so consumers can't express e.g.
      // "a 2px border" through the theme. Same caveats as the `typography` TODO above.
      // thickness: number
    }
  }
  outline: {
    [key in Key]: {
      color: Material
      weight: number
    }
  }
  grid: {
    unit: {
      column: number
      gutter: number
    }
  }
  transition: {
    [key in Key]: {
      duration: number
      // TODO: the theme model has no `easing` field, so consumers can't express e.g.
      // an "ease-out" transition through the theme. Same caveats as the `typography` TODO above.
      // easing: string
    }
  }
}
