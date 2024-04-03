import styled from 'styled-components'
import Clickable from '../Clickable'
import TextField from '.'
import { px } from '@charcoal-ui/utils'
import IconButton from '../IconButton'
import { useCallback, useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof TextField>

const Container = styled.div`
  display: grid;
  gap: ${({ theme }) => px(theme.spacing[24])};
`

export const Default: StoryObj<typeof TextField> = {
  args: {
    showLabel: false,
    assistiveText: '',
    disabled: false,
    required: false,
    invalid: false,
    readOnly: false,
    label: 'Label',
    requiredText: '*必須',
    subLabel: <Clickable>Text Link</Clickable>,
    placeholder: 'TextField',
  },
  render(args) {
    return (
      <Container>
        <TextField {...args} />
      </Container>
    )
  },
}

export const Label: StoryObj<typeof TextField> = {
  render() {
    return (
      <Container>
        <TextField showLabel label="Label" />
      </Container>
    )
  },
}

export const Placeholder: StoryObj<typeof TextField> = {
  render() {
    return (
      <Container>
        <TextField label="Label" placeholder="Placeholder" />
      </Container>
    )
  },
}

export const RequiredText: StoryObj<typeof TextField> = {
  render() {
    return (
      <Container>
        <TextField label="Label" showLabel required requiredText="*必須" />
      </Container>
    )
  },
}

export const AssistiveText: StoryObj<typeof TextField> = {
  render() {
    return (
      <Container>
        <TextField label="Label" assistiveText="Assistive Text" />
      </Container>
    )
  },
}

export const SubLabel: StoryObj<typeof TextField> = {
  render() {
    return (
      <Container>
        <TextField label="Label" subLabel={<Clickable>Text Link</Clickable>} />
      </Container>
    )
  },
}

export const ShowCount = {
  render() {
    return (
      <Container>
        <TextField label="Label" showCount maxLength={100} />
      </Container>
    )
  },
}

export const Disabled: StoryObj<typeof TextField> = {
  render() {
    return (
      <Container>
        <TextField label="Label" disabled />
      </Container>
    )
  },
}

export const Invalid: StoryObj<typeof TextField> = {
  render() {
    return (
      <Container>
        <TextField label="Label" invalid assistiveText="error message" />
      </Container>
    )
  },
}

export const ReadOnly: StoryObj<typeof TextField> = {
  render() {
    return (
      <Container>
        <TextField label="Label" readOnly value="読み取り専用" />
      </Container>
    )
  },
}

export const Affix: StoryObj<typeof TextField> = {
  render() {
    return (
      <Container>
        <TextField label="Label" prefix="/home/john/" suffix=".png" />
      </Container>
    )
  },
}

const PrefixIconWrap = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.text3};
`

export const Prefix: StoryObj<typeof TextField> = {
  render() {
    return (
      <Container>
        <TextField
          label="Label"
          prefix={
            <PrefixIconWrap>
              <pixiv-icon name="16/Search" />
            </PrefixIconWrap>
          }
        />
      </Container>
    )
  },
}

export const Number: StoryObj<typeof TextField> = {
  render: function Render(args) {
    const [count, setCount] = useState(0)
    return (
      <Container>
        <TextField
          {...args}
          type="number"
          value={count.toString()}
          onChange={(value) => setCount(parseInt(value))}
          onWheel={(e) => {
            e.currentTarget.blur()
            e.stopPropagation()
          }}
        />
      </Container>
    )
  },
}
