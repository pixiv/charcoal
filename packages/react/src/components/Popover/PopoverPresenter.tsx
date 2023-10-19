import styled from 'styled-components'

export const PopoverPresenter = styled.div`
  margin: 0;
  list-style: none;
  overflow: auto;
  max-height: inherit;
  background-color: ${({ theme }) => theme.color.background1};
  border-radius: 8px;

  outline: 1px solid ${({ theme }) => theme.border.default.color};
  outline-offset: -1px;
`
