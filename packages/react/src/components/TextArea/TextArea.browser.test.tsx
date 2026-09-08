import { fireEvent, render } from '@testing-library/react'
import { useRef, useState } from 'react'
import TextArea, { type TextAreaImperativeHandle } from '.'

const longText = '折り返しを確認するための長いテキストです。'.repeat(12)

function containerOf(textArea: HTMLTextAreaElement) {
  return textArea.closest('.charcoal-text-area-container') as HTMLDivElement
}

function rowsOf(textArea: HTMLTextAreaElement) {
  return Number(
    containerOf(textArea).style.getPropertyValue('--charcoal-text-area-rows'),
  )
}

describe('TextArea autoHeight', () => {
  it('grows and shrinks for soft-wrapped and explicit new lines', async () => {
    const { container } = render(
      <div style={{ width: 160 }}>
        <TextArea autoHeight rows={1} label="label" />
      </div>,
    )
    const textArea = container.querySelector('textarea') as HTMLTextAreaElement
    const initialHeight = containerOf(textArea).getBoundingClientRect().height

    fireEvent.change(textArea, { target: { value: longText } })
    await vi.waitFor(() => {
      expect(
        containerOf(textArea).getBoundingClientRect().height,
      ).toBeGreaterThan(initialHeight)
    })

    fireEvent.change(textArea, { target: { value: 'one\ntwo\nthree' } })
    await vi.waitFor(() => expect(rowsOf(textArea)).toBe(3))

    fireEvent.change(textArea, { target: { value: 'short' } })
    await vi.waitFor(() => expect(rowsOf(textArea)).toBe(1))
  })

  it('caps soft-wrapped content at maxRows and leaves the textarea scrollable', async () => {
    const { container } = render(
      <div style={{ width: 160 }}>
        <TextArea rows={1} maxRows={3} label="label" />
      </div>,
    )
    const textArea = container.querySelector('textarea') as HTMLTextAreaElement

    fireEvent.change(textArea, { target: { value: longText } })
    await vi.waitFor(() => expect(rowsOf(textArea)).toBe(3))
    expect(textArea.scrollHeight).toBeGreaterThan(textArea.clientHeight)
  })

  it('synchronizes controlled values and an initial defaultValue', async () => {
    function ControlledTextArea() {
      const [value, setValue] = useState('short')
      return (
        <>
          <button onClick={() => setValue(longText)}>long</button>
          <button onClick={() => setValue('short')}>short</button>
          <div style={{ width: 160 }}>
            <TextArea autoHeight rows={1} label="label" value={value} />
          </div>
        </>
      )
    }

    const { container, getByRole } = render(<ControlledTextArea />)
    const controlled = container.querySelector(
      'textarea',
    ) as HTMLTextAreaElement

    fireEvent.click(getByRole('button', { name: 'long' }))
    await vi.waitFor(() => expect(rowsOf(controlled)).toBeGreaterThan(1))
    fireEvent.click(getByRole('button', { name: 'short' }))
    await vi.waitFor(() => expect(rowsOf(controlled)).toBe(1))

    const { container: defaultValueContainer } = render(
      <div style={{ width: 160 }}>
        <TextArea autoHeight rows={1} label="label" defaultValue={longText} />
      </div>,
    )
    const uncontrolled = defaultValueContainer.querySelector(
      'textarea',
    ) as HTMLTextAreaElement
    await vi.waitFor(() => expect(rowsOf(uncontrolled)).toBeGreaterThan(1))
  })

  it('keeps the row count when a controlled parent rejects the change', async () => {
    const { container } = render(
      <div style={{ width: 160 }}>
        <TextArea
          autoHeight
          rows={1}
          label="label"
          value="short"
          onChange={() => undefined}
        />
      </div>,
    )
    const textArea = container.querySelector('textarea') as HTMLTextAreaElement

    fireEvent.change(textArea, { target: { value: longText } })

    // React が DOM を value に戻すので、行数も 1 のままでなければならない
    await vi.waitFor(() => expect(textArea.value).toBe('short'))
    expect(rowsOf(textArea)).toBe(1)
  })

  it('synchronizes values set through imperativeRef', async () => {
    function ImperativeTextArea() {
      const imperativeRef = useRef<TextAreaImperativeHandle>(null)
      const textAreaRef = useRef<HTMLTextAreaElement>(null)
      return (
        <>
          <button onClick={() => imperativeRef.current?.setValue(longText)}>
            long
          </button>
          <button onClick={() => imperativeRef.current?.setValue('short')}>
            short
          </button>
          <button
            onClick={() => {
              if (textAreaRef.current !== null) {
                textAreaRef.current.value = longText
                imperativeRef.current?.sync()
              }
            }}
          >
            sync
          </button>
          <div style={{ width: 160 }}>
            <TextArea
              autoHeight
              rows={1}
              label="label"
              imperativeRef={imperativeRef}
              ref={textAreaRef}
            />
          </div>
        </>
      )
    }

    const { container, getByRole } = render(<ImperativeTextArea />)
    const textArea = container.querySelector('textarea') as HTMLTextAreaElement

    fireEvent.click(getByRole('button', { name: 'long' }))
    await vi.waitFor(() => expect(rowsOf(textArea)).toBeGreaterThan(1))
    fireEvent.click(getByRole('button', { name: 'short' }))
    await vi.waitFor(() => expect(rowsOf(textArea)).toBe(1))
    fireEvent.click(getByRole('button', { name: 'sync' }))
    await vi.waitFor(() => expect(rowsOf(textArea)).toBeGreaterThan(1))
  })

  it('recalculates soft wraps when the container width changes', async () => {
    function ResizableTextArea() {
      const [width, setWidth] = useState(320)
      return (
        <>
          <button onClick={() => setWidth(120)}>narrow</button>
          <button onClick={() => setWidth(320)}>wide</button>
          <div style={{ width }}>
            <TextArea
              autoHeight
              rows={1}
              label="label"
              defaultValue={longText}
            />
          </div>
        </>
      )
    }

    const { container, getByRole } = render(<ResizableTextArea />)
    const textArea = container.querySelector('textarea') as HTMLTextAreaElement
    // 折り返しが確定してから基準値を取る
    await vi.waitFor(() => expect(rowsOf(textArea)).toBeGreaterThan(1))
    const wideRows = rowsOf(textArea)

    fireEvent.click(getByRole('button', { name: 'narrow' }))
    await vi.waitFor(() => expect(rowsOf(textArea)).toBeGreaterThan(wideRows))

    fireEvent.click(getByRole('button', { name: 'wide' }))
    await vi.waitFor(() => expect(rowsOf(textArea)).toBe(wideRows))
  })

  it('keeps text rows independent from showCount and does not resize without autoHeight', async () => {
    const { container } = render(
      <>
        <div style={{ width: 160 }}>
          <TextArea
            autoHeight
            rows={1}
            label="without count"
            defaultValue={longText}
          />
        </div>
        <div style={{ width: 160 }}>
          <TextArea
            autoHeight
            rows={1}
            label="with count"
            showCount
            defaultValue={longText}
          />
        </div>
        <div style={{ width: 160 }}>
          <TextArea rows={1} label="without auto height" />
        </div>
      </>,
    )
    const [withoutCount, withCount, withoutAutoHeight] = Array.from(
      container.querySelectorAll('textarea'),
    )
    const staticHeight =
      containerOf(withoutAutoHeight).getBoundingClientRect().height

    await vi.waitFor(() => expect(rowsOf(withoutCount)).toBeGreaterThan(1))
    await vi.waitFor(() => expect(rowsOf(withCount)).toBeGreaterThan(1))
    expect(rowsOf(withCount)).toBe(rowsOf(withoutCount))

    fireEvent.change(withoutAutoHeight, { target: { value: longText } })
    expect(containerOf(withoutAutoHeight).getBoundingClientRect().height).toBe(
      staticHeight,
    )
  })
})
