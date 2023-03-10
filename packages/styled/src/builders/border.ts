import { CharcoalAbstractTheme } from '@charcoal-ui/theme'
import { CSSObject } from 'styled-components'
import { objectKeys } from '../util'
import { Internal, createInternal } from '../internals'
import {
  defineConstantProperties,
  defineProperties,
  definePropertyChains,
} from '../factories/lib'

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

    return createInternal({
      toCSS() {
        return {
          ...(all
            ? { border: value }
            : directions.reduce<CSSObject>(
                (acc, direction) => ({
                  ...acc,
                  [borderProperty(direction)]: value,
                }),
                {}
              )),
        }
      },
    })
  }

export default function border<T extends CharcoalAbstractTheme>(theme: T) {
  const borderCss = createBorderCss(theme)
  const borderObject = defineConstantProperties(
    {},
    {
      border: defineProperties({}, objectKeys(theme.border), (variant) =>
        definePropertyChains(borderDirections, (modifiers) =>
          borderCss(variant, modifiers)
        )
      ),
    }
  )
  return borderObject
}
