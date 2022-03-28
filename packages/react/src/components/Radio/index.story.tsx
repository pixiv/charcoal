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
      control: { type: 'select', options },
    },
    defaultValue: {
      control: { type: 'select', options },
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

interface BaseProps {
  hasError: boolean
  parentDisabled: boolean
  childDisabled: boolean
  forceChecked: boolean
  readonly: boolean
}

interface ControlledProps extends BaseProps {
  value?: string
  defaultValue?: never
}

interface UncontrolledProps extends BaseProps {
  value?: never
  defaultValue?: string
}

type Props = ControlledProps | UncontrolledProps

const Template: Story<Partial<Props>> = ({
  forceChecked,
  hasError,
  parentDisabled,
  childDisabled,
  readonly,
  ...valueOrDefaultValue
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
        onChange={action('onChange')}
        disabled={parentDisabled}
        readonly={readonly}
        hasError={hasError}
        {...valueOrDefaultValue}
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

export const Controlled: Story<Partial<Props>> = Template.bind({})
Controlled.args = {
  value: options[0],
  defaultValue: undefined,
}

export const Uncontrolled: Story<Partial<Props>> = Template.bind({})
Uncontrolled.args = {
  value: undefined,
  defaultValue: options[0],
}
