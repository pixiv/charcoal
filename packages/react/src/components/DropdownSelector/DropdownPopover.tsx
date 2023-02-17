import React, { useRef } from 'react'
import { OverlayTriggerState } from 'react-stately'
import { ReactNode } from 'react'
import {
  AriaPopoverProps,
  DismissButton,
  usePopover,
} from '@react-aria/overlays'
import styled from 'styled-components'
import { FocusScope } from '@react-aria/focus'

const DropdownPopoverDiv = styled.div`
  width: 100%;
`

export function DropdownPopover({
  children,
  state,
  ...props
}: Omit<AriaPopoverProps, 'popoverRef'> & { state: OverlayTriggerState } & {
  children: ReactNode
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { popoverProps, underlayProps } = usePopover(
    {
      ...props,
      popoverRef: ref,
    },
    state
  )

  return (
    <FocusScope>
      <div {...underlayProps} style={{ position: 'fixed', inset: 0 }} />
      <DropdownPopoverDiv
        {...popoverProps}
        ref={ref}
        style={{
          ...popoverProps.style,
          left: 0,
        }}
      >
        <DismissButton onDismiss={() => state.close()} />
        {children}
        <DismissButton onDismiss={() => state.close()} />
      </DropdownPopoverDiv>
    </FocusScope>
  )
}
