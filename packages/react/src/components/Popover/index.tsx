import React, { RefObject } from 'react'
import { ReactNode } from 'react'
import { FocusScope } from '@react-aria/focus'
import { PopoverPresenter } from './PopoverPresenter'
import { usePopover } from './hooks/usePopover'

export type Placement =
  | 'bottom'
  | 'bottom left'
  | 'bottom right'
  | 'top'
  | 'top left'
  | 'top right'

export type PopoverProps = {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  triggerRef: RefObject<Element>
  placement?: Placement
  className?: string
}

export function Popover(props: PopoverProps) {
  const { popoverProps, popoverRef } = usePopover(props)

  return (
    <PopoverPresenter {...popoverProps} ref={popoverRef}>
      <FocusScope autoFocus contain restoreFocus>
        {props.children}
      </FocusScope>
    </PopoverPresenter>
  )
}

export default React.memo(Popover)
