import { CommonTheme } from '.'
import {
  borderRadius,
  breakpoint,
  COLUMN_UNIT,
  GUTTER_UNIT,
  maxWidth,
  spacing,
  typography,
} from '@charcoal/foundation'

export const common: CommonTheme = {
  typography: {
    size: typography,
    variant: {
      proportional: null,
      monospace: 'monospace',
    },
    weight: {
      regular: null,
      bold: 'bold',
    },
  },
  spacing,
  grid: {
    unit: {
      column: COLUMN_UNIT,
      gutter: GUTTER_UNIT,
    },
  },
  borderRadius,
  transition: {
    default: {
      duration: 0.2,
    },
  },
  breakpoint: {
    screen1: maxWidth(breakpoint.screen1),
    screen2: maxWidth(breakpoint.screen2),
    screen3: maxWidth(breakpoint.screen3),
    screen4: maxWidth(breakpoint.screen4),
  },
}
