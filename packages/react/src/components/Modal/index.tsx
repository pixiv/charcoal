import { useContext, forwardRef, memo } from 'react'
import * as React from 'react'
import { AriaModalOverlayProps, Overlay } from '@react-aria/overlays'
import type { AriaDialogProps } from '@react-types/dialog'
import { animated, useTransition, easings } from 'react-spring'
import Button, { ButtonProps } from '../Button'
import IconButton, { IconButtonProps } from '../IconButton'
import { useObjectRef } from '@react-aria/utils'
import { Dialog } from './Dialog'
import { ModalBackgroundContext } from './ModalBackgroundContext'
import {
  useCharcoalModalOverlay,
  useWindowWidth,
} from './useCustomModalOverlay'

import './index.css'

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
    closeButtonAriaLabel?: string

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
    closeButtonAriaLabel = 'Close',
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

  const isMobile = useWindowWidth() < 744
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

  const bgRef = React.useRef<HTMLDivElement>(null)

  const handleClick = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
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
          {/* https://github.com/pmndrs/react-spring/issues/1515 */}
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-ignore */}
          <animated.div
            className="charcoal-modal-background"
            ref={bgRef}
            {...underlayProps}
            style={
              transitionEnabled
                ? { backgroundColor, overflow, zIndex }
                : { zIndex }
            }
            data-bottom-sheet={bottomSheet}
            onClick={handleClick}
          >
            <ModalBackgroundContext.Provider value={bgRef.current}>
              {/* https://github.com/pmndrs/react-spring/issues/1515 */}
              {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
              {/* @ts-ignore */}
              <AnimatedDialog
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
                    <ModalCloseButton
                      aria-label={closeButtonAriaLabel}
                      onClick={onClose}
                    />
                  )}
                </ModalContext.Provider>
              </AnimatedDialog>
            </ModalBackgroundContext.Provider>
          </animated.div>
        </Overlay>
      )
  )
})

const AnimatedDialog = animated(Dialog)

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

export function ModalCloseButton(props: Omit<IconButtonProps, 'icon'>) {
  return (
    <IconButton
      className="charcoal-modal-close-button"
      size="S"
      icon="24/Close"
      type="button"
      {...props}
    />
  )
}

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
