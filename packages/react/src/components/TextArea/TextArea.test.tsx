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

  function mockMirrorHeights(heights: { line: number; text: number }) {
    // mirror は 2 要素の clientHeight だけで行数を出すので、そこだけ差し替える
    vi.spyOn(HTMLElement.prototype, 'clientHeight', 'get').mockImplementation(
      function (this: HTMLElement) {
        if (this.classList.contains('charcoal-text-area-mirror-line')) {
          return heights.line
        }
        if (this.classList.contains('charcoal-text-area-mirror-text')) {
          return heights.text
        }
        return 0
      },
    )
  }

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

  it('ignores maxRows below 1', () => {
    const { rows } = renderTextArea(
      <TextArea rows={3} maxRows={0} defaultValue={'a\nb\nc\nd'} />,
    )

    expect(rows()).toBe('3')
  })

  it('derives the row count from the mirror height', () => {
    mockMirrorHeights({ line: 22, text: 110 })

    const { rows } = renderTextArea(
      <TextArea autoHeight rows={1} defaultValue="folded" />,
    )

    expect(rows()).toBe('5')
  })

  it('renders the value into the mirror', () => {
    const { container } = renderTextArea(
      <TextArea autoHeight rows={1} defaultValue={'a\nb'} />,
    )

    // 末尾の改行を 1 行として数えさせるため、値の後ろに空白を足している
    expect(
      container.querySelector('.charcoal-text-area-mirror-text')?.textContent,
    ).toBe('a\nb ')
  })

  it('follows the mirror when its height changes', () => {
    let textHeight = 22
    mockMirrorHeights({
      line: 22,
      get text() {
        return textHeight
      },
    })

    const notifications: Array<() => void> = []
    const originalResizeObserver = globalThis.ResizeObserver
    globalThis.ResizeObserver = class {
      constructor(
        private readonly callback: (entries: { target: Element }[]) => void,
      ) {}
      observe(element: Element) {
        notifications.push(() => this.callback([{ target: element }]))
      }
      unobserve() {
        return undefined
      }
      disconnect() {
        return undefined
      }
    } as unknown as typeof ResizeObserver

    try {
      const { rows } = renderTextArea(
        <TextArea autoHeight rows={1} defaultValue="folded" />,
      )
      expect(rows()).toBe('1')

      // 幅やフォントが変わって折り返しが増えた状況
      textHeight = 66
      act(() => notifications.forEach((notify) => notify()))

      expect(rows()).toBe('3')
    } finally {
      globalThis.ResizeObserver = originalResizeObserver
    }
  })
})
