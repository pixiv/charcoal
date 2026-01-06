import { useState } from 'react'
import {
  MultiSelectGroup,
  default as MultiSelect,
  MultiSelectGroupProps,
} from '.'
import { Meta, StoryObj } from '@storybook/react-webpack5'
import { action } from 'storybook/actions'

const StyledMultiSelectGroup = (props: MultiSelectGroupProps) => {
  return (
    <MultiSelectGroup
      style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px' }}
      {...props}
    />
  )
}

export default {
  title: 'react/MultiSelect',
  component: MultiSelect,
  argTypes: {
    variant: {
      control: {
        type: 'inline-radio',
        options: ['default', 'overlay'],
      },
    },
  },
  args: {
    variant: 'default',
  },
} as Meta<typeof MultiSelect>

export const Basic: StoryObj<typeof MultiSelect> = {
  render: function Render(args) {
    const options = ['選択肢1', '選択肢2', '選択肢3', '選択肢4']
    return (
      <StyledMultiSelectGroup
        name="name"
        label="label"
        onChange={action('click')}
        selected={['選択肢1', '選択肢3']}
      >
        {options.map((option) => (
          <MultiSelect {...args} value={option} key={option}>
            {option}
          </MultiSelect>
        ))}
      </StyledMultiSelectGroup>
    )
  },
}

export const Invalid: StoryObj<typeof MultiSelect> = {
  render: function Render(args) {
    const options = ['選択肢1', '選択肢2', '選択肢3', '選択肢4']
    return (
      <StyledMultiSelectGroup
        name="name"
        label="label"
        onChange={action('click')}
        selected={[]}
        invalid
      >
        {options.map((option) => (
          <MultiSelect {...args} value={option} key={option}>
            {option}
          </MultiSelect>
        ))}
      </StyledMultiSelectGroup>
    )
  },
}

export const Overlay: StoryObj<typeof MultiSelect> = {
  render: function Render(args) {
    const options = ['選択肢1', '選択肢2', '選択肢3', '選択肢4']
    return (
      <StyledMultiSelectGroup
        name="name"
        label="label"
        onChange={action('click')}
        selected={[]}
      >
        {options.map((option) => (
          <MultiSelect {...args} value={option} key={option}>
            {option}
          </MultiSelect>
        ))}
      </StyledMultiSelectGroup>
    )
  },
  args: {
    variant: 'overlay',
  },
}

export const Playground: StoryObj<typeof MultiSelect> = {
  render: function Render(args) {
    const [selected, setSelected] = useState<string[]>([])

    return (
      <StyledMultiSelectGroup
        name=""
        label=""
        onChange={setSelected}
        selected={selected}
      >
        {[1, 2, 3, 4].map((idx) => (
          <MultiSelect {...args} value={`選択肢${idx}`} key={idx}>
            選択肢{idx}
          </MultiSelect>
        ))}
      </StyledMultiSelectGroup>
    )
  },
}
