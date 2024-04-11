import * as React from 'react'
import {
  AriaModalOverlayProps,
  ModalOverlayAria,
  ariaHideOutside,
  useOverlay,
  useOverlayFocusContain,
} from '@react-aria/overlays'
import { usePreventScroll } from '../DropdownSelector/Popover/usePreventScroll'

/**
 * We want to enable scrolling on the modal background,
 * but `useModalOverlay` (specifically, `useOverlay` within it) detects pointer events on the scrollbar.
 * Therefore, to prevent this issue, we need to override `shouldCloseOnInteractOutside` in `useModalOverlay`.
 */
export function useCharcoalModalOverlay(
  props: AriaModalOverlayProps,
  state: { isOpen: boolean; onClose: () => void },
  ref: React.RefObject<HTMLElement>
): ModalOverlayAria {
  const { overlayProps, underlayProps } = useOverlay(
    {
      ...props,
      isOpen: state.isOpen,
      onClose: state.onClose,
      shouldCloseOnInteractOutside: () => false,
    },
    ref
  )

  usePreventScroll(
    typeof document !== 'undefined' ? document.body : null,
    state.isOpen
  )

  useOverlayFocusContain()

  React.useEffect(() => {
    if (state.isOpen && ref.current) {
      return ariaHideOutside([ref.current])
    }
  }, [state.isOpen, ref])

  return {
    modalProps: overlayProps,
    underlayProps,
  }
}
