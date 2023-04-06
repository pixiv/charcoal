import React, { Key, useEffect, useRef } from 'react'
import { OverlayTriggerState } from 'react-stately'
import { ReactNode } from 'react'
import {
  AriaPopoverProps,
  DismissButton,
  Overlay,
  usePopover,
} from '@react-aria/overlays'
import styled from 'styled-components'
import { theme } from '../../styled'

const DropdownPopoverDiv = styled.div`
  width: 100%;
  ${theme((o) => o.margin.top(4).bottom(4))}
`

type Props = Omit<AriaPopoverProps, 'popoverRef'> & {
  state: OverlayTriggerState
} & {
  children: ReactNode
  value?: Key
}

export function DropdownPopover({ children, state, ...props }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const { popoverProps, underlayProps } = usePopover(
    {
      ...props,
      popoverRef: ref,
      containerPadding: 0,
    },
    state
  )

  useEffect(() => {
    if (ref.current && props.triggerRef.current) {
      ref.current.style.width = `${props.triggerRef.current.clientWidth}px`
    }
  }, [props.triggerRef])

  useEffect(() => {
    if (state.isOpen && props.value !== undefined) {
      // windowのスクロールを維持したまま選択肢をPopoverの中心に表示する
      const windowScrollY = window.scrollY
      const windowScrollX = window.scrollX
      const selectedElement = document.querySelector(
        `[data-key="${props.value.toString()}"]`
      ) as HTMLElement | undefined
      selectedElement?.scrollIntoView({ block: 'center' })
      selectedElement?.focus()
      window.scrollTo(windowScrollX, windowScrollY)
    }
  }, [props.value, state.isOpen])

  return (
    <Overlay portalContainer={document.body}>
      <div {...underlayProps} style={{ position: 'fixed', inset: 0 }} />
      <DropdownPopoverDiv {...popoverProps} ref={ref}>
        <DismissButton onDismiss={() => state.close()} />
        {children}
        <DismissButton onDismiss={() => state.close()} />
      </DropdownPopoverDiv>
    </Overlay>
  )
}
