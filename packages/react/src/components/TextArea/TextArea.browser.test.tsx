import { fireEvent, render } from '@testing-library/react'
import { act, useRef, useState } from 'react'
import TextArea, { type TextAreaImperativeHandle } from '.'

const longText = '折り返しを確認するための長いテキストです。'.repeat(12)

function getRows(container: HTMLElement) {
  return Number(container.style.getPropertyValue('--charcoal-text-area-rows'))
}

describe('TextArea autoHeight', () => {
  it('grows and shrinks for soft-wrapped and explicit new lines', async () => {
    const { container } = render(
      <div style={{ width: 160 }}>
        <TextArea autoHeight rows={1} label="label" />
      </div>,
    )
    const textArea = container.querySelector('textarea') as HTMLTextAreaElement
    const textAreaContainer = container.querySelector(
      '.charcoal-text-area-container',
    ) as HTMLDivElement
    const initialHeight = textAreaContainer.getBoundingClientRect().height

    fireEvent.change(textArea, { target: { value: longText } })
    await vi.waitFor(() => {
      expect(textAreaContainer.getBoundingClientRect().height).toBeGreaterThan(
        initialHeight,
      )
    })

    fireEvent.change(textArea, { target: { value: 'one\ntwo\nthree' } })
    await vi.waitFor(() => expect(getRows(textAreaContainer)).toBe(3))

    fireEvent.change(textArea, { target: { value: 'short' } })
    await vi.waitFor(() => expect(getRows(textAreaContainer)).toBe(1))
  })

  it('caps soft-wrapped content at maxRows and leaves the textarea scrollable', async () => {
    const { container } = render(
      <div style={{ width: 160 }}>
        <TextArea rows={1} maxRows={3} label="label" />
      </div>,
    )
    const textArea = container.querySelector('textarea') as HTMLTextAreaElement
    const textAreaContainer = container.querySelector(
      '.charcoal-text-area-container',
    ) as HTMLDivElement

    fireEvent.change(textArea, { target: { value: longText } })
    await vi.waitFor(() => expect(getRows(textAreaContainer)).toBe(3))
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
    const controlledContainer = container.querySelector(
      '.charcoal-text-area-container',
    ) as HTMLDivElement

    fireEvent.click(getByRole('button', { name: 'long' }))
    await vi.waitFor(() =>
      expect(getRows(controlledContainer)).toBeGreaterThan(1),
    )
    fireEvent.click(getByRole('button', { name: 'short' }))
    await vi.waitFor(() => expect(getRows(controlledContainer)).toBe(1))

    const { container: defaultValueContainer } = render(
      <div style={{ width: 160 }}>
        <TextArea autoHeight rows={1} label="label" defaultValue={longText} />
      </div>,
    )
    const defaultContainer = defaultValueContainer.querySelector(
      '.charcoal-text-area-container',
    ) as HTMLDivElement
    await vi.waitFor(() => expect(getRows(defaultContainer)).toBeGreaterThan(1))
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
    const textAreaContainer = container.querySelector(
      '.charcoal-text-area-container',
    ) as HTMLDivElement

    fireEvent.click(getByRole('button', { name: 'long' }))
    await vi.waitFor(() =>
      expect(getRows(textAreaContainer)).toBeGreaterThan(1),
    )
    fireEvent.click(getByRole('button', { name: 'short' }))
    await vi.waitFor(() => expect(getRows(textAreaContainer)).toBe(1))
    fireEvent.click(getByRole('button', { name: 'sync' }))
    await vi.waitFor(() =>
      expect(getRows(textAreaContainer)).toBeGreaterThan(1),
    )
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
    const textAreaContainer = container.querySelector(
      '.charcoal-text-area-container',
    ) as HTMLDivElement
    const wideRows = getRows(textAreaContainer)

    await act(async () => {
      fireEvent.click(getByRole('button', { name: 'narrow' }))
      await new Promise(requestAnimationFrame)
    })
    await vi.waitFor(() =>
      expect(getRows(textAreaContainer)).toBeGreaterThan(wideRows),
    )
    await act(async () => {
      fireEvent.click(getByRole('button', { name: 'wide' }))
      await new Promise(requestAnimationFrame)
    })
    await vi.waitFor(() => expect(getRows(textAreaContainer)).toBe(wideRows))
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
    const containers = Array.from(
      container.querySelectorAll('.charcoal-text-area-container'),
    ) as HTMLDivElement[]
    const disabledTextArea = containers[2].querySelector(
      'textarea',
    ) as HTMLTextAreaElement
    const disabledHeight = containers[2].getBoundingClientRect().height

    await vi.waitFor(() => {
      expect(getRows(containers[0])).toBeGreaterThan(1)
      expect(getRows(containers[1])).toBe(getRows(containers[0]))
    })
    fireEvent.change(disabledTextArea, { target: { value: longText } })
    expect(containers[2].getBoundingClientRect().height).toBe(disabledHeight)
  })
})
