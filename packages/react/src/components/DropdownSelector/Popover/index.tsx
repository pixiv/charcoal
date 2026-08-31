import './index.css'

import {
  RefObject,
  useContext,
  useEffect,
  useRef,
  ReactNode,
  type PointerEvent as ReactPointerEvent,
} from 'react'
import { ModalBackgroundContext } from '../../Modal/ModalBackgroundContext'
import { usePreventScroll } from './usePreventScroll'
import { DismissButton, Overlay } from 'react-aria/Overlay'
import { usePopover } from 'react-aria/usePopover'

export type PopoverProps = {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  triggerRef: RefObject<Element | null>
  popoverRef?: RefObject<HTMLDivElement | null>
  /**
   * A tmp workaround for react-aria above 3.27.3 setting overlay element to inert and causing background to be clickable.
   * This may become default at next major.
   * https://github.com/adobe/react-spectrum/pull/8796
   * https://github.com/adobe/react-spectrum/issues/8784
   *
   * @default false
   */
  inertWorkaround?: boolean
}

const _empty = () => null

/**
 * 画面の全面に動的に開くことができるコンテナ要素
 * 外の要素をクリックしたり、内部からフォーカスを移動した場合に自動的に閉じる
 *
 * triggerRefの付近に画面内に収まるように表示される
 */
export default function Popover(props: PopoverProps) {
  const defaultPopoverRef = useRef<HTMLDivElement>(null)
  const underlayRef = useRef<HTMLDivElement>(null)
  const underlayPointerDownRef = useRef(false)
  const underlayPointerTypeRef = useRef('')
  const finalPopoverRef =
    props.popoverRef === undefined ? defaultPopoverRef : props.popoverRef
  const { popoverProps, underlayProps } = usePopover(
    {
      triggerRef: props.triggerRef,
      popoverRef: finalPopoverRef,
      containerPadding: 16,
    },
    {
      close: props.onClose,
      isOpen: props.isOpen,
      // never used
      open: _empty,
      setOpen: _empty,
      toggle: _empty,
    },
  )

  const modalBackground = useContext(ModalBackgroundContext)
  usePreventScroll(modalBackground, props.isOpen)

  // React の touchstart listener は passive なので、ペン由来の互換 click を
  // 抑止するため underlay に non-passive listener を直接登録する。
  useEffect(() => {
    const underlay = underlayRef.current
    if (!props.isOpen || !props.inertWorkaround || underlay === null) return

    const handleTouchStart = (e: TouchEvent) => {
      if (underlayPointerTypeRef.current === 'pen') {
        e.preventDefault()
      }
    }
    underlay.addEventListener('touchstart', handleTouchStart, {
      passive: false,
    })
    return () => {
      underlay.removeEventListener('touchstart', handleTouchStart)
    }
  }, [props.isOpen, props.inertWorkaround])

  // iOS Safari は非インタラクティブな要素へのペン入力で click を合成しないため、
  // click に依存する react-aria の外側判定ではペンで閉じられない。
  // underlay 側では拾えない: react-aria が modal 時に外側を inert にするので
  // underlay 自身がイベントを受け取らなくなる。
  const { isOpen, onClose } = props
  useEffect(() => {
    if (!isOpen) return
    const handlePointerUp = (e: PointerEvent) => {
      if (e.pointerType !== 'pen') return
      const popover = finalPopoverRef.current
      if (popover !== null && e.composedPath().includes(popover)) return
      onClose()
    }
    document.addEventListener('pointerup', handlePointerUp, true)
    return () => {
      document.removeEventListener('pointerup', handlePointerUp, true)
    }
  }, [isOpen, onClose, finalPopoverRef])

  const handleUnderlayPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    underlayPointerDownRef.current = true
    underlayPointerTypeRef.current = e.pointerType
  }

  const handleUnderlayPointerCancel = () => {
    underlayPointerDownRef.current = false
    underlayPointerTypeRef.current = ''
  }

  const handleUnderlayClick = () => {
    const startedOnUnderlay = underlayPointerDownRef.current
    underlayPointerDownRef.current = false
    underlayPointerTypeRef.current = ''

    // Android Chrome はペンの pointerup で Popover が開いた後、同じ入力の
    // 互換 click を新しく追加された underlay に送る。この click には
    // underlay 上の pointerdown がないため、外側操作として扱わない。
    if (startedOnUnderlay) {
      props.onClose()
    }
  }

  if (!props.isOpen) return null

  return (
    <Overlay portalContainer={document.body}>
      <div
        {...underlayProps}
        ref={underlayRef}
        // https://github.com/adobe/react-spectrum/issues/8784#issuecomment-3234771154
        {...(props.inertWorkaround
          ? {
              'data-react-aria-top-layer': true,
              onPointerDown: handleUnderlayPointerDown,
              onPointerCancel: handleUnderlayPointerCancel,
              onClick: handleUnderlayClick,
            }
          : {})}
        style={{
          position: 'fixed',
          zIndex:
            typeof popoverProps.style?.zIndex === 'number'
              ? popoverProps.style.zIndex - 1
              : 99999,
          inset: 0,
        }}
      />
      {/* @ts-expect-error react types we use does not support react 19 types yet */}
      <div {...popoverProps} ref={finalPopoverRef} className="charcoal-popover">
        <DismissButton onDismiss={() => props.onClose()} />
        <div tabIndex={0} onFocus={props.onClose} />
        {props.children}
        <div tabIndex={0} onFocus={props.onClose} />
        <DismissButton onDismiss={() => props.onClose()} />
      </div>
    </Overlay>
  )
}
