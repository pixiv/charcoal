import { CharcoalAbstractTheme } from '@charcoal-ui/theme'
import { px } from '@charcoal-ui/utils'
import { Internal, internal } from './internal'

export const spacingProperties = ['margin', 'padding'] as const
export const spacingDirections = [
  'top',
  'right',
  'bottom',
  'left',
  'vertical',
  'horizontal',
  'all',
] as const
type SpacingProperty = typeof spacingProperties[number]
type SpacingDirection = typeof spacingDirections[number]

function spacingProperty(
  property: SpacingProperty,
  direction: 'top' | 'right' | 'bottom' | 'left'
) {
  return `${property}-${direction}`
}

export const createSpacingCss =
  <T extends CharcoalAbstractTheme>(theme: { spacing: T['spacing'] }) =>
  (
    property: SpacingProperty,
    modifiers: readonly [SpacingDirection, keyof T['spacing'] | 'auto'][]
  ): Internal => {
    const { top, right, bottom, left } = modifiers.reduce(
      (acc, [direction, size]) => {
        if (direction === 'all') {
          acc.top = size
          acc.right = size
          acc.bottom = size
          acc.left = size
        } else if (direction === 'vertical') {
          acc.top = size
          acc.bottom = size
        } else if (direction === 'horizontal') {
          acc.right = size
          acc.left = size
        } else {
          acc[direction] = size
        }
        return acc
      },
      {} as Partial<
        Record<'top' | 'right' | 'bottom' | 'left', keyof T['spacing'] | 'auto'>
      >
    )

    const hasVerticalPadding =
      property === 'padding' &&
      top !== undefined &&
      bottom !== undefined &&
      top !== 'auto' &&
      bottom !== 'auto'

    return internal(
      ({ cancelHalfLeadingPx = 0 }) => ({
        ...(top !== undefined && {
          [spacingProperty(property, 'top')]:
            top === 'auto'
              ? 'auto'
              : px(
                  theme.spacing[top] +
                    (hasVerticalPadding ? cancelHalfLeadingPx : 0)
                ),
        }),
        ...(bottom !== undefined && {
          [spacingProperty(property, 'bottom')]:
            bottom === 'auto'
              ? 'auto'
              : px(
                  theme.spacing[bottom] +
                    (hasVerticalPadding ? cancelHalfLeadingPx : 0)
                ),
        }),
        ...(right !== undefined && {
          [spacingProperty(property, 'right')]:
            right === 'auto' ? 'auto' : px(theme.spacing[right]),
        }),
        ...(left !== undefined && {
          [spacingProperty(property, 'left')]:
            left === 'auto' ? 'auto' : px(theme.spacing[left]),
        }),
      }),
      hasVerticalPadding ? { hasVerticalPadding: true } : {}
    )
  }
