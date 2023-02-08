import { DismissButton, Overlay, usePopover } from '@react-aria/overlays'
import React, {
  FC,
  useRef,
  useMemo,
  PropsWithChildren,
  memo,
  RefObject,
} from 'react'
import type { OverlayTriggerState } from 'react-stately'

type Props = PropsWithChildren<{
  className?: string
  triggerRef: RefObject<Element>
  state: OverlayTriggerState
}>

const Popover: FC<Props> = ({ children, state, triggerRef, className }) => {
  const ref = useRef<HTMLDivElement>(null)

  const { popoverProps, underlayProps } = usePopover(
    useMemo(() => ({ triggerRef, popoverRef: ref }), [triggerRef]),
    state
  )

  return (
    <Overlay>
      <div {...underlayProps} style={{ position: 'fixed', inset: 0 }} />
      <div {...popoverProps} ref={ref} className={className}>
        <DismissButton onDismiss={() => state.close()} />
        {children}
        <DismissButton onDismiss={() => state.close()} />
      </div>
    </Overlay>
  )
}

export default memo(Popover)
