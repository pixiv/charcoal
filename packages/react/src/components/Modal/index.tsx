import React, { useContext, useRef } from 'react'
import {
  OverlayContainer,
  OverlayProps,
  useModal,
  useOverlay,
  usePreventScroll,
} from '@react-aria/overlays'
import styled from 'styled-components'
import { theme } from '../../styled'
import { FocusScope } from '@react-aria/focus'
import { useDialog } from '@react-aria/dialog'
import { AriaDialogProps } from '@react-types/dialog'
import Icon from '../Icon'
import Clickable from '../Clickable'
import { columnSystem, COLUMN_UNIT, GUTTER_UNIT } from '@charcoal-ui/foundation'
import { unreachable } from '../../_lib'
import { maxWidth } from '@charcoal-ui/utils'

export type Props = OverlayProps &
  AriaDialogProps & {
    children: React.ReactNode
    title: string
    size?: 'S' | 'M' | 'L'
  }

export default function Modal({ children, ...props }: Props) {
  const { title, size = 'M', isDismissable, onClose } = props

  const ref = useRef<HTMLDivElement>(null)
  const { overlayProps, underlayProps } = useOverlay(
    { ...props, isOpen: true },
    ref
  )

  usePreventScroll()
  const { modalProps } = useModal()

  const { dialogProps, titleProps } = useDialog(props, ref)

  return (
    <OverlayContainer>
      <ModalBackground {...underlayProps}>
        <FocusScope contain restoreFocus autoFocus>
          <ModalDialog
            ref={ref}
            {...overlayProps}
            {...modalProps}
            {...dialogProps}
            size={size}
          >
            <ModalContext.Provider value={{ titleProps, title }}>
              {children}
              {isDismissable === true && (
                <ModalDismissButton onClick={onClose}>
                  <Icon name="24/Close"></Icon>
                </ModalDismissButton>
              )}
            </ModalContext.Provider>
          </ModalDialog>
        </FocusScope>
      </ModalBackground>
    </OverlayContainer>
  )
}

const ModalContext = React.createContext<{
  titleProps: React.HTMLAttributes<HTMLElement>
  title: string
}>({
  titleProps: {},
  title: '',
})

const ModalBackground = styled.div`
  /* TODO */
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  justify-items: center;

  ${theme((o) => [o.bg.surface4])}
`

const ModalDialog = styled.div<{ size: 'S' | 'M' | 'L' }>`
  position: relative;
  width: ${(p) =>
    p.size === 'S'
      ? columnSystem(3, COLUMN_UNIT, GUTTER_UNIT) + GUTTER_UNIT * 2
      : p.size === 'M'
      ? columnSystem(4, COLUMN_UNIT, GUTTER_UNIT) + GUTTER_UNIT * 2
      : // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      p.size === 'L'
      ? columnSystem(6, COLUMN_UNIT, GUTTER_UNIT) + GUTTER_UNIT * 2
      : unreachable()}px;

  @media ${({ theme }) => maxWidth(theme.breakpoint.screen1)} {
    width: calc(100% - 48px);
  }

  ${theme((o) => [o.bg.background1, o.borderRadius(24)])}
`

const ModalDismissButton = styled(Clickable)`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: grid;
  align-content: center;
  justify-content: center;

  ${theme((o) => [o.font.text3.hover.press])}
`

export function ModalTitle(props: React.HTMLAttributes<HTMLHeadingElement>) {
  const { titleProps, title } = useContext(ModalContext)
  return (
    <ModalHeading {...titleProps} {...props}>
      {title}
    </ModalHeading>
  )
}

const ModalHeading = styled.h3`
  margin: 0;
  font-weight: inherit;
  font-size: inherit;
`
