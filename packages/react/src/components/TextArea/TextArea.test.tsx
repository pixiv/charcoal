import { render, screen } from '@testing-library/react'
import TextArea from '.'

describe('TextArea component', () => {
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
})
