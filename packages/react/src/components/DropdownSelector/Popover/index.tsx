import React, { RefObject, useRef } from 'react'
import { ReactNode } from 'react'
import { DismissButton, Overlay, usePopover } from '@react-aria/overlays'
import styled from 'styled-components'
import { theme } from '../../../styled'

export type PopoverProps = {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  triggerRef: RefObject<Element>
  popoverRef?: RefObject<HTMLDivElement>
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
    }
  )

  if (!props.isOpen) return null

  return (
    <Overlay portalContainer={document.body}>
      <div {...underlayProps} style={{ position: 'fixed', inset: 0 }} />
      <DropdownPopoverDiv {...popoverProps} ref={finalPopoverRef}>
        <DismissButton onDismiss={() => props.onClose()} />
        {props.children}
        <DismissButton onDismiss={() => props.onClose()} />
      </DropdownPopoverDiv>
    </Overlay>
  )
}

const DropdownPopoverDiv = styled.div`
  margin: 4px 0;
  list-style: none;
  overflow: auto;
  max-height: inherit;

  ${theme((o) => [
    o.bg.background1,
    o.border.default,
    o.borderRadius(8),
    o.padding.vertical(8),
  ])}
`
