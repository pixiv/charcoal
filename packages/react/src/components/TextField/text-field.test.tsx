import { render, screen } from '@testing-library/react'
import TextField from '.'

import '@testing-library/jest-dom'

describe('TextField component', () => {
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

  it('renders string assistive text as the input accessible description', () => {
    render(<TextField assistiveText="Enter your public display name" />)

    expect(
      screen.getByText('Enter your public display name'),
    ).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toHaveAccessibleDescription(
      'Enter your public display name',
    )
  })

  it('renders assistive text containing a link as the input accessible description', () => {
    render(
      <TextField
        assistiveText={
          <>
            Read the <a href="/display-name-guide">display name guide</a>
          </>
        }
      />,
    )

    expect(
      screen.getByRole('link', { name: 'display name guide' }),
    ).toHaveAttribute('href', '/display-name-guide')
    expect(screen.getByRole('textbox')).toHaveAccessibleDescription(
      'Read the display name guide',
    )
  })

  test.each([
    [undefined, 'undefined'],
    [null, 'null'],
    ['', 'empty string'],
    [false, 'false'],
    [true, 'true'],
  ])(
    'does not render assistive text or aria-describedby for %s',
    (assistiveText, _description) => {
      const { container } = render(<TextField assistiveText={assistiveText} />)

      expect(
        container.querySelector('.charcoal-text-field-assistive-text'),
      ).toBeNull()
      expect(screen.getByRole('textbox')).not.toHaveAttribute(
        'aria-describedby',
      )
    },
  )

  it('renders zero as assistive text and associates it with the input', () => {
    render(<TextField assistiveText={0} />)

    expect(screen.getByText('0')).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toHaveAccessibleDescription('0')
  })

  it('renders element, Fragment, and array assistive text', () => {
    const { rerender } = render(
      <TextField assistiveText={<span>Element assistive text</span>} />,
    )
    expect(screen.getByRole('textbox')).toHaveAccessibleDescription(
      'Element assistive text',
    )

    rerender(
      <TextField
        assistiveText={
          <>
            Fragment assistive <span>text</span>
          </>
        }
      />,
    )
    expect(screen.getByRole('textbox')).toHaveAccessibleDescription(
      'Fragment assistive text',
    )

    rerender(
      <TextField
        assistiveText={['Array assistive ', <span key="text">text</span>]}
      />,
    )
    expect(screen.getByRole('textbox')).toHaveAccessibleDescription(
      'Array assistive text',
    )
  })

  it('keeps invalid attributes while rendering node assistive text', () => {
    render(
      <TextField
        invalid
        assistiveText={
          <>
            Invalid input: <a href="/help">Get help</a>
          </>
        }
      />,
    )

    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByRole('textbox')).toHaveAttribute('data-invalid', 'true')
    expect(screen.getByRole('link', { name: 'Get help' })).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toHaveAccessibleDescription(
      'Invalid input: Get help',
    )
  })

  it('does not disable links in assistive text when the field is disabled', () => {
    render(
      <TextField
        disabled
        assistiveText={<a href="/accessibility-help">Accessibility help</a>}
      />,
    )

    expect(screen.getByRole('textbox')).toBeDisabled()
    expect(
      screen.getByRole('link', { name: 'Accessibility help' }),
    ).not.toHaveAttribute('disabled')
  })
})
