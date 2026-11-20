import { forwardRef } from 'react'
import * as React from 'react'
import { useDialog } from 'react-aria/useDialog'
import { useForwardedRef } from '../../../_lib/useForwardedRef'
import { Size, BottomSheet } from '..'

import './index.css'
import { useClassNames } from '../../../_lib/useClassNames'

export const Dialog = forwardRef<
  HTMLDivElement,
  Omit<React.ComponentPropsWithoutRef<'div'>, 'children'> & {
    size: Size
    bottomSheet: BottomSheet
    children: (titleProps: React.HTMLAttributes<HTMLElement>) => React.ReactNode
  }
>(function Dialog(
  {
    size,
    bottomSheet,
    className,
    children,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledby,
    ...props
  },
  forwardRef,
) {
  const ref = useForwardedRef(forwardRef)
  const { dialogProps, titleProps } = useDialog(
    {
      role: 'dialog',
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledby,
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
      aria-label={dialogProps['aria-label']}
      aria-labelledby={dialogProps['aria-labelledby']}
      onBlur={dialogProps.onBlur}
      data-size={size}
      ref={ref}
      {...props}
    >
      {children(titleProps)}
    </div>
  )
})
