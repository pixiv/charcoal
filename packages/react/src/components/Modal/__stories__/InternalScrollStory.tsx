import { Story } from '../../../_lib/compat'
import Modal, { BottomSheet, ModalProps } from '..'
import { OverlayProvider } from '@react-aria/overlays'
import { useOverlayTriggerState } from 'react-stately'
import Button from '../../Button'
import { ModalBody, ModalButtons, ModalHeader } from '../ModalPlumbing'
import styled, { css } from 'styled-components'
import { maxWidth } from '@charcoal-ui/utils'

export const InternalScrollStory: Story<ModalProps> = (
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
          <TopBorderButtons>
            <Button fullWidth onClick={() => state.close()}>
              Close
            </Button>
          </TopBorderButtons>
        </ModalBody>
      </Modal>
    </OverlayProvider>
  )
}

// underlay padding-top: 40px (desktop)
// underlay padding-bottom: 40px (desktop)
// modal header: 64px (desktop)
// modal header: 48px (mobile-bottom-sheet)
// modal padding-bottom: 40px
// button and space: 56px
const MAX_HEIGHT_OFFSET = 64 + 40 + 40 + 40
const MAX_HEIGHT_OFFSET_MOBILE = MAX_HEIGHT_OFFSET - 40 * 2 - 16
const ModalBodyOverflowDiv = styled.div<{
  $offset: number
  $bottomSheet?: BottomSheet
}>`
  overflow: auto;
  max-height: calc(
    100vh - ${MAX_HEIGHT_OFFSET}px - ${({ $offset }) => $offset}px
  );
  ${({ $bottomSheet, $offset }) =>
    ($bottomSheet === true || $bottomSheet === 'full') &&
    css`
      @media ${({ theme }) => maxWidth(theme.breakpoint.screen1)} {
        max-height: calc(100vh - ${MAX_HEIGHT_OFFSET_MOBILE}px - ${$offset}px);
      }
    `}
`

const TopBorderButtons = styled(ModalButtons)`
  position: relative;
  &::before {
    content: '';
    pointer-events: none;
    border-top: 1px solid ${({ theme }) => theme.border.default.color};
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`
