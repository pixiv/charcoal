import React, {
  FC,
  memo,
  PropsWithChildren,
  useMemo,
  ComponentPropsWithoutRef,
  useRef,
  RefObject,
  useCallback,
  forwardRef
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

export type TooltipProps = Omit<PopupPositionOptions, 'getRect'> & {
  content: string
  disabled?: boolean
  open?: boolean
  delay?: number
  triggerRef: RefObject<HTMLElement>
  className?: string
}

const Tooltip = forwardRef<HTMLDivElement, PropsWithChildren<TooltipProps>>(
  function TooltipInner(
    { content, children, triggerRef, className, ...props },
    forward
  ) {
    const ref = useObjectRef<HTMLDivElement>(forward)
    const tooltipTriggerProps = useMemo<TooltipTriggerProps>(
      () => ({
        isOpen: props.open,
        isDisabled: props.disabled,
        delay: props.delay ?? 0,
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
    const getRect = useCallback(() => {
      return (
        triggerRef.current?.getBoundingClientRect() ?? {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          width: 0,
          height: 0
        }
      )
    }, [triggerRef])

    return (
      <TooltipRoot ref={ref} {...triggerProps} className={className}>
        {children}
        {state.isOpen && (
          <Popover
            content={content}
            state={state}
            getRect={getRect}
            {...mergeProps(props, tooltipProps)}
          />
        )}
      </TooltipRoot>
    )
  }
)

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
