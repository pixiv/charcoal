import React, { useRef } from 'react'
import { TooltipTriggerState } from 'react-stately'
import { useTooltip } from '@react-aria/tooltip'
import { Overlay, useOverlayPosition } from '@react-aria/overlays'
import { TooltipPresenter } from './TooltipPresenter'

type TooltipPopoverProps = {
  id?: string
  state: TooltipTriggerState
  content: string
  triggerRef: React.RefObject<Element>
}

export function TooltipPopover({
  id,
  content,
  state,
  triggerRef,
}: TooltipPopoverProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { tooltipProps } = useTooltip(
    {
      isOpen: state.isOpen,
    },
    state
  )
  const { overlayProps } = useOverlayPosition({
    overlayRef: ref,
    targetRef: triggerRef,
    containerPadding: 16,
    offset: 4,
    placement: 'top',
  })

  return (
    <Overlay>
      <TooltipPresenter
        id={id}
        onPointerEnter={tooltipProps.onPointerEnter}
        onPointerLeave={tooltipProps.onPointerLeave}
        role={tooltipProps.role}
        style={overlayProps.style}
        ref={ref}
      >
        {content}
      </TooltipPresenter>
    </Overlay>
  )
}
