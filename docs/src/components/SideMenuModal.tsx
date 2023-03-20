import {
  Overlay,
  useModalOverlay,
  AriaModalOverlayProps,
} from '@react-aria/overlays'
import { OverlayTriggerState } from 'react-stately'
import React, { FC, useRef } from 'react'
import { FocusScope } from '@react-aria/focus'
import styled from 'styled-components'
import { theme } from '../utils/theme'
import { SideMenuDiv } from "./SideMenuDiv"

export const SideMenuModal: FC<
  AriaModalOverlayProps & {
    state: OverlayTriggerState
    children?: React.ReactNode
  }
> = ({ state, children, ...props }) => {
  let ref = useRef<HTMLDivElement>(null)
  let { modalProps, underlayProps } = useModalOverlay(props, state, ref)

  if (!state.isOpen) return null

  return (
    <Overlay portalContainer={document.body}>
      <OverlayChildDiv
        onClick={(e) => {
          if (
            e.nativeEvent.target instanceof HTMLElement &&
            ref.current?.contains(e.nativeEvent.target)
          ) {
            return
          }
          state.close()
        }}
        {...underlayProps}
      >
        <FocusScope contain restoreFocus autoFocus>
          <SideMenuDiv {...modalProps} ref={ref} >
            {children}
          </SideMenuDiv>
        </FocusScope>
      </OverlayChildDiv>
    </Overlay>
  )
}

const OverlayChildDiv = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  ${theme((o) => o.bg.surface4)};
`
