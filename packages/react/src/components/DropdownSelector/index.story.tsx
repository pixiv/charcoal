import { useState } from 'react'
import DropdownSelector, { DropdownSelectorProps } from '.'
import { Story } from '../../_lib/compat'
import { Divider } from './Divider'
import MenuItemGroup from './MenuItemGroup'
import DropdownMenuItem from './DropdownMenuItem'
import Modal from '../Modal'
import { ModalBody, ModalHeader } from '../Modal/ModalPlumbing'
import styled from 'styled-components'
import Button from '../Button'

export default {
  title: 'DropdownSelector',
  component: DropdownSelector,
}

const baseProps: DropdownSelectorProps = {
  label: 'Label',
  value: '',
  placeholder: 'placeholder',
  onChange: () => {
    //
  },
  children: <DropdownMenuItem value="item" />,
}

export const Playground: Story<DropdownSelectorProps> = (
  props: DropdownSelectorProps
) => {
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
}

Playground.args = { ...baseProps }

export const Basic: Story<DropdownSelectorProps> = (
  props: DropdownSelectorProps
) => {
  return (
    <div style={{ width: 288 }}>
      <PlaygroundDropdownSelector {...props} />
    </div>
  )
}

Basic.args = { ...baseProps }

export const LongNames: Story<DropdownSelectorProps> = (
  props: DropdownSelectorProps
) => {
  const [selected, setSelected] = useState('10')
  return (
    <div
      style={{
        width: 288,
      }}
    >
      <DropdownSelector
        {...props}
        onChange={(value) => {
          setSelected(value)
        }}
        value={selected}
        label="label"
      >
        <DropdownMenuItem value={'10'}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        </DropdownMenuItem>
        <DropdownMenuItem value={'20'}>
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </DropdownMenuItem>
        <DropdownMenuItem value={'30'}>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </DropdownMenuItem>
      </DropdownSelector>
    </div>
  )
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

const DummyBox = styled.div`
  border: solid 1px ${({ theme }) => theme.border.default.color};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 256px;
`

export const InModal: Story<DropdownSelectorProps> = () => {
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
}

export const InFormTag: Story<DropdownSelectorProps> = (
  props: DropdownSelectorProps
) => {
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
}

export const CustomChildren: Story<DropdownSelectorProps> = (
  props: DropdownSelectorProps
) => {
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
}

CustomChildren.args = { ...baseProps }

export const SectionList: Story<DropdownSelectorProps> = (
  props: DropdownSelectorProps
) => {
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
}
SectionList.args = { ...baseProps }
