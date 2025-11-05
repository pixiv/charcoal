/**
 * Unit for grid column (px)
 */
export const COLUMN_UNIT = 80

/**
 * Unit for grid gutter width (px)
 */
export const GUTTER_UNIT = 24

// TODO: Grid definition with breakpoint

/**
 * Calculate px occupied by the span of the columns with gutter gap
 *
 * @param span column span count
 */
export function columnSystem(
  span: number,
  column: number,
  gutter: number,
): number {
  return span * column + (span - 1) * gutter
}
