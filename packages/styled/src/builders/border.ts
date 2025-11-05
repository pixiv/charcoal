import { CharcoalAbstractTheme } from '@charcoal-ui/theme'
import { CSSObject } from 'styled-components'
import { keyof, variable, withPrefixes } from '../util'
import { Internal, createInternal } from '../internals'
import {
  defineConstantProperties,
  defineProperties,
  definePropertyChains,
} from '../factories/lib'
import { customPropertyToken } from '@charcoal-ui/utils'

export const borderDirections = ['top', 'right', 'bottom', 'left'] as const
type BorderDirection = (typeof borderDirections)[number]

export const createBorderCss = <T extends CharcoalAbstractTheme>(
  variant: keyof T['border'],
  directions: readonly BorderDirection[],
): Internal => {
  const all = directions.length === 0

  const value = `solid 1px ${variable(
    customPropertyToken(withPrefixes('border', variant.toString())),
  )}`

  return createInternal({
    toCSS() {
      return {
        ...(all
          ? { border: value }
          : directions.reduce<CSSObject>(
              (acc, direction) => ({
                ...acc,
                [`border-${direction}`]: value,
              }),
              {},
            )),
      }
    },
  })
}

export default function border<T extends CharcoalAbstractTheme>(theme: T) {
  const borderTypes = keyof<T['border']>(theme.border)

  const borderObject = defineConstantProperties(
    {},
    {
      border: defineProperties({}, borderTypes, (variant) =>
        definePropertyChains(borderDirections, (modifiers) =>
          createBorderCss(variant, modifiers),
        ),
      ),
    },
  )
  return borderObject
}
