import { BottomSheet, ModalContext, ModalTitle } from '.'
import styled, { css } from 'styled-components'
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
  @media ${maxWidth(744)} {
    ${(p) =>
      p.$bottomSheet !== false &&
      css`
        height: 48px;
      `}
  }
`

const StyledModalTitle = styled(ModalTitle)`
  color: var(--charcoal-text1);
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
  display: flow-root;

  &::before {
    display: block;
    width: 0;
    height: 0;
    content: '';
    margin-top: -4px;
  }
  &::after {
    display: block;
    width: 0;
    height: 0;
    content: '';
    margin-bottom: -4px;
  }
`

export const ModalAlign = styled.div`
  padding-left: 16px;
  padding-right: 16px;
`

export const ModalBody = styled.div`
  padding-bottom: 40px;
`

export const ModalButtons = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-row-gap: 8px;

  padding-top: 16px;
  padding-left: 16px;
  padding-right: 16px;
`
