import styled, { css } from 'styled-components'

export const dummyText = css`
  color: ${({ theme }) => theme.color.text4};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
`

export const Dummy = styled.div`
  background-color: ${({ theme }) => theme.color.surface2};
  border-radius: 8px;

  ${dummyText}
`
