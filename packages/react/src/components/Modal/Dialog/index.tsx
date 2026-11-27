import { forwardRef, useMemo } from 'react'
import * as React from 'react'
import { useDialog } from 'react-aria/useDialog'
import { useForwardedRef } from '../../../_lib/useForwardedRef'
import { Size, BottomSheet, Scroll, ModalContext, ModalContextValue } from '..'

import './index.css'
import { useClassNames } from '../../../_lib/useClassNames'

export const Dialog = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<'div'> & {
    size: Size
    bottomSheet: BottomSheet
    scroll: Scroll
    context: Omit<ModalContextValue, 'titleProps'>
  }
>(function Dialog(
  {
    size,
    bottomSheet,
    scroll,
    className,
    children,
    context,
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

  const titleId = titleProps.id
  const contextValue = useMemo(
    () => ({ ...context, titleProps: { id: titleId } }),
    [context, titleId],
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
      data-scroll={scroll}
      ref={ref}
      {...props}
    >
      <ModalContext.Provider value={contextValue}>
        {children}
      </ModalContext.Provider>
    </div>
  )
})
