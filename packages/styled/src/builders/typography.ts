import { CharcoalAbstractTheme } from '@charcoal-ui/theme'
import { halfLeading, px } from '@charcoal-ui/utils'
import { CSSObject } from 'styled-components'
import {
  Internal,
  createInternal,
  shouldCancelHalfLeading,
  Context,
} from './internal'
import { factory, modifiedFactory } from '../factories/lib'

export const createTypographyCss =
  <T extends CharcoalAbstractTheme>(theme: T) =>
  (
    size: keyof T['typography']['size'],
    options: {
      preserveHalfLeading?: boolean
      monospace?: boolean
      bold?: boolean
    } = {}
  ): Internal => {
    const {
      preserveHalfLeading = false,
      monospace = false,
      bold = false,
    } = options
    const descriptor = theme.typography.size[size]
    const margin = -halfLeading(descriptor)

    function toCSS(context: Context): CSSObject {
      return {
        fontSize: px(descriptor.fontSize),
        lineHeight: px(descriptor.lineHeight),
        ...(monospace && {
          fontFamily: 'monospace',
        }),
        ...(bold && {
          fontWeight: 'bold',
        }),
        ...(shouldCancelHalfLeading(context) && {
          // prevent margin collapsing
          display: 'flow-root',
          // cancel half-leading with negative margin
          '&::before': {
            ...leadingCancel,
            marginTop: px(margin),
          },
          '&::after': {
            ...leadingCancel,
            marginBottom: px(margin),
          },
        }),
      }
    }

    return createInternal({
      toCSS,
      context: !preserveHalfLeading
        ? {
            cancelHalfLeadingPx: margin,
          }
        : {},
    })
  }

const leadingCancel: CSSObject = {
  display: 'block',
  width: 0,
  height: 0,
  content: `''`,
}

// タイポグラフィ
const typographyModifiers = [
  // TODO
  'monospace',
  'bold',
  'preserveHalfLeading',
] as const

export default function typography<T extends CharcoalAbstractTheme>(theme: T) {
  const typographyCss = createTypographyCss(theme)
  const typographyObject = factory(
    {},
    ['typography'] as const,
    (_) => (size: keyof T['typography']['size']) =>
      modifiedFactory(typographyModifiers, (modifiers) =>
        typographyCss(size, {
          preserveHalfLeading: modifiers.includes('preserveHalfLeading'),
          monospace: modifiers.includes('monospace'),
          bold: modifiers.includes('bold'),
        })
      )
  )

  return typographyObject
}
