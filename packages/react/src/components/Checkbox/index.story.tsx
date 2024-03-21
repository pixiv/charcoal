import { action } from '@storybook/addon-actions'
import Checkbox from '.'
import { Meta, StoryObj } from '@storybook/react'
import { useCallback, useState } from 'react'
import styled from 'styled-components'

export default {
  title: 'Checkbox',
  component: Checkbox,
} as Meta<typeof Checkbox>

const InnerText = styled.span`
  user-select: none;
`

export const Default: StoryObj<typeof Checkbox> = {
  render: (props) => {
    const [checked, setChecked] = useState(props.checked)
    const handleChange = useCallback((isSelected: boolean) => {
      setChecked(isSelected)
      action('change')(isSelected)
    }, [])

    return (
      <Checkbox
        {...props}
        checked={checked ?? props.checked}
        name="labelled"
        label="label"
        onBlur={action('blur')}
        onClick={action('click')}
        onChange={handleChange}
        onFocus={action('focus')}
      />
    )
  },
}

export const Label: StoryObj<typeof Checkbox> = {
  render: () => {
    return (
      <Checkbox name="labelled">
        <InnerText>同意する</InnerText>
      </Checkbox>
    )
  },
}

export const Checked: StoryObj<typeof Checkbox> = {
  render: () => {
    return <Checkbox name="labelled" label="同意する" checked />
  },
}

export const Disabled: StoryObj<typeof Checkbox> = {
  render: () => {
    return <Checkbox name="labelled" label="同意する" disabled />
  },
}

export const ReadOnly: StoryObj<typeof Checkbox> = {
  render: () => {
    return <Checkbox name="labelled" label="同意する" readonly />
  },
}

export const Invalid: StoryObj<typeof Checkbox> = {
  render: () => {
    return (
      <Checkbox name="labelled" invalid>
        同意する
      </Checkbox>
    )
  },
}
