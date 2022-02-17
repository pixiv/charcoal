/**
 * Unit for grid column (px)
 */
export const COLUMN_UNIT = 80

/**
 * Unit for grid gutter width (px)
 */
export const GUTTER_UNIT = 24

/**
 * Calculate px occupied by the span of the columns
 *
 * @param span column span count
 */
export function columnPx(span: number) {
  return span * COLUMN_UNIT + (span - 1) * GUTTER_UNIT
}

// TODO: Grid definition with breakpoint
