import { CharcoalAbstractTheme } from '@charcoal-ui/theme'
import { px } from '@charcoal-ui/utils'
import { CSSObject } from 'styled-components'
import { Internal, createInternal, Context } from './internal'
import { factory, modifiedArgumentedFactory } from '../factories/lib'

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

    function toCSS({ cancelHalfLeadingPx = 0 }: Context): CSSObject {
      return {
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
      }
    }

    return createInternal({
      toCSS,
      context: hasVerticalPadding ? { hasVerticalPadding: true } : {},
    })
  }

export default function spacing<T extends CharcoalAbstractTheme>(theme: T) {
  const spacingCss = createSpacingCss(theme)
  const spacingObject = factory({}, spacingProperties, (spacingProperty) =>
    modifiedArgumentedFactory(
      spacingDirections,
      (modifiers) => spacingCss(spacingProperty, modifiers),
      {} as keyof T['spacing'] | 'auto' // 推論のためのメタタイプ
    )
  )
  return spacingObject
}
