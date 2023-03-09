import { CharcoalAbstractTheme } from '@charcoal-ui/theme'
import { CSSObject } from 'styled-components'
import { Internal, internal } from '../internal'

export const borderDirections = ['top', 'right', 'bottom', 'left'] as const
type BorderDirection = typeof borderDirections[number]

function borderProperty(direction: BorderDirection) {
  return `border-${direction}`
}

function borderShorthand(color: string) {
  return `solid 1px ${color}`
}

export const createBorderCss =
  <T extends CharcoalAbstractTheme>(theme: T) =>
  (
    variant: keyof T['border'],
    directions: readonly BorderDirection[]
  ): Internal => {
    const all = directions.length === 0
    const value = borderShorthand(theme.border[variant].color)
    return internal(() => ({
      ...(all
        ? { border: value }
        : directions.reduce<CSSObject>(
            (acc, direction) => ({
              ...acc,
              [borderProperty(direction)]: value,
            }),
            {}
          )),
    }))
  }
