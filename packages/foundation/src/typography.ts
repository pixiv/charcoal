export interface TypographyDescriptor {
  lineHeight: number
  fontSize: number
}

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type Typography = {
  [12]: TypographyDescriptor
  [14]: TypographyDescriptor
  [16]: TypographyDescriptor
  [20]: TypographyDescriptor
  [32]: TypographyDescriptor
}

export const typography: Typography = {
  12: {
    fontSize: 12,
    lineHeight: 20,
  },
  14: {
    fontSize: 14,
    lineHeight: 22,
  },
  16: {
    fontSize: 16,
    lineHeight: 24,
  },
  20: {
    fontSize: 20,
    lineHeight: 28,
  },
  32: {
    fontSize: 32,
    lineHeight: 40,
  },
}

export const halfLeading = ({ fontSize, lineHeight }: TypographyDescriptor) =>
  (lineHeight - fontSize) / 2

export const TYPOGRAPHY_WEIGHT = [
  /**
   * Regular font weight
   *
   * <font-weight-absolute> ~ 400
   *
   * It should be the **DEFAULT** weight
   */
  'regular',
  /**
   * Bolder than `regular` weight
   *
   * <font-weight-absolute> ~ 700
   */
  'bold',
] as const

export type TypographyWeight = typeof TYPOGRAPHY_WEIGHT[number]

export const TYPOGRAPHY_VARIANT = [
  /**
   * Proportional font (which has the variable amount of horizontal space)
   *
   * It should be the **DEFAULT** variant
   */
  'proportional',
  /**
   * Monospaced font (which has the same amount of horizontal space)
   */
  'monospace',
] as const

export type TypographyVariant = typeof TYPOGRAPHY_VARIANT[number]
