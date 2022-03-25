export interface TypographyDescriptor {
  readonly lineHeight: number
  readonly fontSize: number
}

export const TYPOGRAPHY_SIZE = {
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
} as const

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
