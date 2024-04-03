import { action } from '@storybook/addon-actions'
import styled from 'styled-components'
import Clickable from '../Clickable'
import TextArea from '.'
import { px } from '@charcoal-ui/utils'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof TextArea>

const Container = styled.div`
  display: grid;
  gap: ${({ theme }) => px(theme.spacing[24])};
`

export const Default: StoryObj<typeof TextArea> = {
  args: {
    showLabel: false,
    label: 'Label',
    requiredText: '*必須',
    assistiveText: '',
    disabled: false,
    required: false,
    invalid: false,
    readOnly: false,
    subLabel: <Clickable onClick={action('label-click')}>Text Link</Clickable>,
    placeholder: 'Text Area',
  },
  render(args) {
    return (
      <Container>
        <TextArea {...args} />
      </Container>
    )
  },
}

export const Label: StoryObj<typeof TextArea> = {
  render() {
    return (
      <Container>
        <TextArea showLabel label="Label" />
      </Container>
    )
  },
}

export const Placeholder: StoryObj<typeof TextArea> = {
  render() {
    return (
      <Container>
        <TextArea placeholder="Placeholder" label="Label" />
      </Container>
    )
  },
}

export const Required: StoryObj<typeof TextArea> = {
  render() {
    return (
      <Container>
        <TextArea required label="Label" requiredText="*必須" />
      </Container>
    )
  },
}

export const AssistiveText: StoryObj<typeof TextArea> = {
  render() {
    return (
      <Container>
        <TextArea label="Label" assistiveText="説明が入ります" />
      </Container>
    )
  },
}

export const SubLabel: StoryObj<typeof TextArea> = {
  render: function Render() {
    return (
      <Container>
        <TextArea
          showLabel
          label="Label"
          subLabel={<Clickable>Text Link</Clickable>}
        />
      </Container>
    )
  },
}

export const ShowCount: StoryObj<typeof TextArea> = {
  render() {
    return (
      <Container>
        <TextArea showCount maxLength={100} label="Label" />
      </Container>
    )
  },
}

export const Disabled: StoryObj<typeof TextArea> = {
  render() {
    return (
      <Container>
        <TextArea disabled label="Label" />
      </Container>
    )
  },
}

export const Invalid: StoryObj<typeof TextArea> = {
  render() {
    return (
      <Container>
        <TextArea label="Label" invalid assistiveText="エラーメッセージ" />
      </Container>
    )
  },
}

export const ReadOnly: StoryObj<typeof TextArea> = {
  render() {
    return (
      <Container>
        <TextArea label="Label" readOnly value="読み取り専用" />
      </Container>
    )
  },
}

export const AutoHeight: StoryObj<typeof TextArea> = {
  render: function Render() {
    return (
      <Container>
        <TextArea autoHeight label="Label" />
      </Container>
    )
  },
}
