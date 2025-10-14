import { action } from '@storybook/addon-actions'
import Clickable from '../Clickable'
import TextArea from '.'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'react/v2/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof TextArea>

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
    return <TextArea {...args} />
  },
}

export const Label: StoryObj<typeof TextArea> = {
  render() {
    return <TextArea showLabel label="Label" />
  },
}

export const Placeholder: StoryObj<typeof TextArea> = {
  render() {
    return <TextArea placeholder="Placeholder" label="Label" />
  },
}

export const Required: StoryObj<typeof TextArea> = {
  render() {
    return <TextArea required label="Label" requiredText="*必須" />
  },
}

export const AssistiveText: StoryObj<typeof TextArea> = {
  render() {
    return <TextArea label="Label" assistiveText="説明が入ります" />
  },
}

export const SubLabel: StoryObj<typeof TextArea> = {
  render: function Render() {
    return (
      <TextArea
        showLabel
        label="Label"
        subLabel={<Clickable>Text Link</Clickable>}
      />
    )
  },
}

export const ShowCount: StoryObj<typeof TextArea> = {
  render() {
    return <TextArea showCount maxLength={100} label="Label" />
  },
}

export const Disabled: StoryObj<typeof TextArea> = {
  render() {
    return <TextArea disabled label="Label" />
  },
}

export const Invalid: StoryObj<typeof TextArea> = {
  render() {
    return <TextArea label="Label" invalid assistiveText="エラーメッセージ" />
  },
}

export const ReadOnly: StoryObj<typeof TextArea> = {
  render() {
    return <TextArea label="Label" readOnly value="読み取り専用" />
  },
}

export const AutoHeight: StoryObj<typeof TextArea> = {
  render: function Render() {
    return <TextArea autoHeight label="Label" />
  },
}
