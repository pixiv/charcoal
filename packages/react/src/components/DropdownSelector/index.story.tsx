import { useState } from 'react'
import DropdownSelector from '.'
import { Divider } from './Divider'
import MenuItemGroup from './MenuItemGroup'
import DropdownMenuItem from './DropdownMenuItem'
import Modal from '../Modal'
import { ModalBody, ModalHeader } from '../Modal/ModalPlumbing'
import { Meta, StoryObj } from '@storybook/react-webpack5'
import TextField from '../TextField'
import TextArea from '../TextArea'
import Button from '../Button'

export default {
  title: 'react/DropdownSelector',
  component: DropdownSelector,
} as Meta<typeof DropdownSelector>

export const Default: StoryObj<typeof DropdownSelector> = {
  render: function Render(args) {
    const [selected, setSelected] = useState('')

    return (
      <div style={{ width: 288 }}>
        <DropdownSelector
          {...args}
          onChange={setSelected}
          value={args.value ? args.value : selected}
        >
          <DropdownMenuItem value="1">Option 1</DropdownMenuItem>
          <DropdownMenuItem value="2">Option 2</DropdownMenuItem>
          <DropdownMenuItem value="3">Option 3</DropdownMenuItem>
        </DropdownSelector>
      </div>
    )
  },
}

export const Label: StoryObj<typeof DropdownSelector> = {
  render: function Render() {
    const [selected, setSelected] = useState('1')
    return (
      <div style={{ width: 288 }}>
        <DropdownSelector
          value={selected}
          onChange={setSelected}
          label="Label"
          showLabel
        >
          <DropdownMenuItem value="1">Option 1</DropdownMenuItem>
          <DropdownMenuItem value="2">Option 2</DropdownMenuItem>
          <DropdownMenuItem value="3">Option 3</DropdownMenuItem>
        </DropdownSelector>
      </div>
    )
  },
}

export const Disabled: StoryObj<typeof DropdownSelector> = {
  render: function Render() {
    const [selected, setSelected] = useState('1')
    return (
      <div style={{ width: 288 }}>
        <DropdownSelector
          value={selected}
          disabled
          onChange={setSelected}
          label="Label"
        >
          <DropdownMenuItem value="1">Option 1</DropdownMenuItem>
          <DropdownMenuItem value="2">Option 2</DropdownMenuItem>
          <DropdownMenuItem value="3">Option 3</DropdownMenuItem>
        </DropdownSelector>
      </div>
    )
  },
}

export const DisabledItem: StoryObj<typeof DropdownSelector> = {
  render: function Render() {
    const [selected, setSelected] = useState('2')
    return (
      <div style={{ width: 288 }}>
        <DropdownSelector value={selected} onChange={setSelected} label="Label">
          <DropdownMenuItem value="1">Option 1</DropdownMenuItem>
          <DropdownMenuItem value="2" disabled>
            Option 2 (disabled)
          </DropdownMenuItem>
          <DropdownMenuItem value="3">Option 3</DropdownMenuItem>
          <DropdownMenuItem value="4">Option 4</DropdownMenuItem>
          <DropdownMenuItem value="5">Option 5</DropdownMenuItem>
        </DropdownSelector>
      </div>
    )
  },
}

export const Invalid: StoryObj<typeof DropdownSelector> = {
  render: function Render() {
    const [selected, setSelected] = useState('1')
    return (
      <div style={{ width: 288 }}>
        <DropdownSelector
          value={selected}
          invalid
          onChange={setSelected}
          label="Label"
        >
          <DropdownMenuItem value="1">Option 1</DropdownMenuItem>
          <DropdownMenuItem value="2">Option 2</DropdownMenuItem>
          <DropdownMenuItem value="3">Option 3</DropdownMenuItem>
        </DropdownSelector>
      </div>
    )
  },
}

export const AssistiveText: StoryObj<typeof DropdownSelector> = {
  render: function Render() {
    const [selected, setSelected] = useState('1')
    return (
      <div style={{ width: 288 }}>
        <DropdownSelector
          value={selected}
          onChange={setSelected}
          label="Label"
          assistiveText="assistiveText"
        >
          <DropdownMenuItem value="1">Option 1</DropdownMenuItem>
          <DropdownMenuItem value="2">Option 2</DropdownMenuItem>
          <DropdownMenuItem value="3">Option 3</DropdownMenuItem>
        </DropdownSelector>
      </div>
    )
  },
}

