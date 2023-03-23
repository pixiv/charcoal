import styled from 'styled-components'
import { maxWidth } from '@charcoal-ui/utils'

export const ShowScreen1 = styled.div`
  @media ${({ theme }) => maxWidth(theme.breakpoint.screen1)} {
    display: none;
  }
`
