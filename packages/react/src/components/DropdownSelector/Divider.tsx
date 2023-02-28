import styled from 'styled-components'
import { theme } from '../../styled'

export const Divider = styled.div.attrs({ role: 'separator' })`
  display: flex;
  ${theme((o) => [o.padding.horizontal(8)])}

  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background: #00000014;
  }
`
