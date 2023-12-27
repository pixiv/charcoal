import { useState } from 'react'
import DropdownSelector, { DropdownSelectorProps } from '.'
import { Divider } from './Divider'
import MenuItemGroup from './MenuItemGroup'
import DropdownMenuItem from './DropdownMenuItem'
import Modal from '../Modal'
import { ModalBody, ModalHeader } from '../Modal/ModalPlumbing'
import styled from 'styled-components'
import Button from '../Button'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'DropdownSelector',
  component: DropdownSelector,
} as Meta<typeof DropdownSelector>

const baseProps: DropdownSelectorProps = {
  label: 'Label',
  value: '',
  placeholder: 'placeholder',
  onChange: () => {
    //
  },
  children: <DropdownMenuItem value="item" />,
}

export const Playground: StoryObj<typeof DropdownSelector> = {
  args: {
    ...baseProps,
  },
  render: (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selected, setSelected] = useState('50')

    return (
      <div style={{ width: 288 }}>
        <Button></Button>
        <DropdownSelector
          {...props}
          onChange={(value) => {
            setSelected(value)
          }}
          value={selected}
          label="label"
        >
          {[...(Array(100) as undefined[])].map((_, i) => {
            return (
              <DropdownMenuItem key={i} value={i.toString()}>
                {i}
              </DropdownMenuItem>
            )
          })}
        </DropdownSelector>
      </div>
    )
  },
}

function PlaygroundDropdownSelector(props: Partial<DropdownSelectorProps>) {
  const [selected, setSelected] = useState('10')
  return (
    <DropdownSelector
      {...props}
      onChange={(value) => {
        setSelected(value)
      }}
      value={selected}
      label="label"
    >
      <DropdownMenuItem value={'10'}>Apple</DropdownMenuItem>
      <DropdownMenuItem value={'20'}>Banana</DropdownMenuItem>
      <DropdownMenuItem value={'30'}>Orange</DropdownMenuItem>
    </DropdownSelector>
  )
}

export const Basic: StoryObj<typeof DropdownSelector> = {
  args: {
    ...baseProps,
  },
  render: (props) => (
    <div style={{ width: 288 }}>
      <PlaygroundDropdownSelector {...props} />
    </div>
  ),
}

const DummyBox = styled.div`
  border: solid 1px ${({ theme }) => theme.border.default.color};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 256px;
`

export const InModal: StoryObj<typeof DropdownSelector> = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(true)
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
                padding: '16px',
              }}
            >
              <DummyBox>256px</DummyBox>
              <PlaygroundDropdownSelector />
              <DummyBox>256px</DummyBox>
              <PlaygroundDropdownSelector />
              <DummyBox>256px</DummyBox>
            </div>
          </ModalBody>
        </Modal>
      </div>
    )
  },
}

export const InFormTag: StoryObj<typeof DropdownSelector> = {
  render: (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selected, setSelected] = useState('')
    return (
      <form style={{ width: 288 }}>
        <DropdownSelector
          {...props}
          onChange={(value) => {
            setSelected(value)
          }}
          value={selected}
          label="label"
        >
          <DropdownMenuItem value={'10'}>Apple</DropdownMenuItem>
          <DropdownMenuItem value={'20'}>Banana</DropdownMenuItem>
          <DropdownMenuItem value={'30'}>Orange</DropdownMenuItem>
        </DropdownSelector>
      </form>
    )
  },
}

export const CustomChildren: StoryObj<typeof DropdownSelector> = {
  args: { ...baseProps },
  render: (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selected, setSelected] = useState('10')
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
          <DropdownMenuItem value={'10'}>
            <div
              style={{
                color: 'pink',
                fontWeight: 'bold',
              }}
            >
              Apple
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem value={'20'}>
            <div
              style={{
                color: 'yellowgreen',
                fontStyle: 'italic',
              }}
            >
              Banana
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem value={'30'}>
            <div
              style={{
                color: 'orange',
                fontSize: '24px',
              }}
            >
              Orange
            </div>
          </DropdownMenuItem>
        </DropdownSelector>
      </div>
    )
  },
}

export const SectionList: StoryObj<typeof DropdownSelector> = {
  args: { ...baseProps },
  render: (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selected, setSelected] = useState('10')
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
            <DropdownMenuItem value={'10'}>Apple</DropdownMenuItem>
            <DropdownMenuItem value={'20'}>Banana</DropdownMenuItem>
            <DropdownMenuItem value={'30'}>Orange</DropdownMenuItem>
          </MenuItemGroup>
          <Divider />
          <MenuItemGroup text="vehicle">
            <DropdownMenuItem value={'40'}>bicycle</DropdownMenuItem>
            <DropdownMenuItem value={'50'}>car</DropdownMenuItem>
            <DropdownMenuItem value={'60'}>train</DropdownMenuItem>
          </MenuItemGroup>
        </DropdownSelector>
      </div>
    )
  },
}
