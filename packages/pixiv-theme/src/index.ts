import {
  BorderRadius,
  Spacing,
  Typography,
  TypographyVariant,
  TypographyWeight,
} from '@charcoal/foundation'

import { GradientMaterial, Material, Theme as BaseTheme } from '@charcoal/theme'

interface PixivColor {
  /**
   * @deprecated use instead `theme.gradientColor.callToAction`
   */
  callToAction: GradientMaterial
  r18: Material
  marker: Material
  warning: Material
  success: Material
  gold: Material
  silver: Material
  bronze: Material
  updatedItem: Material
  premium: Material
  like: Material
}

/**
 * TODO: move to foundation?
 */
interface Transition {
  default: TransitionDescriptor
}
interface TransitionDescriptor {
  /**
   * second
   */
  duration: number
}

type AssignNullToDefault<T extends string, TDefault extends T> = {
  [key in Exclude<T, TDefault>]: string
} & { [key in TDefault]: null }

export interface CommonTheme {
  /**
   * @deprecated
   */
  typography: {
    size: Typography
    variant: AssignNullToDefault<TypographyVariant, 'proportional'>
    weight: AssignNullToDefault<TypographyWeight, 'regular'>
  }
  /**
   * @deprecated
   */
  spacing: Spacing
  /**
   * @deprecated
   */
  grid: {
    unit: {
      column: number
      gutter: number
    }
  }
  /**
   * @deprecated
   */
  borderRadius: BorderRadius
  /**
   * @deprecated
   */
  transition: Transition
  /**
   * @deprecated
   */
  breakpoint: {
    /**
     * 6 columns (max 743px)
     */
    screen1: string
    /**
     * 8 columns (max 953px)
     */
    screen2: string
    /**
     * 10 columns (max 1159px)
     */
    screen3: string
    /**
     * 12 columns (max 1367px)
     */
    screen4: string
  }
}

export type Theme = CommonTheme &
  BaseTheme & {
    /**
     * @deprecated
     */
    semantic: {
      like: Material
    }
    /**
     * @deprecated
     */
    colors: PixivColor
    color: PixivColor
    gradientColor: {
      callToAction: GradientMaterial
    }
  }

export { default as light } from './light'
export { default as dark } from './dark'
