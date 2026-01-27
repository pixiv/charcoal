import './index.css'

import { RefObject, useContext, useRef, ReactNode } from 'react'
import { DismissButton, Overlay, usePopover } from '@react-aria/overlays'
import { ModalBackgroundContext } from '../../Modal/ModalBackgroundContext'
import { usePreventScroll } from './usePreventScroll'

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

  if (!props.isOpen) return null

  return (
    <Overlay portalContainer={document.body}>
      <div
        {...underlayProps}
        // https://github.com/adobe/react-spectrum/issues/8784#issuecomment-3234771154
        {...(props.inertWorkaround
          ? { 'data-react-aria-top-layer': true, onClick: props.onClose }
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
