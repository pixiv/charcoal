import styled from 'styled-components'
import Radio, { RadioGroup } from '.'
import { px } from '@charcoal-ui/utils'
import { StoryObj } from '@storybook/react'
import { useState } from 'react'

export default {
  title: 'Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
}

const LayoutDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => px(theme.spacing[24])};
`
const options = ['1', '2', '3'] as const
type Option = typeof options[number];

export const Default: StoryObj<typeof Radio> = {
  render: function Render(args) {
    const [value, setValue] = useState<Option>(options[0])

    return (
      <LayoutDiv>
        <RadioGroup<Option>
          label={'label'}
          name={'name'}
          {...args}
          value={value}
          onChange={setValue}
        >
          {options.map((option) => (
            <Radio key={option} value={option}>
              Value {option}
            </Radio>
          ))}
        </RadioGroup>
      </LayoutDiv>
    )
  },
}

export const Disabled: StoryObj<typeof Radio> = {
  render: function Render() {
    const [value, setValue] = useState<Option>(options[0])

    return (
      <LayoutDiv>
        <RadioGroup<Option>
          label={'label'}
          name={'name'}
          value={value}
          onChange={setValue}
          disabled
        >
          {options.map((option) => (
            <Radio key={option} value={option} disabled>
              Value {option}
            </Radio>
          ))}
        </RadioGroup>
      </LayoutDiv>
    )
  },
}

export const PartialDisabled: StoryObj<typeof Radio> = {
  render: function Render() {
    const [value, setValue] = useState<Option>(options[0])

    return (
      <LayoutDiv>
        <RadioGroup<Option>
          label={'label'}
          name={'name'}
          value={value}
          onChange={setValue}
        >
          {options.map((option) => (
            <Radio key={option} value={option} disabled={option === '2'}>
              Value {option}
            </Radio>
          ))}
        </RadioGroup>
      </LayoutDiv>
    )
  },
}

export const Readonly: StoryObj<typeof Radio> = {
  render: function Render() {
    const [value, setValue] = useState<Option>(options[0])

    return (
      <LayoutDiv>
        <RadioGroup<Option>
          label={'label'}
          name={'name'}
          value={value}
          onChange={setValue}
          readonly
        >
          {options.map((option) => (
            <Radio key={option} value={option}>
              Value {option}
            </Radio>
          ))}
        </RadioGroup>
      </LayoutDiv>
    )
  },
}

export const Invalid: StoryObj<typeof Radio> = {
  render: function Render() {
    const [value, setValue] = useState<Option>(options[0])

    return (
      <LayoutDiv>
        <RadioGroup<Option>
          label={'label'}
          name={'name'}
          value={value}
          onChange={setValue}
          invalid
        >
          {options.map((option) => (
            <Radio key={option} value={option}>
              Value {option}
            </Radio>
          ))}
        </RadioGroup>
      </LayoutDiv>
    )
  },
}
