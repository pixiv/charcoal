import { Effect } from '@charcoal-ui/foundation'
import { CharcoalTheme as Theme } from '@charcoal-ui/theme'

export const GRID_COUNT = 12

export function mergeEffect({
  elementEffect,
  effect,
}: Pick<Theme, 'elementEffect' | 'effect'>): MergedEffect {
  return {
    ...elementEffect,
    ...effect,
    outline: {
      type: 'opacity',
      opacity: 0.32,
    } as Effect,
  }
}

export type MergedEffect = Record<string, Effect>
