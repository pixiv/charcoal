import { action } from '@storybook/addon-actions'
import styled from 'styled-components'
import Clickable from '../Clickable'
import TextArea from '.'
import { px } from '@charcoal-ui/utils'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'TextArea',
  component: TextArea,
  argTypes: {},
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
} as Meta<typeof TextArea>

const Container = styled.div`
  display: grid;
  gap: ${({ theme }) => px(theme.spacing[24])};
`

export const Default: StoryObj<typeof TextArea> = {}

export const HasLabel: StoryObj<typeof TextArea> = {
  args: {
    showLabel: true,
    assistiveText: 'Assistive text',
    required: true,
  },
}

export const HasCount: StoryObj<typeof TextArea> = {
  args: {
    showCount: true,
    maxLength: 100,
  },
}

export const AutoHeight: StoryObj<typeof TextArea> = {
  args: {
    autoHeight: true,
  },
}
