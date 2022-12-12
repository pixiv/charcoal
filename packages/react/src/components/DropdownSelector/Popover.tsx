import { FocusScope } from '@react-aria/focus'
import { DismissButton, useOverlay } from '@react-aria/overlays'
import React, {
  FC,
  useRef,
  useMemo,
  PropsWithChildren,
  memo,
  CSSProperties,
} from 'react'
import { mergeProps } from '@react-aria/utils'

type Props = PropsWithChildren<{
  open?: boolean
  onClose?: () => void
  style?: CSSProperties
  className?: string
}>

const Popover: FC<Props> = ({ open, onClose, children, ...props }) => {
  const ref = useRef<HTMLDivElement>(null)

  const { overlayProps } = useOverlay(
    useMemo(
      () => ({
        isOpen: open,
        onClose,
        shouldCloseOnBlur: true,
        isDismissable: true,
      }),
      [onClose, open]
    ),
    ref
  )

  return (
    <FocusScope restoreFocus>
      <div {...mergeProps(overlayProps, props)} ref={ref}>
        {children}
        <DismissButton onDismiss={onClose} />
      </div>
    </FocusScope>
  )
}

export default memo(Popover)
