import React, { memo, useMemo, RefObject } from 'react'
import { useTooltipTriggerState } from 'react-stately'
import { TooltipTriggerProps, useTooltipTrigger } from '@react-aria/tooltip'
import { TooltipPopover } from './TooltipPopover'

export type TooltipProps = {
  content: string
  disabled?: boolean
  open?: boolean
  delay?: number
  triggerRef: RefObject<HTMLElement>
  className?: string
  children: React.ReactElement
}

function Tooltip({ open, disabled, content, children }: TooltipProps) {
  const ref = React.useRef(null)

  const tooltipTriggerProps = useMemo<TooltipTriggerProps>(
    () => ({
      isOpen: open,
      isDisabled: disabled,
      delay: 0,
      closeDelay: 0,
    }),
    [disabled, open]
  )

  const state = useTooltipTriggerState(tooltipTriggerProps)

  const { triggerProps, tooltipProps } = useTooltipTrigger(
    tooltipTriggerProps,
    state,
    ref
  )

  const child = React.cloneElement(children, {
    onPointerEnter: triggerProps.onPointerEnter,
    onPointerLeave: triggerProps.onPointerLeave,
    'aria-describedby': triggerProps['aria-describedby'],
    ref,
  })

  return (
    <>
      {child}
      {state.isOpen && (
        <TooltipPopover
          content={content}
          state={state}
          triggerRef={ref}
          id={tooltipProps.id}
        />
      )}
    </>
  )
}

export default memo(Tooltip)
