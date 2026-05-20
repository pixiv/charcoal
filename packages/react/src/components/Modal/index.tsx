import {
  useContext,
  forwardRef,
  memo,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react'
import * as React from 'react'
import type { AriaDialogProps } from 'react-aria/useDialog'
import Button, { ButtonProps } from '../Button'
import IconButton, { IconButtonProps } from '../IconButton'
import { Dialog } from './Dialog'
import { ModalBackgroundContext } from './ModalBackgroundContext'
import {
  CharcoalModalOverlayProps,
  useCharcoalModalOverlay,
  useWindowWidth,
} from './useCustomModalOverlay'

import './index.css'

import { Overlay } from 'react-aria/Overlay'
import { useObjectRef } from 'react-aria/useObjectRef'

export type BottomSheet = boolean | 'full'
export type Size = 'S' | 'M' | 'L'

export type ModalProps = CharcoalModalOverlayProps &
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
type AnimationState = 'entering' | 'entered' | 'exiting' | 'exited'

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
  external,
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
    ref,
  )

  const isMobile = (useWindowWidth() ?? Infinity) < 744
  const transitionEnabled = isMobile && bottomSheet !== false
  const showDismiss = !isMobile || bottomSheet !== true

  const [animationState, setAnimationState] = useState<AnimationState>(
    isOpen ? 'entering' : 'exited',
  )
  const isPresent = isOpen || animationState !== 'exited'
  const currentAnimationState =
    isOpen && animationState === 'exited'
      ? transitionEnabled
        ? 'entering'
        : 'entered'
      : animationState

  useEffect(() => {
    if (isOpen) {
      setAnimationState(transitionEnabled ? 'entering' : 'entered')
    } else if (transitionEnabled) {
      setAnimationState('exiting')
    } else {
      setAnimationState('exited')
    }
  }, [isOpen, transitionEnabled])

  const bgRef = useRef<HTMLDivElement>(null)

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (e.currentTarget === e.target) {
        onClose()
      }
    },
    [onClose],
  )

  const handleAnimationEnd = useCallback(
    (e: React.AnimationEvent<HTMLDivElement>) => {
      if (e.currentTarget !== e.target || !transitionEnabled) {
        return
      }

      if (isOpen) {
        setAnimationState('entered')
      } else {
        setAnimationState('exited')
      }
    },
    [isOpen, transitionEnabled],
  )

  if (!isPresent) {
    return null
  }

  return (
    <Overlay portalContainer={portalContainer}>
      <div
        className="charcoal-modal-background"
        ref={bgRef}
        {...underlayProps}
        style={{ zIndex }}
        data-bottom-sheet={bottomSheet}
        data-animation={transitionEnabled ? currentAnimationState : undefined}
        onClick={handleClick}
        onAnimationEnd={handleAnimationEnd}
      >
        <ModalBackgroundContext.Provider value={bgRef.current}>
          <Dialog
            ref={ref}
            {...modalProps}
            size={size}
            bottomSheet={bottomSheet}
            className={className}
            data-animation={
              transitionEnabled ? currentAnimationState : undefined
            }
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
          </Dialog>
        </ModalBackgroundContext.Provider>
      </div>
    </Overlay>
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
