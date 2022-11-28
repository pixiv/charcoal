import React, { FC, memo, PropsWithChildren, useRef } from 'react'
import styled from 'styled-components'
import { theme } from '../../styled'
import { PopupPositionOptions, usePopupPosition } from './useTooltipPosition'

export type TooltipProps = PopupPositionOptions & {
  content: string
}

const Tooltip: FC<PropsWithChildren<TooltipProps>> = ({
  content,
  children,
  ...options
}) => {
  const isServerSide = typeof window === 'undefined'

  return (
    <TooltipRoot>
      {children}
      {!isServerSide && <Popover content={content} {...options} />}
    </TooltipRoot>
  )
}

export default memo(Tooltip)

const TooltipRoot = styled.div`
  position: relative;
`

const Popover: FC<TooltipProps> = ({ content, ...options }) => {
  const popoverRef = useRef<HTMLDivElement>(null)
  const position = usePopupPosition(popoverRef, options)

  const { direction, tipLeft, ...style } = position ?? {}

  return (
    <PopoverRoot style={style}>
      <PopoverInnerText ref={popoverRef}>{content}</PopoverInnerText>
    </PopoverRoot>
  )
}

const PopoverRoot = styled.div`
  position: absolute;
  width: 184px;
  padding-left: 12px;
  padding-right: 12px;
  max-width: 184px;
  ${theme((o) => [o.bg.surface8, o.padding.vertical(8), o.borderRadius(4)])}
`

const PopoverInnerText = styled.span`
  display: block;
  width: 100%;

  ${theme((o) => [o.font.text5, o.typography(12)])}
`
