import { render, screen } from '@testing-library/react'
import TextArea from '.'

describe('TextArea component', () => {
  const computedStyle = {
    lineHeight: '22px',
    paddingTop: '8px',
    paddingBottom: '8px',
  } as CSSStyleDeclaration

  beforeEach(() => {
    vi.spyOn(window, 'getComputedStyle').mockReturnValue(computedStyle)
  })

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

  it('uses the measured row count while respecting rows and maxRows', () => {
    vi.spyOn(HTMLTextAreaElement.prototype, 'scrollHeight', 'get').mockReturnValue(
      104,
    )

    const { container, rerender } = render(
      <TextArea autoHeight rows={2} defaultValue="long value" />,
    )
    const textAreaContainer = container.querySelector(
      '.charcoal-text-area-container',
    ) as HTMLDivElement

    expect(
      textAreaContainer.style.getPropertyValue('--charcoal-text-area-rows'),
    ).toBe('4')

    rerender(<TextArea autoHeight rows={5} defaultValue="long value" />)
    expect(
      textAreaContainer.style.getPropertyValue('--charcoal-text-area-rows'),
    ).toBe('5')

    rerender(
      <TextArea autoHeight rows={5} maxRows={3} defaultValue="long value" />,
    )
    expect(
      textAreaContainer.style.getPropertyValue('--charcoal-text-area-rows'),
    ).toBe('3')
  })
})
