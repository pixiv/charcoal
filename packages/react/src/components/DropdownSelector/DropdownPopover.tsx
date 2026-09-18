import { Key, useEffect, useRef } from 'react'
import Popover, { PopoverProps } from './Popover'

type DropdownPopoverProps = PopoverProps & {
  value?: Key
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
    if (props.isOpen) {
      const popover = ref.current
      if (popover === null) return
      const options = Array.from(
        popover.querySelectorAll<HTMLElement>('[role="option"]'),
      )
      const selectedElement = options.find(
        (option) =>
          option.ariaDisabled !== 'true' &&
          (props.value === ''
            ? option.dataset.noSelection === 'true'
            : option.dataset.noSelection !== 'true' &&
              option.dataset.key === props.value),
      )
      const firstEnabledElement = options.find(
        (element) => element.ariaDisabled !== 'true',
      )

      if (selectedElement instanceof HTMLElement) {
        // windowのスクロールを維持したまま選択肢をPopoverの中心に表示する
        const windowScrollY = window.scrollY
        const windowScrollX = window.scrollX
        selectedElement.focus()
        window.scrollTo(windowScrollX, windowScrollY)
      } else if (firstEnabledElement instanceof HTMLElement) {
        firstEnabledElement.focus()
      }
    }
  }, [props.value, props.isOpen])

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
