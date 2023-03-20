import { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { maxWidth } from '@charcoal-ui/utils'
import { theme } from '../utils/theme'

export const ContentRoot: FC<{
  children: ReactNode
}> = ({ children }) => {
  return (
    <RootDiv>
      <ContentDiv>{children}</ContentDiv>
    </RootDiv>
  )
}

const RootDiv = styled.div`
  width: calc(100% - 233px);
  @media ${({ theme }) => maxWidth(theme.breakpoint.screen1)} {
    width: 100%;
  }
`

const ContentDiv = styled.div`
  margin-left: 16px;
  margin-right: 16px;
  padding-bottom: 32px;
  ${theme((o) => o.font.text1)}
`
