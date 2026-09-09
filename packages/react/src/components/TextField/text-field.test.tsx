import { render, screen } from '@testing-library/react'
import TextField from '.'

import '@testing-library/jest-dom'

describe('TextField component', () => {
  it('displays optionalText when the field is not required', () => {
    render(<TextField label="Label" optionalText="任意" />)

    expect(screen.getByText('任意')).toBeInTheDocument()
  })

  it('prioritizes requiredText over optionalText for required fields', () => {
    render(
      <TextField
        label="Label"
        required
        requiredText="必須"
        optionalText="任意"
      />,
    )

    expect(screen.getByText('必須')).toBeInTheDocument()
    expect(screen.queryByText('任意')).not.toBeInTheDocument()
  })

  it('passes required to the input element', () => {
    const { getByRole } = render(<TextField required />)

    expect(getByRole('textbox')).toBeRequired()
  })

  it('should not render prefix and suffix when not provided', () => {
    const { container } = render(<TextField />)

    // prefix and suffix elements should not be rendered
    const prefixElement = container.querySelector('.charcoal-text-field-prefix')
    const suffixElement = container.querySelector('.charcoal-text-field-suffix')

    expect(prefixElement).toBeNull()
    expect(suffixElement).toBeNull()
  })

  test.each([
    [null, 'null'],
    [undefined, 'undefined'],
    ['', 'empty string'],
    [false, 'boolean false'],
    [0, 'zero'],
  ])(
    'should not render prefix when value is falsy (%s: %s)',
    (prefixValue, _desc) => {
      const { container } = render(<TextField prefix={prefixValue} />)
      const prefixElement = container.querySelector('.charcoal-text-prefix')
      expect(prefixElement).toBeNull()
    },
  )

  test.each([
    [null, 'null'],
    [undefined, 'undefined'],
    ['', 'empty string'],
    [false, 'boolean false'],
    [0, 'zero'],
  ])(
    'should not render suffix when value is falsy (%s: %s) and showCount is false',
    (suffixValue, _desc) => {
      const { container } = render(
        <TextField suffix={suffixValue} showCount={false} />,
      )
      const suffixElement = container.querySelector(
        '.charcoal-text-field-suffix',
      )
      expect(suffixElement).toBeNull()
    },
  )

  it('should render prefix and suffix when provided as truthy values', () => {
    const prefixContent = 'Test Prefix'
    const suffixContent = 'Test Suffix'
    const { container, getByText } = render(
      <TextField
        prefix={<span>{prefixContent}</span>}
        suffix={<span>{suffixContent}</span>}
      />,
    )

    const prefixElement = container.querySelector('.charcoal-text-field-prefix')
    const suffixElement = container.querySelector('.charcoal-text-field-suffix')

    expect(prefixElement).not.toBeNull()
    expect(suffixElement).not.toBeNull()

    // Verify text content
    expect(getByText(prefixContent)).toBeInTheDocument()
    expect(getByText(suffixContent)).toBeInTheDocument()
  })
})
