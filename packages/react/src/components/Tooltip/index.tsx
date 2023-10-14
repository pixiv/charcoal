import React, { memo, useMemo, RefObject } from 'react'
import { useTooltipTriggerState } from 'react-stately'
import { TooltipTriggerProps, useTooltipTrigger } from '@react-aria/tooltip'
import { TooltipPopover } from './TooltipPopover'
import styled from 'styled-components'

export type TooltipProps = {
  content: string
  disabled?: boolean
  open?: boolean
  delay?: number
  triggerRef: RefObject<HTMLElement>
  className?: string
  children?: React.ReactNode
}

function Tooltip({
  open,
  disabled,
  content,
  children,
  triggerRef,
  className,
}: TooltipProps) {
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

  return (
    <TooltipWrapper {...triggerProps} ref={ref} className={className}>
      {children}
      {state.isOpen && (
        <TooltipPopover
          content={content}
          state={state}
          triggerRef={triggerRef}
          id={tooltipProps.id}
        />
      )}
    </TooltipWrapper>
  )
}

const TooltipWrapper = styled.div`
  display: flex;
  width: fit-content;
`

export default memo(Tooltip)
