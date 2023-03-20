import styled from 'styled-components'

export const Divider = styled.div.attrs({ role: 'separator' })`
  display: flex;

  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background: #00000014;
  }
`
