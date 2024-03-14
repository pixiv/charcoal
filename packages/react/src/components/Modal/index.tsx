import { useContext, forwardRef, memo } from 'react'
import * as React from 'react'
import { AriaModalOverlayProps, Overlay } from '@react-aria/overlays'
import styled, { css, useTheme } from 'styled-components'
import { AriaDialogProps } from '@react-types/dialog'
import { maxWidth } from '@charcoal-ui/utils'
import { useMedia } from '@charcoal-ui/styled'
import { animated, useTransition, easings } from 'react-spring'
import Button, { ButtonProps } from '../Button'
import IconButton from '../IconButton'
import { useObjectRef } from '@react-aria/utils'
import { Dialog } from './Dialog'
import { ModalBackgroundContext } from './ModalBackgroundContext'
import { useCharcoalModalOverlay } from './useCustomModalOverlay'

export type BottomSheet = boolean | 'full'
export type Size = 'S' | 'M' | 'L'

export type ModalProps = AriaModalOverlayProps &
  AriaDialogProps & {
    children: React.ReactNode
    zIndex?: number
    title: string
    size?: Size
    bottomSheet?: BottomSheet
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
 *     <Modal title="Title" isOpen={state.isOpen} onClose={() => state.close()} isDismissable>
 *       <ModalHeader />
 *       <ModalBody>
 *         ...
 *         <ModalButtons>...</ModalButtons>
 *       </ModalBody>
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

  const { modalProps, underlayProps } = useCharcoalModalOverlay(
    {
      ...props,
      isKeyboardDismissDisabled:
        isDismissable === undefined || isDismissable === false,
    },
    {
      onClose,
      isOpen,
    },
    ref
  )

  const theme = useTheme()
  const isMobile = useMedia(maxWidth(theme.breakpoint.screen1)) ?? false
  const transitionEnabled = isMobile && bottomSheet !== false
  const showDismiss = !isMobile || bottomSheet !== true

  const transition = useTransition(isOpen, {
    from: {
      transform: 'translateY(100%)',
      backgroundColor: 'rgba(0, 0, 0, 0)',
      overflow: 'hidden',
    },
    enter: {
      transform: 'translateY(0%)',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    update: {
      overflow: 'auto',
    },
    leave: {
      transform: 'translateY(100%)',
      backgroundColor: 'rgba(0, 0, 0, 0)',
      overflow: 'hidden',
    },
    config: transitionEnabled
      ? { duration: 400, easing: easings.easeOutQuart }
      : { duration: 0 },
  })

  const bgRef = React.useRef<HTMLElement>(null)

  const handleClick = React.useCallback(
    (e: MouseEvent) => {
      if (e.currentTarget === e.target) {
        onClose()
      }
    },
    [onClose]
  )

  return transition(
    ({ backgroundColor, overflow, transform }, item) =>
      item && (
        <Overlay portalContainer={portalContainer}>
          <ModalBackground
            ref={bgRef}
            zIndex={zIndex}
            {...underlayProps}
            style={transitionEnabled ? { backgroundColor, overflow } : {}}
            $bottomSheet={bottomSheet}
            onClick={handleClick}
          >
            <ModalBackgroundContext.Provider value={bgRef.current}>
              <Dialog
                ref={ref}
                {...modalProps}
                style={transitionEnabled ? { transform } : {}}
                size={size}
                bottomSheet={bottomSheet}
                className={className}
              >
                <ModalContext.Provider
                  value={{
                    titleProps: {},
                    title,
                    close: onClose,
                    showDismiss,
                    bottomSheet,
                  }}
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
              </Dialog>
            </ModalBackgroundContext.Provider>
          </ModalBackground>
        </Overlay>
      )
  )
})

export default memo(Modal)

export const ModalContext = React.createContext<{
  /**
   * @deprecated
   */
  titleProps: React.HTMLAttributes<HTMLElement>
  title: string
  close?: () => void
  showDismiss: boolean
  bottomSheet: BottomSheet
}>({
  titleProps: {},
  title: '',
  close: undefined,
  showDismiss: true,
  bottomSheet: false,
})

const ModalBackground = animated(styled.div<{
  zIndex: number
  $bottomSheet: BottomSheet
}>`
  z-index: ${({ zIndex }) => zIndex};
  overflow: auto;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: -webkit-fill-available;
  width: -moz-available;
  height: 100%;
  justify-content: center;
  padding: 40px 0;
  box-sizing: border-box;

  background-color: var(--charcoal-surface4);

  @media ${({ theme }) => maxWidth(theme.breakpoint.screen1)} {
    ${(p) =>
      p.$bottomSheet !== false &&
      css`
        padding: 0;
      `}
  }
`)

const ModalCrossButton = styled(IconButton)`
  position: absolute;
  top: 8px;
  right: 8px;

  color: var(--charcoal-text3);
  transition: 0.2s color;

  &:not(:disabled):not([aria-disabled]),
  &[aria-disabled='false'] {
    &:hover {
      color: var(--charcoal-text3-hover);
    }
    &:active {
      color: var(--charcoal-text3-press);
    }
  }
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
    <Button {...props} onClick={close} fullWidth>
      {children}
    </Button>
  )
}
