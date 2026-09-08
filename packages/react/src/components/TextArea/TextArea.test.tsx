import { fireEvent, render, screen } from '@testing-library/react'
import TextArea from '.'

// v3 では高さを CSS が決めるため、jsdom で検証できるのは
// mirror に値が流れていることと、rows / maxRows が CSS の下限・上限として
// 出ていることまで。実際の高さはブラウザテストで確認する。
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
      container,
      mirror: () =>
        result.container.querySelector('.charcoal-text-area-mirror')
          ?.textContent,
      cssVar: (name: string) => container.style.getPropertyValue(name),
    }
  }

  it('mirrors the value so CSS can size the box', () => {
    const { mirror } = renderTextArea(
      <TextArea autoHeight rows={1} defaultValue={'a\nb'} />,
    )

    // 末尾の改行を 1 行として数えさせるため、値の後ろに空白を足している
    expect(mirror()).toBe('a\nb ')
  })

  it('keeps the mirror in sync while typing', () => {
    const { mirror } = renderTextArea(<TextArea autoHeight rows={1} />)
    const textArea = screen.getByRole('textbox') as HTMLTextAreaElement

    fireEvent.change(textArea, { target: { value: 'typed' } })

    expect(mirror()).toBe('typed ')
  })

  it('keeps the mirror on the committed value when a controlled parent rejects the change', () => {
    const { mirror } = renderTextArea(
      <TextArea autoHeight rows={1} value="short" onChange={() => undefined} />,
    )
    const textArea = screen.getByRole('textbox') as HTMLTextAreaElement

    fireEvent.change(textArea, { target: { value: 'a\nb\nc\nd\ne' } })

    expect(textArea).toHaveValue('short')
    expect(mirror()).toBe('short ')
  })

  it('renders no mirror when auto height is off', () => {
    const { mirror, container } = renderTextArea(<TextArea rows={2} />)

    expect(mirror()).toBeUndefined()
    expect(container.dataset.autoHeight).toBe('false')
  })

  it('passes rows and maxRows to CSS as bounds', () => {
    const { cssVar, rerender, container } = renderTextArea(
      <TextArea autoHeight rows={3} maxRows={6} />,
    )

    expect(container.dataset.autoHeight).toBe('true')
    expect(cssVar('--charcoal-text-area-rows')).toBe('3')
    expect(cssVar('--charcoal-text-area-max-rows')).toBe('6')

    rerender(<TextArea autoHeight rows={6} />)
    expect(cssVar('--charcoal-text-area-rows')).toBe('6')
    expect(cssVar('--charcoal-text-area-max-rows')).toBe('')
  })

  it('ignores maxRows below 1', () => {
    const { cssVar, container } = renderTextArea(
      <TextArea rows={3} maxRows={0} />,
    )

    expect(container.dataset.autoHeight).toBe('false')
    expect(cssVar('--charcoal-text-area-max-rows')).toBe('')
  })
})
