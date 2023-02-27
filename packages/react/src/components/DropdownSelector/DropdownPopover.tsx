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
    if (
      ref.current &&
      props.triggerRef.current &&
      state.isOpen &&
      props.value !== undefined
    ) {
      ref.current.style.width = `${props.triggerRef.current.clientWidth}px`
      // useListbox内部で現在の選択肢までスクロールする処理がある
      // react-ariaより遅らせるためrequestAnimationFrameで呼び出す
      window.requestAnimationFrame(() => {
        if (props.value === undefined) return
        // react-aria の scrollIntoViewport は 'nearest' なので
        // listboxの中心に来るように上書きする
        // 'center'は windowのスクロールも変更されるため戻す処理を入れている。
        const windowScrollY = window.scrollY
        const windowScrollX = window.scrollX
        const selectedElement = document.querySelector(
          `[data-key="${props.value.toString()}"]`
        ) as HTMLElement | undefined
        selectedElement?.scrollIntoView({ block: 'center' })
        window.scrollTo(windowScrollX, windowScrollY)
      })
    }
  }, [props.triggerRef, props.value, state.isOpen])

  return (
    <Overlay>
      <div {...underlayProps} style={{ position: 'fixed', inset: 0 }} />
      <DropdownPopoverDiv {...popoverProps} ref={ref}>
        <DismissButton onDismiss={() => state.close()} />
        {children}
        <DismissButton onDismiss={() => state.close()} />
      </DropdownPopoverDiv>
    </Overlay>
  )
}
