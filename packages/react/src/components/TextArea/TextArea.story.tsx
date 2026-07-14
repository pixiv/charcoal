import { action } from 'storybook/actions'
import Clickable from '../Clickable'
import TextArea, { type TextAreaImperativeHandle } from '.'
import { Meta, StoryObj } from '@storybook/react-vite'
import { useCallback, useRef, useState } from 'react'

export default {
  title: 'react/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof TextArea>

export const Default: StoryObj<typeof TextArea> = {
  args: {
    showLabel: false,
    label: 'Label',
    requiredText: '*必須',
    assistiveText: '',
    disabled: false,
    required: false,
    invalid: false,
    readOnly: false,
    subLabel: <Clickable onClick={action('label-click')}>Text Link</Clickable>,
    placeholder: 'Text Area',
  },
  render(args) {
    return <TextArea {...args} />
  },
}

export const Label: StoryObj<typeof TextArea> = {
  render() {
    return <TextArea showLabel label="Label" />
  },
}

export const Placeholder: StoryObj<typeof TextArea> = {
  render() {
    return <TextArea placeholder="Placeholder" label="Label" />
  },
}

export const Required: StoryObj<typeof TextArea> = {
  render() {
    return <TextArea required label="Label" requiredText="*必須" />
  },
}

export const AssistiveText: StoryObj<typeof TextArea> = {
  render() {
    return <TextArea label="Label" assistiveText="説明が入ります" />
  },
}

export const SubLabel: StoryObj<typeof TextArea> = {
  render: function Render() {
    return (
      <TextArea
        showLabel
        label="Label"
        subLabel={<Clickable>Text Link</Clickable>}
      />
    )
  },
}

export const ShowCount: StoryObj<typeof TextArea> = {
  render() {
    return <TextArea showCount maxLength={100} label="Label" />
  },
}

export const Disabled: StoryObj<typeof TextArea> = {
  render() {
    return <TextArea disabled label="Label" />
  },
}

export const Invalid: StoryObj<typeof TextArea> = {
  render() {
    return <TextArea label="Label" invalid assistiveText="エラーメッセージ" />
  },
}

export const TokenV2: StoryObj<typeof TextArea> = {
  parameters: {
    tokenVersion: 'v2',
  },
  render() {
    return (
      <div style={{ display: 'grid', gap: 24, width: 320 }}>
        <TextArea
          label="Label"
          showLabel
          required
          requiredText="*必須"
          subLabel={<Clickable>Text Link</Clickable>}
          placeholder="Placeholder"
          assistiveText="説明が入ります"
          showCount
          maxLength={100}
        />
        <TextArea
          label="Invalid"
          invalid
          placeholder="Placeholder"
          assistiveText="エラーメッセージ"
        />
        <TextArea label="Disabled" disabled value="Disabled value" />
      </div>
    )
  },
}

export const ReadOnly: StoryObj<typeof TextArea> = {
  render() {
    return <TextArea label="Label" readOnly value="読み取り専用" />
  },
}

export const DefaultValue: StoryObj<typeof TextArea> = {
  render: function Render() {
    return (
      <TextArea label="Label" defaultValue={'テスト用テキスト'} showCount />
    )
  },
}

export const AutoHeight: StoryObj<typeof TextArea> = {
  render: function Render() {
    return <TextArea autoHeight label="Label" />
  },
}

export const AutoHeightAndRows: StoryObj<typeof TextArea> = {
  render: function Render() {
    return <TextArea rows={3} autoHeight label="label" />
  },
}

export const AutoHeightAndDefaultValue: StoryObj<typeof TextArea> = {
  render: function Render() {
    return (
      <TextArea
        rows={3}
        autoHeight
        label="label"
        showCount
        defaultValue={
          'デフォルトの入力内容\nデフォルトの入力内容\nデフォルトの入力内容\nデフォルトの入力内容\nデフォルトの入力内容\nデフォルトの入力内容\nデフォルトの入力内容\nデフォルトの入力内容'
        }
      />
    )
  },
}

export const MaxRows: StoryObj<typeof TextArea> = {
  render: function Render() {
    return <TextArea maxRows={6} label="label" showCount />
  },
}

export const MaxRowsAndRows: StoryObj<typeof TextArea> = {
  render: function Render() {
    return <TextArea rows={3} maxRows={6} label="label" showCount />
  },
}

export const MaxRowsOverInitialRow: StoryObj<typeof TextArea> = {
  render: function Render() {
    return (
      <TextArea
        rows={3}
        maxRows={6}
        label="label"
        showCount
        defaultValue={
          'デフォルトの入力内容\nデフォルトの入力内容\nデフォルトの入力内容\nデフォルトの入力内容\nデフォルトの入力内容\nデフォルトの入力内容\nデフォルトの入力内容\nデフォルトの入力内容'
        }
      />
    )
  },
}

export const MaxRowWorkingChangingValue: StoryObj<typeof TextArea> = {
  render: function Render() {
    const [value, setValue] = useState('')
    const handleClick = useCallback(() => {
      setValue(
        'test\ntest\ntest\ntest\ntest\ntest\ntest\ntest\ntest\ntest\ntest',
      )
    }, [])
    return (
      <>
        <button
          onClick={() => {
            handleClick()
          }}
        >
          insert value
        </button>
        <TextArea rows={1} autoHeight label="label" value={value} showCount />
      </>
    )
  },
}

export const MaxRowWorkingChangingValueInRef: StoryObj<typeof TextArea> = {
  render: function Render() {
    const imperativeRef = useRef<TextAreaImperativeHandle>(null)
    const handleClick = useCallback(() => {
      imperativeRef.current?.setValue(
        'test\ntest\ntest\ntest\ntest\ntest\ntest\ntest\ntest\ntest\ntest',
      )
    }, [])
    return (
      <>
        <button
          onClick={() => {
            handleClick()
          }}
        >
          insert value
        </button>
        <TextArea
          rows={1}
          label="label"
          showCount
          autoHeight
          imperativeRef={imperativeRef}
        />
      </>
    )
  },
}
