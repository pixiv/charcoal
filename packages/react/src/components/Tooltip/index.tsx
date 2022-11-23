import React, { FC, memo, PropsWithChildren, useRef } from 'react'
import styled from 'styled-components'
import { theme } from '../../styled'
import { usePopupPosition } from './useTooltipPosition'

export type TooltipProps = PropsWithChildren<{
  content: string
}>

const Tooltip: FC<TooltipProps> = ({ content, children }) => {
  const isServerSide = typeof window === "undefined"

  return (
    <TooltipRoot>
      <div>{children}</div>
      {!isServerSide ? <Popover content={content} /> : null}
    </TooltipRoot>
  )
}

export default memo(Tooltip)

const TooltipRoot = styled.div`
  position: relative;
`

type PopoverProps = {
  content: string
}
const Popover: FC<PopoverProps> = ({ content }) => {
  const ref = useRef<HTMLDivElement>(null)
  const position = usePopupPosition(ref, {
    isTooltip: true,
    relative: true,
    getRect() {
      const initial = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: 0,
        height: 0,
      }

      return ref.current?.getBoundingClientRect() ?? initial
    },
  })

  const { direction, tipLeft, ...style } = position ?? {}
  return (
       <PopoverRoot style={style}>
        <PopoverInnerText ref={ref}>{content}</PopoverInnerText>
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

  &:after {
    content: '';
    position: relative;
  }
`

const PopoverInnerText = styled.span`
  display: block;
  width: 100%;

  ${theme((o) => [o.font.text5, o.typography(12)])}
`
