import { act, fireEvent, render, screen } from '@testing-library/react'
import TextArea from '.'

// jsdom はレイアウトを持たないため、ここでは実測できない環境での挙動
// （改行数へのフォールバックと rows / maxRows の適用）だけを検証する。
// 折り返しの実測は実際の CSS が効くブラウザテストで確認する。
describe('TextArea component', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it.each`
    name                                    | value                        | defaultValue | expectedValue | expectedCount
    ${'uncontrolled defaultValue'}          | ${undefined}                 | ${'abc'}     | ${'abc'}      | ${'3'}
    ${'controlled null'}                    | ${null as unknown as string} | ${undefined} | ${''}         | ${'0'}
    ${'controlled null with defaultValue'}  | ${null as unknown as string} | ${'abc'}     | ${'abc'}      | ${'3'}
    ${'controlled value with defaultValue'} | ${'xy'}                      | ${'abc'}     | ${'xy'}       | ${'2'}
  `('$name', ({ value, defaultValue, expectedValue, expectedCount }) => {
    render(<TextArea showCount value={value} defaultValue={defaultValue} />)

    expect(screen.getByRole('textbox')).toHaveValue(expectedValue)
    expect(screen.getByText(expectedCount)).toBeInTheDocument()
  })

  function renderTextArea(ui: React.ReactElement) {
    const result = render(ui)
    const container = result.container.querySelector(
      '.charcoal-text-area-container',
    ) as HTMLDivElement

    return {
      ...result,
      rows: () => container.style.getPropertyValue('--charcoal-text-area-rows'),
    }
  }

  it('falls back to counting line breaks when the height cannot be measured', () => {
    const { rows, rerender } = renderTextArea(
      <TextArea autoHeight rows={2} defaultValue={'a\nb\nc\nd'} />,
    )

    expect(rows()).toBe('4')

    rerender(<TextArea autoHeight rows={5} defaultValue={'a\nb\nc\nd'} />)
    expect(rows()).toBe('5')

    rerender(
      <TextArea autoHeight rows={5} maxRows={3} defaultValue={'a\nb\nc\nd'} />,
    )
    expect(rows()).toBe('3')
  })

  it('keeps the row count when a controlled parent rejects the change', () => {
    const { rows } = renderTextArea(
      <TextArea autoHeight rows={1} value="short" onChange={() => undefined} />,
    )
    const textArea = screen.getByRole('textbox') as HTMLTextAreaElement

    fireEvent.change(textArea, { target: { value: 'a\nb\nc\nd\ne' } })

    // 親が value を据え置いた以上、React が戻した値と行数が一致していること
    expect(textArea).toHaveValue('short')
    expect(rows()).toBe('1')
  })

  it('treats an underivable line height as a failed measurement', () => {
    vi.spyOn(
      HTMLTextAreaElement.prototype,
      'scrollHeight',
      'get',
    ).mockReturnValue(104)

    const { rows } = renderTextArea(
      <TextArea
        autoHeight
        rows={2}
        style={{ lineHeight: 0 }}
        defaultValue="x"
      />,
    )

    // 潰す前後の高さが同じだと 1 行の高さが 0 になり、行数が Infinity になる
    expect(rows()).toBe('2')
  })

  it('treats a content height below the padding as a failed measurement', () => {
    // display: none などレイアウトが無い時は scrollHeight が 0 のまま
    // line-height だけ有効になり、行数が 0 以下に出る
    const { rows } = renderTextArea(
      <TextArea
        autoHeight
        rows={1}
        style={{ lineHeight: '20px' }}
        defaultValue={'a\nb\nc'}
      />,
    )

    expect(rows()).toBe('3')
  })

  it('ignores maxRows below 1', () => {
    const { rows } = renderTextArea(
      <TextArea rows={3} maxRows={0} defaultValue={'a\nb\nc\nd'} />,
    )

    expect(rows()).toBe('3')
  })

  it('re-measures on an observed width change, but not otherwise', () => {
    // 実測値ではなく「測り直したか」を見るので、ResizeObserver と幅だけ差し替える
    const originalResizeObserver = globalThis.ResizeObserver
    let notify: (() => void) | undefined
    let width = 100

    vi.spyOn(HTMLElement.prototype, 'clientWidth', 'get').mockImplementation(
      () => width,
    )
    const measured = vi
      .spyOn(HTMLTextAreaElement.prototype, 'scrollHeight', 'get')
      .mockReturnValue(0)

    globalThis.ResizeObserver = class {
      constructor(
        private readonly callback: (entries: { target: Element }[]) => void,
      ) {}
      observe(element: Element) {
        // observeResize は entries から target を引いてコールバックを選ぶ
        notify = () => this.callback([{ target: element }])
      }
      unobserve() {
        notify = undefined
      }
      disconnect() {
        notify = undefined
      }
    } as unknown as typeof ResizeObserver

    const resize = (next: number) => {
      width = next
      act(() => notify?.())
    }

    try {
      renderTextArea(<TextArea autoHeight rows={1} defaultValue="x" />)
      expect(notify).toBeDefined()

      // observe 直後の通知は基準値を取るだけ
      const afterMount = measured.mock.calls.length
      resize(100)
      expect(measured.mock.calls.length).toBe(afterMount)

      resize(50)
      const afterResize = measured.mock.calls.length
      expect(afterResize).toBeGreaterThan(afterMount)

      // 幅が変わっていない通知（自分が高さを変えた時に来る）では測り直さない
      resize(50)
      expect(measured.mock.calls.length).toBe(afterResize)
    } finally {
      globalThis.ResizeObserver = originalResizeObserver
    }
  })

  it('restores the inline styles it overwrites while measuring', () => {
    let whileMeasuring: Record<string, string> | undefined
    vi.spyOn(
      HTMLTextAreaElement.prototype,
      'scrollHeight',
      'get',
    ).mockImplementation(function (this: HTMLTextAreaElement) {
      whileMeasuring = {
        height: this.style.height,
        overflowY: this.style.overflowY,
      }
      return 104
    })

    render(
      <TextArea
        autoHeight
        defaultValue="long value"
        style={{ overflowY: 'scroll' }}
      />,
    )

    expect(whileMeasuring).toEqual({ height: '0px', overflowY: 'hidden' })

    const textArea = screen.getByRole('textbox') as HTMLTextAreaElement
    expect(textArea.style.height).toBe('')
    expect(textArea.style.overflowY).toBe('scroll')
  })
})
