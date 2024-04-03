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
    subLabel: <Clickable onClick={action('label-click')}>Text Link</Clickable>,
    placeholder: 'Text Area',
  },
  render: function Render(args) {
    return (
      <Container>
        <TextArea {...args} />
      </Container>
    )
  },
}

export const ShowLabel: StoryObj<typeof TextArea> = {
  render: function Render() {
    return (
      <Container>
        <TextArea showLabel required label="Label" />
      </Container>
    )
  },
}

export const AssistiveText: StoryObj<typeof TextArea> = {
  render: function Render() {
    return (
      <Container>
        <TextArea assistiveText="Assistive text" label="Label" />
      </Container>
    )
  },
}

export const ShowCount: StoryObj<typeof TextArea> = {
  render: function Render() {
    return (
      <Container>
        <TextArea showCount maxLength={100} label="Label" />
      </Container>
    )
  },
}

export const Invalid: StoryObj<typeof TextArea> = {
  render: function Render() {
    return (
      <Container>
        <TextArea invalid label="Label" />
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
          subLabel={
            <Clickable onClick={action('label-click')}>Text Link</Clickable>
          }
        />
      </Container>
    )
  },
}

export const Disabled: StoryObj<typeof TextArea> = {
  render: function Render() {
    return (
      <Container>
        <TextArea disabled label="Label" />
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