export const InvalidAssistiveText: StoryObj<typeof DropdownSelector> = {
  render: function Render() {
    const [selected, setSelected] = useState('1')
    return (
      <div style={{ width: 288 }}>
        <DropdownSelector
          value={selected}
          onChange={setSelected}
          label="Label"
          invalid
          assistiveText="assistiveText"
        >
          <DropdownMenuItem value="1">Option 1</DropdownMenuItem>
          <DropdownMenuItem value="2">Option 2</DropdownMenuItem>
          <DropdownMenuItem value="3">Option 3</DropdownMenuItem>
        </DropdownSelector>
      </div>
    )
  },
}

export const RequiredText: StoryObj<typeof DropdownSelector> = {
  render: function Render() {
    const [selected, setSelected] = useState('1')
    return (
      <div style={{ width: 288 }}>
        <DropdownSelector
          value={selected}
          onChange={setSelected}
          label="Label"
          showLabel
          required
          requiredText="required"
        >
          <DropdownMenuItem value="1">Option 1</DropdownMenuItem>
          <DropdownMenuItem value="2">Option 2</DropdownMenuItem>
          <DropdownMenuItem value="3">Option 3</DropdownMenuItem>
        </DropdownSelector>
      </div>
    )
  },
}

export const SubLabel: StoryObj<typeof DropdownSelector> = {
  render: function Render() {
    const [selected, setSelected] = useState('1')
    return (
      <div style={{ width: 288 }}>
        <DropdownSelector
          value={selected}
          onChange={setSelected}
          label="Label"
          showLabel
          subLabel="SubLabel"
        >
          <DropdownMenuItem value="1">Option 1</DropdownMenuItem>
          <DropdownMenuItem value="2">Option 2</DropdownMenuItem>
          <DropdownMenuItem value="3">Option 3</DropdownMenuItem>
        </DropdownSelector>
      </div>
    )
  },
}

export const LongNames: StoryObj<typeof DropdownSelector> = {
  render: function Render(args) {
    const [selected, setSelected] = useState('1')
    return (
      <div
        style={{
          width: 288,
        }}
      >
        <DropdownSelector
          {...args}
          onChange={(value) => {
            setSelected(value)
          }}
          value={selected}
          label="label"
        >
          <DropdownMenuItem value={'1'}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          </DropdownMenuItem>
          <DropdownMenuItem value={'2'}>
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </DropdownMenuItem>
          <DropdownMenuItem value={'3'}>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </DropdownMenuItem>
        </DropdownSelector>
      </div>
    )
  },
}

export const InModal: StoryObj<typeof DropdownSelector> = {
  render: function Render() {
    const [open, setOpen] = useState(false)
    const [selected1, setSelected1] = useState('1')
    const [selected2, setSelected2] = useState('2')
    return (
      <div
        style={{
          height: '10px',
        }}
      >
        <button onClick={() => setOpen(true)}>open</button>
        <Modal
          bottomSheet="full"
          title="modal"
          isOpen={open}
          isDismissable
          onClose={() => {
            setOpen(false)
          }}
        >
          <ModalHeader />
          <ModalBody>
            <div
              style={{
                padding: 16,
                display: 'grid',
                gap: 40,
              }}
            >
              <DropdownSelector
                value={selected1}
                onChange={setSelected1}
                label="DropdownSelector1"
                showLabel
                required
                requiredText="required"
                placeholder="placeholder"
                assistiveText="assistiveText"
              >
                <DropdownMenuItem value="1">Option 1</DropdownMenuItem>
                <DropdownMenuItem value="2">Option 2</DropdownMenuItem>
                <DropdownMenuItem value="3">Option 3</DropdownMenuItem>
              </DropdownSelector>

              <TextField
                label="TextField"
                showLabel
                required
                requiredText="required"
                placeholder="placeholder"
                assistiveText="assistiveText"
              />
              <TextArea
                label="TextArea"
                showLabel
                required
                requiredText="required"
                placeholder="placeholder"
                assistiveText="assistiveText"
              />

              <DropdownSelector
                value={selected2}
                onChange={setSelected2}
                label="DropdownSelector2"
                showLabel
                required
                requiredText="required"
                placeholder="placeholder"
                assistiveText="assistiveText"
              >
                <DropdownMenuItem value="1">Option 1</DropdownMenuItem>
                <DropdownMenuItem value="2">Option 2</DropdownMenuItem>
                <DropdownMenuItem value="3">Option 3</DropdownMenuItem>
              </DropdownSelector>
            </div>
          </ModalBody>
        </Modal>
      </div>
    )
  },
}

