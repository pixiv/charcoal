import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import DropdownSelector from '.'
import DropdownMenuItem from './DropdownMenuItem'

describe('DropdownSelector', () => {
  describe('when `value` does not match any child `DropdownMenuItem`', () => {
    it('keeps the DOM `<select>.value` aligned with props `value` without breaking placeholder display', () => {
      const handleChange = vi.fn()
      const { container } = render(
        <DropdownSelector
          label="Label"
          value="missing-value"
          placeholder="Select an option"
          onChange={handleChange}
        >
          <DropdownMenuItem value="1">Option 1</DropdownMenuItem>
          <DropdownMenuItem value="2">Option 2</DropdownMenuItem>
        </DropdownSelector>,
      )

      const select = container.querySelector('select')
      const button = screen.getByRole('button')

      expect(select).not.toBeNull()
      expect(select?.value).toBe('missing-value')
      expect(button.textContent).toContain('Select an option')
    })
  })
})
