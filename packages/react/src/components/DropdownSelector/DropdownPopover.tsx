import { useEffect, useRef } from 'react'
import Popover, { PopoverProps } from './Popover'

/**
 * DropdownSelectorの選択肢をを表示するためのPopover
 * triggerRefの要素と同じ幅になる
 * 表示の際にvalueが等しいDropdownMenuItemを中央に表示する
 */
export function DropdownPopover({ children, ...props }: PopoverProps) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (props.isOpen && ref.current && props.triggerRef.current) {
      ref.current.style.width = `${props.triggerRef.current.clientWidth}px`
    }
  }, [props.triggerRef, props.isOpen])

  return (
    <Popover
      isOpen={props.isOpen}
      onClose={props.onClose}
      popoverRef={ref}
      triggerRef={props.triggerRef}
      inertWorkaround={props.inertWorkaround}
    >
      {children}
    </Popover>
  )
}
