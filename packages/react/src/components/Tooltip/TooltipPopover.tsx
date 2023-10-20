import React, { useRef } from 'react'
import { TooltipTriggerState } from 'react-stately'
import { useTooltip } from '@react-aria/tooltip'
import { Overlay, useOverlayPosition } from '@react-aria/overlays'
import { TextDiv, TooltipDiv } from './TooltipPresenter'
import { ArrowSVG } from './ArrowSVG'

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
  const { overlayProps, arrowProps, placement } = useOverlayPosition({
    overlayRef: ref,
    targetRef: triggerRef,
    containerPadding: 16,
    offset: 4,
    placement: 'top',
  })

  return (
    <Overlay>
      <TooltipDiv
        id={id}
        onPointerEnter={tooltipProps.onPointerEnter}
        onPointerLeave={tooltipProps.onPointerLeave}
        role={tooltipProps.role}
        style={overlayProps.style}
        ref={ref}
      >
        <ArrowSVG
          left={arrowProps.style?.left}
          isBottom={placement === 'bottom'}
        />
        <TextDiv>{content}</TextDiv>
      </TooltipDiv>
    </Overlay>
  )
}
