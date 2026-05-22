import * as React from 'react'
import { ariaHideOutside } from 'react-aria/private/overlays/ariaHideOutside'
import { useOverlayFocusContain } from 'react-aria/private/overlays/Overlay'
import { usePreventScroll } from '../DropdownSelector/Popover/usePreventScroll'

import {
  AriaModalOverlayProps,
  ModalOverlayAria,
} from 'react-aria/useModalOverlay'
import { useOverlay } from 'react-aria/useOverlay'

/**
 * We want to enable scrolling on the modal background,
 * but `useModalOverlay` (specifically, `useOverlay` within it) detects pointer events on the scrollbar.
 * Therefore, to prevent this issue, we need to override `shouldCloseOnInteractOutside` in `useModalOverlay`.
 */
export type CharcoalModalOverlayProps = AriaModalOverlayProps & {
  overflowClip?: boolean
}
export function useCharcoalModalOverlay(
  props: CharcoalModalOverlayProps,
  state: { isOpen: boolean; onClose: () => void },
  ref: React.RefObject<HTMLElement | null>,
): ModalOverlayAria {
  const { overlayProps, underlayProps } = useOverlay(
    {
      ...props,
      isOpen: state.isOpen,
      onClose: state.onClose,
      shouldCloseOnInteractOutside: () => false,
    },
    ref,
  )

  usePreventScroll(
    typeof document !== 'undefined' ? document.body : null,
    state.isOpen,
    props.overflowClip,
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

function isWindowDefined() {
  return typeof window !== 'undefined'
}

export function useWindowWidth() {
  const [width, setWidth] = React.useState(
    isWindowDefined() ? window.innerWidth : null,
  )
  React.useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })
  return width
}
