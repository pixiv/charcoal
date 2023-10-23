import { forwardRef } from 'react'
import * as React from 'react'
import styled, { css } from 'styled-components'
import { useDialog } from '@react-aria/dialog'
import { columnSystem, COLUMN_UNIT, GUTTER_UNIT } from '@charcoal-ui/foundation'
import { unreachable } from '../../../_lib'
import { maxWidth } from '@charcoal-ui/utils'
import { animated } from 'react-spring'
import { useForwardedRef } from '../../../_lib/useForwardedRef'
import { Size, BottomSheet } from '..'

export const Dialog = forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof AnimatedStyledDialogDiv>
>(function Dialog(props, forwardRef) {
  const ref = useForwardedRef(forwardRef)
  const { dialogProps } = useDialog(
    {
      role: 'dialog',
    },
    ref
  )

  return (
    <AnimatedStyledDialogDiv
      {...props}
      role={dialogProps.role}
      tabIndex={dialogProps.tabIndex}
      aria-labelledby={dialogProps['aria-labelledby']}
      onBlur={dialogProps.onBlur}
      ref={ref}
    />
  )
})

const AnimatedStyledDialogDiv = animated(styled.div<{
  size: Size
  bottomSheet: BottomSheet
}>`
  margin: auto;
  position: relative;
  height: fit-content;
  width: ${(p) => {
    switch (p.size) {
      case 'S': {
        return columnSystem(3, COLUMN_UNIT, GUTTER_UNIT) + GUTTER_UNIT * 2
      }
      case 'M': {
        return columnSystem(4, COLUMN_UNIT, GUTTER_UNIT) + GUTTER_UNIT * 2
      }
      case 'L': {
        return columnSystem(6, COLUMN_UNIT, GUTTER_UNIT) + GUTTER_UNIT * 2
      }
      default: {
        return unreachable(p.size)
      }
    }
  }}px;

  background-color: ${({ theme }) => theme.color.background1};
  border-radius: 24px;

  @media ${({ theme }) => maxWidth(theme.breakpoint.screen1)} {
    max-width: 440px;
    width: calc(100% - 48px);
    ${(p) =>
      p.bottomSheet !== false &&
      css`
        width: 100%;
        border-radius: 0;
        margin: auto 0 0 0;
        ${p.bottomSheet === 'full' &&
        css`
          min-height: 100%;
        `}
      `}
  }
  :focus {
    outline: none;
  }
`)
