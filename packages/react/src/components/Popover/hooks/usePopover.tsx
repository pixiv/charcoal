import { useEffect, useRef } from 'react'
import { useOverlayPosition } from '@react-aria/overlays'
import { PopoverProps } from '..'

export function usePopover({
  onClose,
  triggerRef,
  placement = 'bottom',
}: PopoverProps) {
  const popoverRef = useRef<HTMLDivElement>(null)
  const { overlayProps } = useOverlayPosition({
    overlayRef: popoverRef,
    targetRef: triggerRef,
    offset: 4,
    containerPadding: 16,
    placement: placement,
  })
  useEffect(() => {
    const close = (e: PointerEvent) => {
      if (
        e.target !== triggerRef.current &&
        popoverRef.current &&
        e.target instanceof Element &&
        !popoverRef.current.contains(e.target)
      ) {
        onClose()
      }
    }
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    window.addEventListener('pointerdown', close)
    window.addEventListener('keydown', handleEscape)
    return () => {
      window.removeEventListener('pointerdown', close)
      window.removeEventListener('keydown', handleEscape)
    }
  }, [onClose, triggerRef])

  return {
    popoverRef,
    popoverProps: overlayProps,
  }
}
