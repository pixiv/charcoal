import { render, screen } from '@testing-library/react'
import TextArea from '.'

import '@testing-library/jest-dom'

describe('TextArea component', () => {
  it('counts defaultValue when value is not provided', () => {
    render(<TextArea showCount defaultValue="abc" />)

    expect(screen.getByRole('textbox')).toHaveValue('abc')
    expect(screen.getByText('3')).toBeInTheDocument()
  })

  it('treats a null controlled value as empty for the counter', () => {
    render(<TextArea showCount value={null as unknown as string} />)

    expect(screen.getByRole('textbox')).toHaveValue('')
    expect(screen.getByText('0')).toBeInTheDocument()
  })

  it('does not fall back to defaultValue when controlled value is null', () => {
    render(
      <TextArea
        showCount
        value={null as unknown as string}
        defaultValue="abc"
      />,
    )

    expect(screen.getByRole('textbox')).toHaveValue('')
    expect(screen.getByText('0')).toBeInTheDocument()
  })
})
