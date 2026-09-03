import * as React from 'react'
import { ariaHideOutside } from 'react-aria/private/overlays/ariaHideOutside'
import { useOverlayFocusContain } from 'react-aria/private/overlays/Overlay'
import { usePreventScroll } from '../DropdownSelector/Popover/usePreventScroll'

import {
  AriaModalOverlayProps,
  ModalOverlayAria,
} from 'react-aria/useModalOverlay'
import { useOverlay } from 'react-aria/useOverlay'

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
      // charcoal では isDismissable は閉じるボタンと ESC の制御であり、
      // 背景クリックでの dismiss は isDismissable に関係なく常に有効
      isDismissable: true,
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
