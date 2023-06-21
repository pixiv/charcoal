import { action } from '@storybook/addon-actions'
import React, { useState } from 'react'
import { Section } from 'react-stately'
import DropdownSelector, {
  DropdownSelectorItem,
  DropdownSelectorProps,
} from '.'
import { Story } from '../../_lib/compat'
import Clickable from '../Clickable'

export default {
  title: 'DropdownSelector',
  component: DropdownSelector,
}

type Props = Omit<
  DropdownSelectorProps,
  'subLabel' | 'children' | 'onOpenChange'
>
export const Default: Story<Props> = (props) => {
  return (
    <div style={{ width: 288 }}>
      <DropdownSelector
        {...props}
        placeholder={props.placeholder ?? 'Drop Down menu'}
        onChange={action('change')}
        onOpenChange={action('open')}
      >
        <DropdownSelectorItem key="k:1">選択肢1</DropdownSelectorItem>
        <DropdownSelectorItem key="k:2">選択肢2</DropdownSelectorItem>
        <DropdownSelectorItem key="k:3">選択肢3</DropdownSelectorItem>
      </DropdownSelector>
    </div>
  )
}
Default.args = {
  label: 'Label',
  requiredText: '*必須',
  required: false,
  showLabel: false,
  invalid: false,
  disabled: false,
}

export const Sections: Story<DropdownSelectorProps> = (props) => {
  return (
    <div>
      <DropdownSelector
        {...props}
        label="sections"
        placeholder={'Drop Down menu'}
        onChange={action('change')}
        onOpenChange={action('open')}
      >
        <Section title="Section1">
          <DropdownSelectorItem key="1">選択肢1</DropdownSelectorItem>
        </Section>
        <Section title="Section2">
          <DropdownSelectorItem key="2">選択肢2</DropdownSelectorItem>
          <DropdownSelectorItem key="3">選択肢3</DropdownSelectorItem>
        </Section>
      </DropdownSelector>
    </div>
  )
}

export const Bottom: Story<DropdownSelectorProps> = (props) => {
  return (
    <div style={{ marginTop: '1000px' }}>
      <DropdownSelector
        {...props}
        label="bottom"
        placeholder={'Drop Down menu'}
        onChange={action('change')}
        onOpenChange={action('open')}
      >
        <DropdownSelectorItem key="1">選択肢1</DropdownSelectorItem>
        <DropdownSelectorItem key="2">選択肢2</DropdownSelectorItem>
        <DropdownSelectorItem key="3">選択肢3</DropdownSelectorItem>
      </DropdownSelector>
    </div>
  )
}

export const Many: Story<DropdownSelectorProps> = (props) => {
  const [value, setValue] = useState('50')
  return (
    <div style={{ padding: '300px 100px' }}>
      <DropdownSelector
        {...props}
        label="many"
        placeholder={'Drop Down menu'}
        onChange={(v) => {
          setValue(v.toString())
          action('change')
        }}
        onOpenChange={action('open')}
        value={value}
      >
        {[...(Array(100) as undefined[])].map((_, i) => {
          return (
            <DropdownSelectorItem textValue={i.toString()} key={i}>
              選択肢{i}
            </DropdownSelectorItem>
          )
        })}
      </DropdownSelector>
    </div>
  )
}

type HasLabelProps = {
  disabled?: boolean
}
export const HasLabel: Story<HasLabelProps> = ({ disabled }) => {
  const defaultProps: Omit<DropdownSelectorProps, 'children'> = {
    required: true,
    showLabel: true,
    label: 'Label',
    requiredText: '*必須',
    subLabel: <Clickable onClick={action('label-click')}>Text Link</Clickable>,
    assertiveText: 'Hint',
  }
  return (
    <div style={{ width: 288 }}>
      <DropdownSelector
        {...defaultProps}
        disabled={disabled}
        placeholder={'Drop Down menu'}
        onChange={action('change')}
        onOpenChange={action('open')}
      >
        <DropdownSelectorItem key="1">選択肢1</DropdownSelectorItem>
        <DropdownSelectorItem key="2">選択肢2</DropdownSelectorItem>
        <DropdownSelectorItem key="3">選択肢3</DropdownSelectorItem>
      </DropdownSelector>
    </div>
  )
}

HasLabel.args = {
  disabled: false,
}

type WithSeparatorProps = {
  mode: 'default' | 'separator'
}
export const WithSeparator: Story<WithSeparatorProps> = ({
  mode,
  ...props
}) => {
  const defaultProps: Omit<DropdownSelectorProps, 'children'> = {
    required: true,
    showLabel: true,
    label: 'Label',
    requiredText: '*必須',
    subLabel: <Clickable onClick={action('label-click')}>Text Link</Clickable>,
    assertiveText: 'Hint',
  }
  return (
    <div style={{ width: 288 }}>
      <DropdownSelector
        {...defaultProps}
        mode={mode}
        placeholder={'Drop Down menu'}
        onChange={action('change')}
        onOpenChange={action('open')}
        {...props}
      >
        <DropdownSelectorItem key="1">選択肢1</DropdownSelectorItem>
        <DropdownSelectorItem key="2">選択肢2</DropdownSelectorItem>
        <DropdownSelectorItem key="3">選択肢3</DropdownSelectorItem>
      </DropdownSelector>
    </div>
  )
}

WithSeparator.args = {
  mode: 'separator',
}

type InvalidProps = {
  disabled?: boolean
}
export const Invalid: Story<InvalidProps> = ({ disabled }) => {
  const props: Omit<DropdownSelectorProps, 'children'> = {
    label: 'invalid',
    assertiveText: 'error message',
    invalid: true,
  }
  return (
    <div style={{ width: 288 }}>
      <DropdownSelector
        {...props}
        disabled={disabled}
        placeholder={'Drop Down menu'}
        onChange={action('change')}
        onOpenChange={action('open')}
      >
        <DropdownSelectorItem key="1">選択肢1</DropdownSelectorItem>
        <DropdownSelectorItem key="2">選択肢2</DropdownSelectorItem>
        <DropdownSelectorItem key="3">選択肢3</DropdownSelectorItem>
      </DropdownSelector>
    </div>
  )
}

Invalid.args = {
  disabled: false,
}
