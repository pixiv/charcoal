import Clickable from '../Clickable'
import TextField from '.'
import { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react-vite'

export default {
  title: 'react/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof TextField>

export const Default: StoryObj<typeof TextField> = {
  args: {
    showLabel: false,
    assistiveText: '',
    disabled: false,
    required: false,
    invalid: false,
    readOnly: false,
    label: 'Label',
    requiredText: '*必須',
    subLabel: <Clickable>Text Link</Clickable>,
    placeholder: 'TextField',
  },
  render(args) {
    return <TextField {...args} />
  },
}

export const Label: StoryObj<typeof TextField> = {
  render() {
    return <TextField showLabel label="Label" />
  },
}

export const Placeholder: StoryObj<typeof TextField> = {
  render() {
    return <TextField label="Label" placeholder="Placeholder" />
  },
}

export const RequiredText: StoryObj<typeof TextField> = {
  render() {
    return <TextField label="Label" showLabel required requiredText="*必須" />
  },
}

export const AssistiveText: StoryObj<typeof TextField> = {
  render() {
    return <TextField label="Label" assistiveText="説明が入ります" />
  },
}

export const AssistiveTextWithLink: StoryObj<typeof TextField> = {
  render() {
    return (
      <div style={{ display: 'grid', gap: 24, width: 320 }}>
        <TextField
          label="通常"
          assistiveText={
            <>
              パスワードは8文字以上で入力してください。
              <Clickable component="a" href="https://www.pixiv.net/terms/">
                パスワードの要件を確認する
              </Clickable>
            </>
          }
        />
        <TextField
          label="Invalid"
          invalid
          assistiveText={
            <>
              メールアドレスの形式が正しくありません。
              <Clickable component="a" href="https://www.pixiv.net/terms/">
                メールアドレスの入力規則を確認する
              </Clickable>
            </>
          }
        />
        <TextField
          label="Disabled"
          disabled
          assistiveText={
            <>
              この項目は現在変更できません。
              <Clickable component="a" href="https://www.pixiv.net/terms/">
                アカウント設定の変更方法を確認する
              </Clickable>
            </>
          }
        />
        <TextField
          label="長文と横overflow"
          assistiveText={
            <>
              長文の折り返しと横方向のoverflowを確認できます。
              <Clickable component="a" href="https://www.pixiv.net/terms/">
                パスワード再設定の詳細ガイドを確認するhttps://www.pixiv.net/terms/very-long-unbroken-link-for-overflow-check
              </Clickable>
            </>
          }
        />
      </div>
    )
  },
}

export const SubLabel: StoryObj<typeof TextField> = {
  render() {
    return (
      <TextField label="Label" subLabel={<Clickable>Text Link</Clickable>} />
    )
  },
}

export const ShowCount = {
  render() {
    return <TextField label="Label" showCount maxLength={100} />
  },
}

export const Disabled: StoryObj<typeof TextField> = {
  render() {
    return <TextField label="Label" disabled />
  },
}

export const Invalid: StoryObj<typeof TextField> = {
  render() {
    return <TextField label="Label" invalid assistiveText="エラーメッセージ" />
  },
}

export const TokenV2: StoryObj<typeof TextField> = {
  parameters: {
    tokenVersion: 'v2',
  },
  render() {
    return (
      <div style={{ display: 'grid', gap: 24, width: 320 }}>
        <TextField
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
        <TextField
          label="Invalid"
          invalid
          placeholder="Placeholder"
          assistiveText="エラーメッセージ"
        />
        <TextField label="Disabled" disabled value="Disabled value" />
      </div>
    )
  },
}

export const ReadOnly: StoryObj<typeof TextField> = {
  render() {
    return <TextField label="Label" readOnly value="読み取り専用" />
  },
}

export const Affix: StoryObj<typeof TextField> = {
  render() {
    return <TextField label="Label" prefix="/home/john/" suffix=".png" />
  },
}

export const Prefix: StoryObj<typeof TextField> = {
  render() {
    return (
      <TextField
        label="Label"
        prefix={
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              color: 'var(--charcoal-text3)',
            }}
          >
            <pixiv-icon name="16/Search" />
          </div>
        }
      />
    )
  },
}

export const Number: StoryObj<typeof TextField> = {
  render: function Render(args) {
    const [count, setCount] = useState(0)
    return (
      <TextField
        {...args}
        type="number"
        value={count.toString()}
        onChange={(value) => setCount(parseInt(value))}
        onWheel={(e) => {
          e.currentTarget.blur()
          e.stopPropagation()
        }}
      />
    )
  },
}
