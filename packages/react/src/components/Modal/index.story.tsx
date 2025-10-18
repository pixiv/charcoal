import Modal, { ModalDismissButton, ModalProps } from '.'
import { OverlayProvider } from '@react-aria/overlays'
import { useOverlayTriggerState } from 'react-stately'
import Button from '../Button'
import {
  ModalAlign,
  ModalBody,
  ModalButtons,
  ModalHeader,
} from './ModalPlumbing'
import TextField from '../TextField'
import DropdownSelector from '../DropdownSelector'
import Checkbox from '../Checkbox'
import DropdownMenuItem from '../DropdownSelector/DropdownMenuItem'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'react/Modal',
  component: Modal,
  args: {
    title: 'react/Title',
  },
  argTypes: {
    size: {
      options: ['S', 'M', 'L'],
      control: {
        type: 'inline-radio',
      },
      defaultValue: 'M',
    },
    bottomSheet: {
      options: ['full', 'true', 'false'],
      mapping: { full: 'full', true: true, false: false },
      control: {
        type: 'inline-radio',
      },
      defaultValue: false,
    },
  },
  render: function Render(args) {
    const state = useOverlayTriggerState({})
    return (
      // Application must be wrapped in an OverlayProvider so that it can be
      // hidden from screen readers when a modal opens.
      <OverlayProvider>
        <Button onClick={() => state.open()}>Open Modal</Button>
        <M
          {...args}
          isDismissable
          isOpen={state.isOpen}
          onClose={() => state.close()}
        />
      </OverlayProvider>
    )
  },
} as Meta<typeof Modal>

const M = (props: ModalProps) => {
  return (
    <Modal {...props}>
      <ModalHeader />
      <ModalBody>
        <ModalVStack>
          <StyledModalText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            placeat tenetur, necessitatibus laudantium cumque exercitationem
            provident. Quaerat iure enim, eveniet dolores earum odio quo
            possimus fugiat aspernatur, numquam, commodi repellat.
          </StyledModalText>
          <ModalAlign>
            <TextField showLabel label="Name" placeholder="Nagisa" />
          </ModalAlign>
          <ModalAlign>
            <TextField
              autoFocus
              showLabel
              label="Country"
              placeholder="Tokyo"
            />
          </ModalAlign>
          <ModalAlign>
            <DropdownSelector
              onChange={() => null}
              value="10"
              showLabel
              label="Fruits"
              placeholder="Apple"
            >
              <DropdownMenuItem value={'10'}>Apple</DropdownMenuItem>
              <DropdownMenuItem value={'20'}>Banana</DropdownMenuItem>
              <DropdownMenuItem value={'30'}>Orange</DropdownMenuItem>
            </DropdownSelector>
          </ModalAlign>
        </ModalVStack>
        <ModalButtons>
          <Button variant="Primary" onClick={() => props.onClose()} fullWidth>
            Apply
          </Button>
          <Button onClick={() => props.onClose()} fullWidth>
            Cancel
          </Button>
        </ModalButtons>
      </ModalBody>
    </Modal>
  )
}

const ModalVStack = (props: Omit<React.ComponentProps<'div'>, 'style'>) => {
  return (
    <div
      style={{
        display: 'grid',
        gap: 24,
      }}
      {...props}
    />
  )
}

const StyledModalText = (props: Omit<React.ComponentProps<'div'>, 'style'>) => {
  return (
    <div
      style={{
        fontSize: 14,
        lineHeight: '22px',
        padding: '0 16px',
        color: 'var(--charcoal-text2)',
      }}
      {...props}
    />
  )
}

export const Default: StoryObj<typeof Modal> = {}

export const FullBottomSheet: StoryObj<typeof Modal> = {
  args: {
    bottomSheet: 'full',
  },
  render: function Render(args) {
    const state = useOverlayTriggerState({})
    return (
      // Application must be wrapped in an OverlayProvider so that it can be
      // hidden from screen readers when a modal opens.
      <OverlayProvider>
        <Button onClick={() => state.open()}>Open Modal</Button>

        <Modal
          {...args}
          isDismissable
          isOpen={state.isOpen}
          onClose={() => state.close()}
        >
          <ModalHeader />
          <ModalBody>
            <ModalVStack>
              <StyledModalText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                placeat tenetur, necessitatibus laudantium cumque exercitationem
                provident. Quaerat iure enim, eveniet dolores earum odio quo
                possimus fugiat aspernatur, numquam, commodi repellat.
              </StyledModalText>
              <ModalAlign>
                <TextField
                  showLabel
                  label="Name"
                  placeholder="Nagisa"
                />
              </ModalAlign>
              <ModalAlign>
                <TextField
                  showLabel
                  label="Country"
                  placeholder="Tokyo"
                />
              </ModalAlign>
            </ModalVStack>
            <ModalButtons>
              <Button variant="Primary" onClick={() => state.close()} fullWidth>
                Apply
              </Button>
              <Button onClick={() => state.close()} fullWidth>
                Cancel
              </Button>
            </ModalButtons>
          </ModalBody>
        </Modal>
      </OverlayProvider>
    )
  },
}

export const BottomSheet: StoryObj<typeof Modal> = {
  render: function Render(args) {
    const state = useOverlayTriggerState({})
    return (
      // Application must be wrapped in an OverlayProvider so that it can be
      // hidden from screen readers when a modal opens.
      <OverlayProvider>
        <Button onClick={() => state.open()}>Open Modal</Button>

        <Modal
          {...args}
          isOpen={state.isOpen}
          onClose={() => state.close()}
          bottomSheet
          isDismissable
        >
          <ModalHeader />
          <ModalBody>
            <ModalVStack>
              <StyledModalText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                placeat tenetur, necessitatibus laudantium cumque exercitationem
                provident. Quaerat iure enim, eveniet dolores earum odio quo
                possimus fugiat aspernatur, numquam, commodi repellat.
              </StyledModalText>
            </ModalVStack>
            <ModalButtons>
              <Checkbox checked>test checkbox</Checkbox>
              <Button variant="Danger" onClick={() => state.close()} fullWidth>
                削除する
              </Button>
              <ModalDismissButton>キャンセル</ModalDismissButton>
            </ModalButtons>
          </ModalBody>
        </Modal>
      </OverlayProvider>
    )
  },
}

export const NotDismmissableStory: StoryObj<typeof Modal> = {
  render: function Render(args) {
    const state = useOverlayTriggerState({})
    return (
      <OverlayProvider>
        <Button onClick={() => state.open()}>Open Modal</Button>

        <Modal {...args} isOpen={state.isOpen} onClose={() => state.close()}>
          <ModalHeader />
          <ModalBody>
            <ModalVStack>
              <StyledModalText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                placeat tenetur, necessitatibus laudantium cumque exercitationem
                provident. Quaerat iure enim, eveniet dolores earum odio quo
                possimus fugiat aspernatur, numquam, commodi repellat.
              </StyledModalText>
            </ModalVStack>
            <ModalButtons>
              <Button variant="Primary" onClick={() => state.close()} fullWidth>
                OK
              </Button>
            </ModalButtons>
          </ModalBody>
        </Modal>
      </OverlayProvider>
    )
  },
}

export const BackgroundScroll: StoryObj<typeof Modal> = {
  render: function Render(args) {
    const state = useOverlayTriggerState({})
    return (
      <OverlayProvider>
        <div
          style={{
            height: 1024,
          }}
        >
          <Button onClick={() => state.open()}>Open Modal</Button>
        </div>
        <M
          {...args}
          isDismissable
          isOpen={state.isOpen}
          onClose={() => state.close()}
        />
      </OverlayProvider>
    )
  },
}
