import { columnSystem } from '@charcoal-ui/foundation'
import { CharcoalAbstractTheme } from '@charcoal-ui/theme'
import { px } from '@charcoal-ui/utils'
import { Internal, createInternal } from '../internals'
import { defineProperties, defineConstantProperties } from '../factories/lib'

export const fixedProperties = ['width', 'height'] as const
type FixedProperty = (typeof fixedProperties)[number]

export const createFixedPxCss =
  <T extends CharcoalAbstractTheme>(theme: T) =>
  (property: FixedProperty, size: keyof T['spacing'] | 'auto'): Internal =>
    createInternal({
      toCSS() {
        return {
          [property]: size === 'auto' ? 'auto' : px(theme.spacing[size]),
        }
      },
    })

export const createFixedRelativeCss =
  <T extends CharcoalAbstractTheme>(_theme: T) =>
  (property: FixedProperty, amount: '100%' | 'auto'): Internal =>
    createInternal({
      toCSS() {
        return {
          [property]: amount,
        }
      },
    })

export const createFixedColumnCss =
  <T extends CharcoalAbstractTheme>(theme: T) =>
  (property: FixedProperty, span: number): Internal =>
    createInternal({
      toCSS() {
        return {
          [property]: px(
            columnSystem(span, theme.grid.unit.column, theme.grid.unit.gutter)
          ),
        }
      },
    })

export default function size<T extends CharcoalAbstractTheme>(theme: T) {
  const fixedPxCss = createFixedPxCss(theme)
  const fixedColumnCss = createFixedColumnCss(theme)
  const fixedRelativeCss = createFixedRelativeCss(theme)
  const fixedObject = defineProperties({}, fixedProperties, (property) =>
    defineConstantProperties(
      {},
      {
        px: (size: keyof T['spacing'] | 'auto') => fixedPxCss(property, size),
        column: (span: number) => fixedColumnCss(property, span),
        auto: fixedRelativeCss(property, 'auto'),
        full: fixedRelativeCss(property, '100%'),
      }
    )
  )
  return fixedObject
}
