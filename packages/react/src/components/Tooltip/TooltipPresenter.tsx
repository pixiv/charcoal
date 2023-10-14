import { forwardRef } from 'react'
import styled from 'styled-components'

export const TooltipPresenter = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(function TooltipPresenter({ children, ...props }, ref) {
  return (
    <TooltipDiv {...props} ref={ref}>
      <TextDiv>{children}</TextDiv>
    </TooltipDiv>
  )
})

const TooltipDiv = styled.div`
  width: 184px;
  max-width: 184px;
  padding: 4px 12px;
  background-color: ${({ theme }) => theme.color.surface8};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const TextDiv = styled.div`
  width: 100%;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  color: ${({ theme }) => theme.color.text5};
`
