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
    hasError: false,
    parentDisabled: false,
    childDisabled: false,
    forceChecked: false,
    readonly: false,
  },
}

interface Props {
  value?: string
  hasError: boolean
  parentDisabled: boolean
  childDisabled: boolean
  forceChecked: boolean
  readonly: boolean
}

const Template: Story<Partial<Props>> = ({
  value,
  forceChecked,
  hasError,
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
        hasError={hasError}
      >
        {options.map((option) => (
          <Radio
            key={option}
            value={option}
            disabled={childDisabled}
            forceChecked={forceChecked}
          >
            {name}({option})を選ぶ
          </Radio>
        ))}
      </RadioGroup>
    ))}
  </div>
)

export const Default = Template.bind({})
