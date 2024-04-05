import TagItem from '.'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'TagItem',
  component: TagItem,
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof TagItem>

export const Default: StoryObj<typeof TagItem> = {
  args: {
    label: '#女の子',
  },
  render: function Render(args) {
    return <TagItem {...args} />
  },
}

export const TranslatedLabel: StoryObj<typeof TagItem> = {
  render: function Render() {
    return <TagItem label="#女の子" translatedLabel="girl" />
  },
}

export const BGColor: StoryObj<typeof TagItem> = {
  render: function Render() {
    return <TagItem label="女の子" bgColor="var(--charcoal-brand)" />
  },
}

export const BGImage: StoryObj<typeof TagItem> = {
  render: function Render() {
    return (
      <TagItem
        label="#女の子"
        bgImage="https://charcoal-web.pixiv.design/charcoal-ogp.jpg"
      />
    )
  },
}

export const Active: StoryObj<typeof TagItem> = {
  render: function Render() {
    return <TagItem label="#女の子" status="active" />
  },
}

export const InActive: StoryObj<typeof TagItem> = {
  render: function Render() {
    return <TagItem label="#女の子" status="inactive" />
  },
}

export const Small: StoryObj<typeof TagItem> = {
  render: function Render() {
    return <TagItem label="#女の子" size="S" />
  },
}

export const Disabled: StoryObj<typeof TagItem> = {
  render: function Render() {
    return <TagItem label="#女の子" disabled />
  },
}
