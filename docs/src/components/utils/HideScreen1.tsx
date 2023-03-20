import styled from 'styled-components'
import { maxWidth } from '@charcoal-ui/utils'

export const HideScreen1 = styled.div`
  display: none;
  @media ${({ theme }) => maxWidth(theme.breakpoint.screen1)} {
    display: inherit;
  }
`
