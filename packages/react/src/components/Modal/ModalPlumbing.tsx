import React from 'react'
import { ModalTitle } from '.'
import styled from 'styled-components'
import { theme } from '../../styled'

export function ModalHeader() {
  return (
    <ModalHeaderRoot>
      <StyledModalTitle />
    </ModalHeaderRoot>
  )
}

const ModalHeaderRoot = styled.div`
  height: 64px;
  display: grid;
  align-content: center;
  justify-content: center;
`

const StyledModalTitle = styled(ModalTitle)`
  ${theme((o) => [o.font.text1, o.typography(16).bold])}
`

export const ModalAlign = styled.div`
  ${theme((o) => [o.padding.horizontal(24)])}
`

export const ModalBody = styled.div`
  ${theme((o) => [o.padding.bottom(40)])}
`

export const ModalButtons = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-row-gap: 8px;
  padding: 16px 24px 0;
`
