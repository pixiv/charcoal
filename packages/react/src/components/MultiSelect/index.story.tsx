import React, { useState } from 'react'
import { Story } from '../../_lib/compat'
import styled from 'styled-components'
import { MultiSelectGroup, default as MultiSelect } from '.'

export default {
  title: 'MultiSelect',
  component: MultiSelect,
  argTypes: {
    name: {
      control: {
        type: 'text',
      },
    },
    label: {
      control: {
        type: 'text',
      },
    },
    selected: {
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    readonly: {
      control: {
        type: 'boolean',
      },
    },
    invalid: {
      control: {
        type: 'boolean',
      },
    },
    variant: {
      control: {
        type: 'inline-radio',
        options: ['default', 'overlay'],
      },
    },
  },
}

type Props = {
  name: string
  label: string
  selected: boolean
  onChange: (selected: string[]) => void
  disabled?: boolean
  readonly?: boolean
  invalid?: boolean
  variant?: 'default' | 'overlay'
}

const StyledMultiSelectGroup = styled(MultiSelectGroup)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
`

const Template: Story<Props> = ({
  name,
  label,
  selected,
  onChange,
  disabled,
  readonly,
  invalid,
  variant,
}) => {
  return (
    <StyledMultiSelectGroup
      {...{
        name,
        label,
        onChange,
        disabled,
        readonly,
        invalid,
      }}
      className={''}
      selected={selected ? ['選択肢1', '選択肢3'] : []}
    >
      {[1, 2, 3, 4].map((idx) => (
        <MultiSelect value={`選択肢${idx}`} variant={variant} key={idx}>
          選択肢{idx}
        </MultiSelect>
      ))}
    </StyledMultiSelectGroup>
  )
}

export const Default = Template.bind({})
Default.args = {
  name: '',
  label: '',
  selected: true,
  disabled: false,
  readonly: false,
  invalid: false,
  variant: 'default',
  // eslint-disable-next-line no-console
  onChange: (selected) => console.log(selected),
}

type PlaygroundProps = {
  name: string
  label: string
  disabled?: boolean
  readonly?: boolean
  invalid?: boolean
  variant?: 'default' | 'overlay'
}

export const Playground: Story<PlaygroundProps> = (props) => {
  const [selected, setSelected] = useState<string[]>([])

  return (
    <StyledMultiSelectGroup
      {...props}
      selected={selected}
      onChange={setSelected}
    >
      {[1, 2, 3, 4].map((idx) => (
        <MultiSelect value={`選択肢${idx}`} variant={props.variant} key={idx}>
          選択肢{idx}
        </MultiSelect>
      ))}
    </StyledMultiSelectGroup>
  )
}
Playground.args = {
  name: 'defaultName',
  label: '',
  disabled: false,
  readonly: false,
  invalid: false,
  variant: 'default',
}
