import { action } from 'storybook/actions'
import Clickable from '../Clickable'
import TextArea, { type TextAreaImperativeHandle } from '.'
import { Meta, StoryObj } from '@storybook/react-vite'
import { type ReactNode, useCallback, useEffect, useRef, useState } from 'react'

type ScrollMeasurement = {
  clientHeight: number
  index: number
  maxScrollTop: number
  scrollHeight: number
  scrollTop: number
}

const getMaxScrollTop = (textarea: HTMLTextAreaElement) => {
  const previousScrollTop = textarea.scrollTop
  textarea.scrollTop = Number.MAX_SAFE_INTEGER
  const maxScrollTop = textarea.scrollTop
  textarea.scrollTop = previousScrollTop
  return maxScrollTop
}

const MaxScrollTopInspector = ({ children }: { children: ReactNode }) => {
  const targetRef = useRef<HTMLDivElement>(null)
  const [measurements, setMeasurements] = useState<ScrollMeasurement[]>([])

  const measure = useCallback(() => {
    const textareas = targetRef.current?.querySelectorAll('textarea') ?? []
    setMeasurements(
      Array.from(textareas, (textarea, index) => ({
        clientHeight: textarea.clientHeight,
        index: index + 1,
        maxScrollTop: getMaxScrollTop(textarea),
        scrollHeight: textarea.scrollHeight,
        scrollTop: textarea.scrollTop,
      })),
    )
  }, [])

  useEffect(() => {
    measure()

    const target = targetRef.current
    if (!target) return

    const resizeObserver = new ResizeObserver(measure)
    target.querySelectorAll('textarea').forEach((textarea) => {
      resizeObserver.observe(textarea)
    })
    target.addEventListener('input', measure)
    window.addEventListener('resize', measure)

    return () => {
      resizeObserver.disconnect()
      target.removeEventListener('input', measure)
      window.removeEventListener('resize', measure)
    }
  }, [measure])

  return (
    <div className="flex flex-col gap-[16px]">
      <div ref={targetRef}>{children}</div>
      <table style={{ borderCollapse: 'collapse', fontFamily: 'monospace' }}>
        <thead>
          <tr>
            <th style={{ padding: 4 }}>#</th>
            <th style={{ padding: 4 }}>maxScrollTop</th>
            <th style={{ padding: 4 }}>scrollTop</th>
            <th style={{ padding: 4 }}>scrollHeight</th>
            <th style={{ padding: 4 }}>clientHeight</th>
          </tr>
        </thead>
        <tbody>
          {measurements.map((measurement) => (
            <tr key={measurement.index}>
              <td style={{ padding: 4, textAlign: 'right' }}>
                {measurement.index}
              </td>
              <td style={{ padding: 4, textAlign: 'right' }}>
                {measurement.maxScrollTop}
              </td>
              <td style={{ padding: 4, textAlign: 'right' }}>
                {measurement.scrollTop}
              </td>
              <td style={{ padding: 4, textAlign: 'right' }}>
                {measurement.scrollHeight}
              </td>
              <td style={{ padding: 4, textAlign: 'right' }}>
                {measurement.clientHeight}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

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

export const MaxRowsHiddenScrollbar: StoryObj<typeof TextArea> = {
  render: function Render() {
    return (
      <MaxScrollTopInspector>
        <div className="flex gap-fixed">
          <div className="flex flex-col gap-[8px]">
            <TextArea rows={1} maxRows={1} label="label" value={'1'} />
            <TextArea rows={1} maxRows={2} label="label" value={'1\n2'} />
            <TextArea rows={1} maxRows={3} label="label" value={'1\n2\n3'} />
            <TextArea rows={1} maxRows={4} label="label" value={'1\n2\n3\n4'} />
            <TextArea
              rows={1}
              maxRows={5}
              label="label"
              value={'1\n2\n3\n4\n5'}
            />
            <TextArea
              rows={1}
              maxRows={6}
              label="label"
              value={'1\n2\n3\n4\n5\n6'}
            />
            <TextArea
              rows={1}
              maxRows={7}
              label="label"
              value={'1\n2\n3\n4\n5\n6\n7'}
            />
            <TextArea
              rows={1}
              maxRows={8}
              label="label"
              value={'1\n2\n3\n4\n5\n6\n7\n8'}
            />
            <TextArea
              rows={1}
              maxRows={9}
              label="label"
              value={'1\n2\n3\n4\n5\n6\n7\n8\n9'}
            />
          </div>
          <div className="flex flex-col gap-[8px]">
            <TextArea
              rows={1}
              maxRows={1}
              label="label"
              value={'1'}
              showCount
            />
            <TextArea
              rows={1}
              maxRows={2}
              label="label"
              value={'1\n2'}
              showCount
            />
            <TextArea
              rows={1}
              maxRows={3}
              label="label"
              value={'1\n2\n3'}
              showCount
            />
            <TextArea
              rows={1}
              maxRows={4}
              label="label"
              value={'1\n2\n3\n4'}
              showCount
            />
            <TextArea
              rows={1}
              maxRows={5}
              label="label"
              value={'1\n2\n3\n4\n5'}
              showCount
            />
            <TextArea
              rows={1}
              maxRows={6}
              label="label"
              value={'1\n2\n3\n4\n5\n6'}
              showCount
            />
            <TextArea
              rows={1}
              maxRows={7}
              label="label"
              value={'1\n2\n3\n4\n5\n6\n7'}
              showCount
            />
            <TextArea
              rows={1}
              maxRows={8}
              label="label"
              value={'1\n2\n3\n4\n5\n6\n7\n8'}
              showCount
            />
            <TextArea
              rows={1}
              maxRows={9}
              label="label"
              value={'1\n2\n3\n4\n5\n6\n7\n8\n9'}
              showCount
            />
          </div>
        </div>
      </MaxScrollTopInspector>
    )
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
