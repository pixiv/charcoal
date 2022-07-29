import React, { useContext, useRef } from 'react'
import {
  OverlayContainer,
  OverlayProps,
  useModal,
  useOverlay,
  usePreventScroll,
} from '@react-aria/overlays'
import styled, { css, useTheme } from 'styled-components'
import { theme } from '../../styled'
import { FocusScope } from '@react-aria/focus'
import { useDialog } from '@react-aria/dialog'
import { AriaDialogProps } from '@react-types/dialog'
import Icon from '../Icon'
import Clickable from '../Clickable'
import { columnSystem, COLUMN_UNIT, GUTTER_UNIT } from '@charcoal-ui/foundation'
import { unreachable } from '../../_lib'
import { maxWidth } from '@charcoal-ui/utils'
import { useMedia } from '@charcoal-ui/styled'
import { animated, useTransition, easings } from 'react-spring'

export type Props = OverlayProps &
  AriaDialogProps & {
    children: React.ReactNode
    title: string
    size?: 'S' | 'M' | 'L'
    bottomSheet?: boolean | 'full'
  }

export default function Modal({ children, ...props }: Props) {
  const {
    title,
    size = 'M',
    bottomSheet = false,
    isDismissable,
    onClose,
    isOpen = false,
  } = props

  const ref = useRef<HTMLDivElement>(null)
  const { overlayProps, underlayProps } = useOverlay(props, ref)

  usePreventScroll()
  const { modalProps } = useModal()

  const { dialogProps, titleProps } = useDialog(props, ref)

  const theme = useTheme()
  const isMobile = useMedia(maxWidth(theme.breakpoint.screen1)) ?? false
  const transitionEnabled = isMobile && bottomSheet !== false
  const transition = useTransition(isOpen, {
    from: {
      transform: 'translateY(100%)',
      backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    enter: {
      transform: 'translateY(0%)',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    leave: {
      transform: 'translateY(100%)',
      backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    config: transitionEnabled
      ? { duration: 400, easing: easings.easeOutQuart }
      : { duration: 0 },
  })

  return transition(
    ({ backgroundColor, transform }, item) =>
      item && (
        <OverlayContainer>
          <ModalBackground
            {...underlayProps}
            style={transitionEnabled ? { backgroundColor } : {}}
          >
            <FocusScope contain restoreFocus autoFocus>
              <ModalDialog
                ref={ref}
                {...overlayProps}
                {...modalProps}
                {...dialogProps}
                style={transitionEnabled ? { transform } : {}}
                size={size}
                bottomSheet={bottomSheet}
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
  )
}

const ModalContext = React.createContext<{
  titleProps: React.HTMLAttributes<HTMLElement>
  title: string
}>({
  titleProps: {},
  title: '',
})

const ModalBackground = animated(styled.div`
  /* TODO */
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  ${theme((o) => [o.bg.surface4])}
`)

const ModalDialog = animated(styled.div<{
  size: 'S' | 'M' | 'L'
  bottomSheet: boolean | 'full'
}>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${(p) =>
    p.size === 'S'
      ? columnSystem(3, COLUMN_UNIT, GUTTER_UNIT) + GUTTER_UNIT * 2
      : p.size === 'M'
      ? columnSystem(4, COLUMN_UNIT, GUTTER_UNIT) + GUTTER_UNIT * 2
      : // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      p.size === 'L'
      ? columnSystem(6, COLUMN_UNIT, GUTTER_UNIT) + GUTTER_UNIT * 2
      : unreachable()}px;

  ${theme((o) => [o.bg.background1, o.borderRadius(24)])}

  @media ${({ theme }) => maxWidth(theme.breakpoint.screen1)} {
    ${(p) =>
      p.bottomSheet === 'full'
        ? css`
            top: auto;
            bottom: 0;
            left: 0;
            transform: none;
            border-radius: 0;
            width: 100%;
            height: 100%;
          `
        : p.bottomSheet
        ? css`
            top: auto;
            bottom: 0;
            left: 0;
            transform: none;
            border-radius: 0;
            width: 100%;
          `
        : css`
            width: calc(100% - 48px);
          `}
  }
`)

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
