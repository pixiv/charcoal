import styled from 'styled-components'
import Radio, { RadioGroup } from '.'
import { px } from '@charcoal-ui/utils'
import { StoryObj } from '@storybook/react'
import { useState } from 'react'

export default {
  title: 'Radio',
  component: Radio,
  args: {
    name: 'name',
    label: 'label',
  },
  parameters: {
    layout: 'centered',
  },
}

const LayoutDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => px(theme.spacing[24])};
`

export const Basic: StoryObj<typeof Radio> = {
  render: function Render() {
    const options = ['1', '2', '3']
    const [value, setValue] = useState(options[0])
    return (
      <LayoutDiv>
        <RadioGroup
          aria-label={'label'}
          name={'name'}
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
    const options = ['1', '2', '3']
    const [value, setValue] = useState(options[0])
    return (
      <LayoutDiv>
        <RadioGroup
          aria-label={'label'}
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
    const options = ['1', '2', '3']
    const [value, setValue] = useState(options[0])
    return (
      <LayoutDiv>
        <RadioGroup
          aria-label={'label'}
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
    const options = ['1', '2', '3']
    const [value, setValue] = useState(options[0])
    return (
      <LayoutDiv>
        <RadioGroup
          aria-label={'label'}
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
    const options = ['1', '2', '3']
    const [value, setValue] = useState(options[0])
    return (
      <LayoutDiv>
        <RadioGroup
          aria-label={'label'}
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
