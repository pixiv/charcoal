import { StyledTheme } from './types'
import {
  BorderRadius,
  Spacing,
  Typography,
  borderRadius,
  spacing,
  typography,
  Breakpoint,
  breakpoint,
} from '@pixiv-elements/foundation'
import { light as l, dark as d } from '@pixiv-elements/pixiv-theme'
import { Effect, Material, OpacityEffect, Theme } from '@pixiv-elements/theme'
import { applyEffect } from '@pixiv-elements/utils'

export interface ElementsTheme extends StyledTheme {
  color: Theme['color']
  gradientColor: Theme['gradientColor']
  effect: {
    hover: Effect
    press: Effect
  }
  elementEffect: {
    disabled: OpacityEffect
  }
  spacing: Spacing
  typography: {
    size: Typography
  }
  borderRadius: BorderRadius
  border: {
    default: {
      color: Material
    }
  }
  outline: {
    default: {
      color: string
      weight: 4
    }
    assertive: {
      color: string
      weight: 4
    }
  }
  breakpoint: Breakpoint
}

const outlineEffect = {
  type: 'opacity',
  opacity: 0.32,
} as const

const common = {
  borderRadius,
  spacing,
  typography: {
    size: typography,
  },
  breakpoint,
}

export const light: ElementsTheme = {
  color: l.color,
  gradientColor: l.gradientColor,
  effect: l.effect,
  elementEffect: l.elementEffect,
  border: {
    default: {
      color: l.color.border,
    },
  },
  outline: {
    default: {
      color: applyEffect(l.color.brand, outlineEffect),
      weight: 4,
    },
    assertive: {
      color: applyEffect(l.color.assertive, outlineEffect),
      weight: 4,
    },
  },
  ...common,
}

export const dark: ElementsTheme = {
  color: d.color,
  gradientColor: d.gradientColor,
  effect: d.effect,
  elementEffect: d.elementEffect,
  border: {
    default: {
      color: d.color.border,
    },
  },
  outline: {
    default: {
      color: applyEffect(d.color.brand, outlineEffect),
      weight: 4,
    },
    assertive: {
      color: applyEffect(d.color.assertive, outlineEffect),
      weight: 4,
    },
  },
  ...common,
}
