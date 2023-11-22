import { BottomSheet, ModalContext, ModalTitle } from '.'
import styled, { css } from 'styled-components'
import { theme } from '../../styled'
import { useContext } from 'react'
import { maxWidth } from '@charcoal-ui/utils'

export function ModalHeader() {
  const modalCtx = useContext(ModalContext)
  return (
    <ModalHeaderRoot $bottomSheet={modalCtx.bottomSheet}>
      <StyledModalTitle />
    </ModalHeaderRoot>
  )
}

const ModalHeaderRoot = styled.div<{
  $bottomSheet: BottomSheet
}>`
  height: 64px;
  display: grid;
  align-content: center;
  justify-content: center;
  @media ${({ theme }) => maxWidth(theme.breakpoint.screen1)} {
    ${(p) =>
      p.$bottomSheet !== false &&
      css`
        height: 48px;
      `}
  }
`

const StyledModalTitle = styled(ModalTitle)`
  ${theme((o) => [o.font.text1, o.typography(16).bold])}
`

export const ModalAlign = styled.div`
  ${theme((o) => [o.padding.horizontal(16)])}
`

export const ModalBody = styled.div`
  ${theme((o) => [o.padding.bottom(40)])}
`

export const ModalButtons = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-row-gap: 8px;

  ${theme((o) => [o.padding.horizontal(16).top(16)])}
`
