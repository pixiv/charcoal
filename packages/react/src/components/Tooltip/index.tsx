import React, {
  FC,
  memo,
  PropsWithChildren,
  useMemo,
  ComponentPropsWithoutRef,
  useRef
} from 'react'
import styled from 'styled-components'
import { theme } from '../../styled'
import { usePopupPosition, PopupPositionOptions } from './useTooltipPosition'
import { useTooltipTriggerState, TooltipTriggerState } from 'react-stately'
import {
  TooltipTriggerProps,
  useTooltip,
  useTooltipTrigger
} from '@react-aria/tooltip'
import { mergeProps, useObjectRef } from '@react-aria/utils'

export type TooltipProps = PopupPositionOptions & {
  content: string
  disabled?: boolean
  open?: boolean
  delay?: number
}

const Tooltip: FC<PropsWithChildren<TooltipProps>> = ({
  content,
  children,
  ...props
}) => {
  const ref = useObjectRef<HTMLDivElement>()
  const tooltipTriggerProps = useMemo<TooltipTriggerProps>(
    () => ({
      isOpen: props.open,
      isDisabled: props.disabled,
      ...props
    }),
    [props]
  )

  const state = useTooltipTriggerState(tooltipTriggerProps)
  const { triggerProps, tooltipProps } = useTooltipTrigger(
    tooltipTriggerProps,
    state,
    ref
  )

  return (
    <TooltipRoot ref={ref} {...triggerProps}>
      {children}
      {state.isOpen && (
        <Popover
          content={content}
          state={state}
          {...mergeProps(props, tooltipProps)}
        />
      )}
    </TooltipRoot>
  )
}

export default memo(Tooltip)

const TooltipRoot = styled.div`
  position: relative;
`

type PopoverProps = {
  state: TooltipTriggerState
  content: string
} & Omit<ComponentPropsWithoutRef<'div'>, 'style' | 'className' | 'children'> &
  PopupPositionOptions

const Popover: FC<PopoverProps> = ({ content, state, ...props }) => {
  const ref = useRef<HTMLDivElement>(null)
  const { tooltipProps } = useTooltip(props, state)
  const position = usePopupPosition(ref, props)
  const { direction, ...style } = position ?? {}

  return (
    <PopoverRoot {...mergeProps(props, tooltipProps)} style={style}>
      <PopoverInner ref={ref}>
        <PopoverInnerText>{content}</PopoverInnerText>
      </PopoverInner>
    </PopoverRoot>
  )
}

const PopoverRoot = styled.div`
  position: absolute;
`

const PopoverInner = styled.div`
  width: 184px;
  padding-left: 12px;
  padding-right: 12px;
  max-width: 184px;
  ${theme((o) => [o.bg.surface8, o.padding.vertical(8), o.borderRadius(4)])}
`

const PopoverInnerText = styled.span`
  display: block;
  width: 100%;
  text-align: center;

  ${theme((o) => [o.font.text5, o.typography(12)])}
`
