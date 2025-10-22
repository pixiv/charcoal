import { columnSystem, COLUMN_UNIT, GUTTER_UNIT } from '@charcoal-ui/foundation'

export const MAIN_COLUMN_HORIZONTAL_MIN_MARGIN = 72

export const RESPONSIVE_LEFT_WIDTH =
  columnSystem(2, COLUMN_UNIT, GUTTER_UNIT) + GUTTER_UNIT
export const RESPONSIVE_MAIN_MAX_WIDTH = columnSystem(
  12,
  COLUMN_UNIT,
  GUTTER_UNIT,
)
