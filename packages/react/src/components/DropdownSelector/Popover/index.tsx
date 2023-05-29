import React, { RefObject, Key, useRef } from 'react'
import { OverlayTriggerState } from 'react-stately'
import { ReactNode } from 'react'
import { DismissButton, Overlay, usePopover } from '@react-aria/overlays'
import styled from 'styled-components'
import { theme } from '../../../styled'

export type PopoverProps = {
  state: OverlayTriggerState
  children: ReactNode
  triggerRef: RefObject<Element>
  popoverRef?: RefObject<HTMLDivElement>
  value?: Key
}

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
    props.state
  )

  return (
    <Overlay portalContainer={document.body}>
      <div {...underlayProps} style={{ position: 'fixed', inset: 0 }} />
      <DropdownPopoverDiv {...popoverProps} ref={finalPopoverRef}>
        <DismissButton onDismiss={() => props.state.close()} />
        {props.children}
        <DismissButton onDismiss={() => props.state.close()} />
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
