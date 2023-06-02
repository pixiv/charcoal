import React, { useEffect, useRef } from 'react'
import Popover, { PopoverProps } from './Popover'

type DropdownPopoverProps = PopoverProps & {
  value?: React.Key
}

/**
 * DropdownSelectorの選択肢をを表示するためのPopover
 * triggerRefの要素と同じ幅になる
 * 表示の際にvalueが等しいDropdownMenuItemを中央に表示する
 */
export function DropdownPopover({ children, ...props }: DropdownPopoverProps) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (props.isOpen && ref.current && props.triggerRef.current) {
      ref.current.style.width = `${props.triggerRef.current.clientWidth}px`
    }
  }, [props.triggerRef, props.isOpen])

  useEffect(() => {
    if (props.isOpen && props.value !== undefined) {
      // windowのスクロールを維持したまま選択肢をPopoverの中心に表示する
      const windowScrollY = window.scrollY
      const windowScrollX = window.scrollX
      const selectedElement = document.querySelector(
        `[data-key="${props.value.toString()}"]`
      ) as HTMLElement | undefined
      selectedElement?.scrollIntoView({ block: 'center' })
      selectedElement?.focus()
      window.scrollTo(windowScrollX, windowScrollY)
    }
  }, [props.value, props.isOpen])

  return (
    <Popover
      isOpen={props.isOpen}
      onClose={props.onClose}
      popoverRef={ref}
      triggerRef={props.triggerRef}
    >
      {children}
    </Popover>
  )
}
