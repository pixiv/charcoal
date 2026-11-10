import { forwardRef } from 'react'
import * as React from 'react'
import { useDialog } from 'react-aria/useDialog'
import { useForwardedRef } from '../../../_lib/useForwardedRef'
import { Size, BottomSheet, Scroll } from '..'

import './index.css'
import { useClassNames } from '../../../_lib/useClassNames'

export const Dialog = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<'div'> & {
    size: Size
    bottomSheet: BottomSheet
    scroll: Scroll
  }
>(function Dialog(
  { size, bottomSheet, scroll, className, ...props },
  forwardRef,
) {
  const ref = useForwardedRef(forwardRef)
  const { dialogProps } = useDialog(
    {
      role: 'dialog',
    },
    ref,
  )

  const classNames = useClassNames('charcoal-modal-dialog', className)
  return (
    <div
      className={classNames}
      role={dialogProps.role}
      data-bottom-sheet={bottomSheet}
      tabIndex={dialogProps.tabIndex}
      aria-labelledby={dialogProps['aria-labelledby']}
      onBlur={dialogProps.onBlur}
      data-size={size}
      data-scroll={scroll}
      ref={ref}
      {...props}
    />
  )
})
