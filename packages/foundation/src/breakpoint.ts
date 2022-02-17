import { columnPx } from './grid'

export const HORIZONTAL_MIN_MARGIN = 72

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type Breakpoint = {
  /**
   * 6 columns (max 743px)
   */
  screen1: number
  /**
   * 8 columns (max 953px)
   */
  screen2: number
  /**
   * 10 columns (max 1159px)
   */
  screen3: number
  /**
   * 12 columns (max 1367px)
   */
  screen4: number
}

export const breakpoint: Breakpoint = {
  screen1: columnPx(6) + HORIZONTAL_MIN_MARGIN * 2,
  screen2: columnPx(8) + HORIZONTAL_MIN_MARGIN * 2,
  screen3: columnPx(10) + HORIZONTAL_MIN_MARGIN * 2,
  screen4: columnPx(12) + HORIZONTAL_MIN_MARGIN * 2,
}

/**
 * @deprecated
 *
 * Construct media query from breakpoint
 */
export function maxWidth(breakpoint: number) {
  return `(max-width: ${breakpoint - 1}px)`
}