export const InFormTag: StoryObj<typeof DropdownSelector> = {
  render: function Render(props) {
    const [selected, setSelected] = useState('1')
    return (
      <form
        style={{ width: 288, display: 'flex' }}
        onSubmit={(e) => {
          const target = e.target as HTMLFormElement
          const select = target.elements.namedItem(
            'exampleOption',
          ) as HTMLSelectElement
          alert(`selected value: Option ${select.value}`)
          e.preventDefault()
        }}
      >
        <DropdownSelector
          {...props}
          onChange={(value) => {
            setSelected(value)
          }}
          value={selected}
          label="label"
          name="exampleOption"
        >
          <DropdownMenuItem value="1">Option 1</DropdownMenuItem>
          <DropdownMenuItem value="2">Option 2</DropdownMenuItem>
          <DropdownMenuItem value="3">Option 3</DropdownMenuItem>
        </DropdownSelector>
        <Button
          variant="Primary"
          type="submit"
          style={{
            marginLeft: 16,
          }}
        >
          submit
        </Button>
      </form>
    )
  },
}

export const CustomChildren: StoryObj<typeof DropdownSelector> = {
  render: function Render(props) {
    const [selected, setSelected] = useState('bold')
    return (
      <div style={{ width: 288 }}>
        <DropdownSelector
          {...props}
          onChange={(value) => {
            setSelected(value)
          }}
          value={selected}
          label="label"
        >
          <DropdownMenuItem value={'normal'}>Normal</DropdownMenuItem>
          <DropdownMenuItem value={'bold'}>
            <div
              style={{
                fontWeight: 'bold',
              }}
            >
              Bold
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem value={'italic'}>
            <div
              style={{
                fontStyle: 'italic',
              }}
            >
              Italic
            </div>
          </DropdownMenuItem>
        </DropdownSelector>
      </div>
    )
  },
}

export const Section: StoryObj<typeof DropdownSelector> = {
  render: function Render(props) {
    const [selected, setSelected] = useState('banana')
    return (
      <div style={{ width: 288 }}>
        <DropdownSelector
          {...props}
          onChange={(value) => {
            setSelected(value)
          }}
          value={selected}
          label="label"
        >
          <MenuItemGroup text="fruits">
            <DropdownMenuItem value={'apple'}>Apple</DropdownMenuItem>
            <DropdownMenuItem value={'banana'}>Banana</DropdownMenuItem>
            <DropdownMenuItem value={'orange'}>Orange</DropdownMenuItem>
          </MenuItemGroup>
          <Divider />
          <MenuItemGroup text="vehicle">
            <DropdownMenuItem value={'bicycle'}>bicycle</DropdownMenuItem>
            <DropdownMenuItem value={'car'}>car</DropdownMenuItem>
            <DropdownMenuItem value={'train'}>train</DropdownMenuItem>
          </MenuItemGroup>
        </DropdownSelector>
      </div>
    )
  },
}

export const WithSeconday: StoryObj<typeof DropdownSelector> = {
  render: function Render(props) {
    const [selected, setSelected] = useState('option-3')
    return (
      <div style={{ width: 288 }}>
        <DropdownSelector
          {...props}
          onChange={(value) => {
            setSelected(value)
          }}
          value={selected}
          label="label"
        >
          <MenuItemGroup text="fruits">
            <DropdownMenuItem value={'option-1'}>Option 1</DropdownMenuItem>
            <DropdownMenuItem value={'option-2'}>Option 2</DropdownMenuItem>
            <DropdownMenuItem
              value={'option-3'}
              secondary={<span>Option 3 Secondary</span>}
            >
              Option 3
            </DropdownMenuItem>
          </MenuItemGroup>
        </DropdownSelector>
      </div>
    )
  },
}
