import { action } from '@storybook/addon-actions'
import React from 'react'
import { css } from 'styled-components'
import { Story } from '../../_lib/compat'
import Radio, { RadioGroup } from '.'
import { px } from '@charcoal-ui/utils'

const options = ['value1', 'value2']

export default {
  title: 'Radio',
  component: Radio,
  argTypes: {
    value: {
      control: { type: 'select' },
      options,
    },
  },
  args: {
    invalid: false,
    parentDisabled: false,
    childDisabled: false,
    readonly: false,
  },
}

interface Props {
  value?: string
  invalid: boolean
  parentDisabled: boolean
  childDisabled: boolean
  readonly: boolean
}

const Template: Story<Partial<Props>> = ({
  value,
  invalid,
  parentDisabled,
  childDisabled,
  readonly,
}) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      gap: ${({ theme }) => px(theme.spacing[24])};
    `}
  >
    {['name1', 'name2', 'name3'].map((name) => (
      <RadioGroup
        key={name}
        label={`選択肢-${name}`}
        name={name}
        value={value}
        onChange={action('onChange')}
        disabled={parentDisabled}
        readonly={readonly}
        invalid={invalid}
      >
        {options.map((option) => (
          <Radio key={option} value={option} disabled={childDisabled}>
            {name}({option})を選ぶ
          </Radio>
        ))}
      </RadioGroup>
    ))}
  </div>
)

export const Default = Template.bind({})
