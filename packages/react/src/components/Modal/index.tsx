import React, { forwardRef, memo, useContext, useRef } from 'react'
import {
  AriaModalOverlayProps,
  Overlay,
  useModalOverlay,
  useOverlay,
} from '@react-aria/overlays'
import styled, { css, useTheme } from 'styled-components'
import { theme } from '../../styled'
import { FocusScope } from '@react-aria/focus'
import { useDialog } from '@react-aria/dialog'
import { AriaDialogProps } from '@react-types/dialog'
import { columnSystem, COLUMN_UNIT, GUTTER_UNIT } from '@charcoal-ui/foundation'
import { unreachable } from '../../_lib'
import { maxWidth } from '@charcoal-ui/utils'
import { useMedia } from '@charcoal-ui/styled'
import { animated, useTransition, easings } from 'react-spring'
import Button, { ButtonProps } from '../Button'
import IconButton from '../IconButton'
import { useObjectRef } from '@react-aria/utils'

export type ModalProps = AriaModalOverlayProps &
  AriaDialogProps & {
    children: React.ReactNode
    zIndex?: number
    title: string
    size?: 'S' | 'M' | 'L'
    bottomSheet?: boolean | 'full'
    isOpen: boolean
    onClose: () => void
    className?: string

    /**
     * https://github.com/adobe/react-spectrum/issues/3787
     * Next.jsで使用する際に発生するエラーの一時的な回避策でdocument.bodyを指定する必要がある
     */
    portalContainer?: HTMLElement
  }

const DEFAULT_Z_INDEX = 10

/**
 * モーダルコンポーネント。
 *
 * @example アプリケーションルートで `<OverlayProvider>` ないし `<CharcoalProvider>` で囲った上で利用する
 * ```tsx
 * import {
 *   OverlayProvider,
 *   Modal,
 *   ModalHeader,
 *   ModalBody,
 *   ModalButtons
 * } from '@charcoal-ui/react'
 *
 * <OverlayProvider>
 *   <App>
 *     <Modal isOpen={state.isOpen} onClose={() => state.close()} isDismissable>
 *       <ModalHeader />
 *       <ModalBody>...</ModalBody>
 *       <ModalButtons>...</ModalButtons>
 *     </Modal>
 *   </App>
 * </OverlayProvider>
 * ```
 */
const Modal = forwardRef<HTMLDivElement, ModalProps>(function ModalInner(
  { children, zIndex = DEFAULT_Z_INDEX, portalContainer, ...props },
  external
) {
  const {
    title,
    size = 'M',
    bottomSheet = false,
    isDismissable,
    onClose,
    className,
    isOpen = false,
  } = props

  const ref = useObjectRef<HTMLDivElement>(external)
  const { overlayProps, underlayProps } = useOverlay(props, ref)

  const { modalProps } = useModalOverlay(
    props,
    {
      close: onClose,
      isOpen: isOpen,
      // these props are not used actually.
      // https://github.com/adobe/react-spectrum/blob/df14e3fb129b94b310f0397a701b83f006b51dfe/packages/%40react-aria/overlays/src/useModalOverlay.ts
      open: () => {
        // nope
      },
      setOpen: () => {
        // nope
      },
      toggle: () => {
        // nope
      },
    },
    ref
  )

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
  const showDismiss = !isMobile || bottomSheet !== true

  return transition(
    ({ backgroundColor, transform }, item) =>
      item && (
        <Overlay portalContainer={portalContainer}>
          <ModalBackground
            zIndex={zIndex}
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
                className={className}
              >
                <ModalContext.Provider
                  value={{ titleProps, title, close: onClose, showDismiss }}
                >
                  {children}
                  {isDismissable === true && (
                    <ModalCrossButton
                      size="S"
                      icon="24/Close"
                      onClick={onClose}
                    />
                  )}
                </ModalContext.Provider>
              </ModalDialog>
            </FocusScope>
          </ModalBackground>
        </Overlay>
      )
  )
})

export default memo(Modal)

const ModalContext = React.createContext<{
  titleProps: React.HTMLAttributes<HTMLElement>
  title: string
  close?: () => void
  showDismiss: boolean
}>({
  titleProps: {},
  title: '',
  close: undefined,
  showDismiss: true,
})

const ModalBackground = animated(styled.div<{ zIndex: number }>`
  z-index: ${({ zIndex }) => zIndex};
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
      : unreachable(p.size)}px;

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

const ModalCrossButton = styled(IconButton)`
  position: absolute;
  top: 8px;
  right: 8px;

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

export function ModalDismissButton({ children, ...props }: ButtonProps) {
  const { close, showDismiss } = useContext(ModalContext)

  if (!showDismiss) {
    return null
  }

  return (
    <Button {...props} onClick={close} fixed>
      {children}
    </Button>
  )
}
