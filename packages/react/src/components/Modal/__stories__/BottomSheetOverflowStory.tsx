import { Story } from '../../../_lib/compat'
import Modal, { BottomSheet, ModalProps } from '..'
import { OverlayProvider } from '@react-aria/overlays'
import { useOverlayTriggerState } from 'react-stately'
import Button from '../../Button'
import { ModalBody, ModalButtons, ModalHeader } from '../ModalPlumbing'
import styled, { css } from 'styled-components'
import { maxWidth } from '@charcoal-ui/utils'

export const BottomSheetOverflowStory: Story<ModalProps> = (
  args: ModalProps
) => {
  const state = useOverlayTriggerState({})
  return (
    <OverlayProvider>
      <Button onClick={() => state.open()}>Open Modal</Button>

      <Modal {...args} isOpen={state.isOpen} onClose={() => state.close()}>
        <ModalHeader />
        <ModalBody>
          <ModalBodyOverflowDiv $offset={56} $bottomSheet={args.bottomSheet}>
            <div
              style={{
                height: 1000,
                background: `linear-gradient(#e66465, #9198e5)`,
              }}
            ></div>
          </ModalBodyOverflowDiv>
          <ModalButtons>
            <Button fullWidth onClick={() => state.close()}>
              Close
            </Button>
          </ModalButtons>
        </ModalBody>
      </Modal>
    </OverlayProvider>
  )
}

// underlay padding-top: 24px (desktop)
// underlay padding-bottom: 24px (desktop)
// modal header: 64px
// modal padding-bottom: 40px
// button and space: 56px
const ModalBodyOverflowDiv = styled.div<{
  $offset: number
  $bottomSheet?: BottomSheet
}>`
  overflow: auto;
  max-height: calc(100vh - 152px - ${({ $offset }) => $offset}px);
  ${({ $bottomSheet, $offset }) =>
    ($bottomSheet === true || $bottomSheet === 'full') &&
    css`
      @media ${({ theme }) => maxWidth(theme.breakpoint.screen1)} {
        max-height: calc(100vh - 104px - ${$offset}px);
      }
    `}
`
