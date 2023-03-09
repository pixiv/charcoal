import { CharcoalAbstractTheme } from '@charcoal-ui/theme'
import { halfLeading, px } from '@charcoal-ui/utils'
import { CSSObject } from 'styled-components'
import { Context } from '../context'
import { Internal, internal } from '../internal'

// half-leadingをキャンセルするとき && 垂直方向のpaddingが無い時

// -> before/afterを入れる
export const useHalfLeadingCanceller = ({
  cancelHalfLeadingPx,
  hasVerticalPadding = false,
}: Context) => cancelHalfLeadingPx !== undefined && !hasVerticalPadding

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

    return internal(
      (context) => ({
        fontSize: px(descriptor.fontSize),
        lineHeight: px(descriptor.lineHeight),
        ...(monospace && {
          fontFamily: 'monospace',
        }),
        ...(bold && {
          fontWeight: 'bold',
        }),
        ...(useHalfLeadingCanceller(context) && {
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
      }),
      !preserveHalfLeading
        ? {
            cancelHalfLeadingPx: margin,
          }
        : {}
    )
  }

const leadingCancel: CSSObject = {
  display: 'block',
  width: 0,
  height: 0,
  content: `''`,
}
