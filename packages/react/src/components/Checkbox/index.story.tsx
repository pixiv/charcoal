import { action } from '@storybook/addon-actions'
import React, { useState } from 'react'
import Checkbox from '.'
import { Story } from '../../_lib/compat'
import CheckboxOnlyStyled from './CheckboxOnlyStyledComponents'
import CheckboxWithoutAria from './CheckboxWithoutAria'

export default {
  title: 'Checkbox',
  component: Checkbox,
}

type Props = {
  checked: boolean
  defaultChecked: boolean
  disabled: boolean
  readonly: boolean
}

export const Labelled: Story<Props> = (props) => {
  return (
    <div>
      <div style={{ marginBottom: '1em' }}>
        <Checkbox
          {...props}
          name="labelled"
          label="label"
          onBlur={action('blur')}
          onClick={action('click')}
          onChange={action('change')}
          onFocus={action('focus')}
        >
          同意する
        </Checkbox>
      </div>

      <div>
        <Checkbox
          {...props}
          name="labelled"
          label="label"
          onBlur={action('blur')}
          onClick={action('click')}
          onChange={action('change')}
          onFocus={action('focus')}
        >
          <span style={{ width: 200, display: 'block' }}>
            同意する同意する同意する同意する同意する同意する同意する同意する同意する同意する同意する同意する同意する
          </span>
        </Checkbox>
      </div>
    </div>
  )
}

Labelled.args = {
  checked: false,
  defaultChecked: false,
  disabled: false,
  readonly: false,
}

export const Unlabelled: Story<Props> = (props) => {
  return (
    <div>
      <Checkbox
        {...props}
        name="unlabelled"
        label="label"
        onBlur={action('blur')}
        onClick={action('click')}
        onChange={action('change')}
        onFocus={action('focus')}
      />
    </div>
  )
}

Unlabelled.args = {
  checked: false,
  defaultChecked: false,
  disabled: false,
  readonly: false,
}

export const ManyCheckbox: Story<Props> = (props) => {
  const [disabled, setDisabled] = useState(false)
  const list: number[] = [...Array<undefined>(100)].map((_, i) => i)
  return (
    <div>
      <button
        onClick={() => {
          setDisabled((a) => !a)
        }}
      >
        toggleDisabled
      </button>
      <div style={{ marginBottom: '1em' }}>
        {list.map((x) => {
          return (
            <Checkbox
              {...props}
              key={x}
              name="labelled"
              label="label"
              disabled={disabled}
              onBlur={action('blur')}
              onClick={action('click')}
              onChange={action('change')}
              onFocus={action('focus')}
            >
              同意する
            </Checkbox>
          )
        })}
      </div>
    </div>
  )
}

export const ManyCheckboxWithoutAria: Story<Props> = (props) => {
  const [disabled, setDisabled] = useState(false)
  const list: number[] = [...Array<undefined>(100)].map((_, i) => i)
  return (
    <div>
      <button
        onClick={() => {
          setDisabled((a) => !a)
        }}
      >
        toggleDisabled
      </button>
      <div style={{ marginBottom: '1em' }}>
        {list.map((x) => {
          return (
            <CheckboxWithoutAria
              {...props}
              key={x}
              name="labelled"
              label="label"
              disabled={disabled}
              onBlur={action('blur')}
              onClick={action('click')}
              onChange={action('change')}
              onFocus={action('focus')}
            >
              同意する
            </CheckboxWithoutAria>
          )
        })}
      </div>
    </div>
  )
}

export const ManyCheckboxOnlyStyled: Story<Props> = (props) => {
  const [disabled, setDisabled] = useState(false)
  const list: number[] = [...Array<undefined>(100)].map((_, i) => i)
  return (
    <div>
      <button
        onClick={() => {
          setDisabled((a) => !a)
        }}
      >
        toggleDisabled
      </button>
      <div style={{ marginBottom: '1em' }}>
        {list.map((x) => {
          return (
            <CheckboxOnlyStyled
              {...props}
              key={x}
              name="labelled"
              label="label"
              disabled={disabled}
              onBlur={action('blur')}
              onClick={action('click')}
              onChange={action('change')}
              onFocus={action('focus')}
            >
              同意する
            </CheckboxOnlyStyled>
          )
        })}
      </div>
    </div>
  )
}
