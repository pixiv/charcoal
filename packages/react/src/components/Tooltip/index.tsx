import { useIsSSR } from '@react-aria/ssr'
import React, { FC, memo, PropsWithChildren, useRef } from 'react'
import styled from 'styled-components'
import { theme } from '../../styled'
import { PopupPositionOptions, usePopupPosition } from './useTooltipPosition'

export type TooltipProps = PopupPositionOptions & {
  content: string
  open?: boolean
}

const Tooltip: FC<PropsWithChildren<TooltipProps>> = ({
  content,
  children,
  open,
  ...options
}) => {
  const isSSR = useIsSSR()

  return (
    <TooltipRoot>
      {children}
      {!isSSR && open && <Popover content={content} {...options} />}
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
  const { direction, ...style } = position ?? {}

  return (
    <PopoverRoot style={style} role="tooltip">
      <PopoverInner ref={popoverRef}>
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
