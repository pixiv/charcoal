import { fireEvent, render, screen } from '@testing-library/react'
import { beforeAll, vi } from 'vitest'
import DropdownSelector from '.'
import DropdownMenuItem from './DropdownMenuItem'

// Apple Pencil (pointerType: 'pen') の解除は index.browser.test.tsx で検証する。
// jsdom は inert を実装しておらず、react-aria が外側を inert にする本番の挙動を
// 再現できないため、ここでペンを扱うと通ってしまい実機の退行を見逃す。

// jsdom は PointerEvent を実装しておらず pointerType が落ちるため補う
class PointerEventPolyfill extends MouseEvent {
  readonly pointerType: string
  constructor(type: string, init: PointerEventInit = {}) {
    super(type, init)
    this.pointerType = init.pointerType ?? ''
  }
}

beforeAll(() => {
  vi.stubGlobal('PointerEvent', PointerEventPolyfill)
})

const getUnderlay = () => {
  const popover = document.querySelector('.charcoal-popover')
  const underlay = popover?.previousElementSibling
  if (!(underlay instanceof HTMLElement)) {
    throw new Error('underlay not found')
  }
  return underlay
}

describe('DropdownSelector', () => {
  describe('clearable placeholder', () => {
    const renderClearable = (
      value = '',
      onChange: (value: string) => void = vi.fn(),
      props: Partial<React.ComponentProps<typeof DropdownSelector>> = {},
    ) =>
      render(
        <DropdownSelector
          label="Label"
          value={value}
          placeholder="Select an option"
          clearable
          onChange={onChange}
          {...props}
        >
          <DropdownMenuItem value="1">Option 1</DropdownMenuItem>
          <DropdownMenuItem value="2">Option 2</DropdownMenuItem>
        </DropdownSelector>,
      )

    it('shows the placeholder on the trigger for the unselected value', () => {
      renderClearable()

      const placeholder = screen
        .getByRole('button')
        .querySelector('.charcoal-ui-dropdown-selector-text')
      expect(placeholder).toHaveAttribute('data-placeholder', 'true')
    })

    it('treats an empty value as unselected even when a child uses the reserved value', () => {
      render(
        <DropdownSelector
          label="Label"
          value=""
          placeholder="Select an option"
          onChange={vi.fn()}
        >
          <DropdownMenuItem value="">Child label</DropdownMenuItem>
        </DropdownSelector>,
      )

      const triggerText = screen
        .getByRole('button')
        .querySelector('.charcoal-ui-dropdown-selector-text')
      expect(triggerText).toHaveAttribute('data-placeholder', 'true')
      expect(triggerText).toHaveTextContent('Select an option')
    })

    it('shows the placeholder as the first Popover option', () => {
      renderClearable()

      fireEvent.click(screen.getByRole('button'))

      const options = screen.getAllByRole('option')
      expect(options[0]).toHaveAttribute('data-key', '')
      expect(options[0]).toHaveTextContent('Select an option')
    })

    it('returns to the unselected value and closes the Popover after selecting the placeholder', () => {
      const handleChange = vi.fn()
      const { rerender } = renderClearable('', handleChange)

      fireEvent.click(screen.getByRole('button'))
      fireEvent.click(screen.getByRole('option', { name: 'Option 1' }))
      expect(handleChange).toHaveBeenCalledWith('1')

      rerender(
        <DropdownSelector
          label="Label"
          value="1"
          placeholder="Select an option"
          clearable
          onChange={handleChange}
        >
          <DropdownMenuItem value="1">Option 1</DropdownMenuItem>
          <DropdownMenuItem value="2">Option 2</DropdownMenuItem>
        </DropdownSelector>,
      )
      fireEvent.click(screen.getByRole('button'))
      fireEvent.click(screen.getByRole('option', { name: 'Select an option' }))
      expect(handleChange).toHaveBeenCalledWith('')
      expect(document.querySelector('.charcoal-popover')).toBeNull()

      rerender(
        <DropdownSelector
          label="Label"
          value=""
          placeholder="Select an option"
          clearable
          onChange={handleChange}
        >
          <DropdownMenuItem value="1">Option 1</DropdownMenuItem>
          <DropdownMenuItem value="2">Option 2</DropdownMenuItem>
        </DropdownSelector>,
      )
      expect(
        screen
          .getByRole('button')
          .querySelector('.charcoal-ui-dropdown-selector-text'),
      ).toHaveAttribute('data-placeholder', 'true')
    })

    it('does not add the placeholder option when clearable is omitted or false', () => {
      const { rerender } = render(
        <DropdownSelector
          label="Label"
          value=""
          placeholder="Select an option"
          onChange={vi.fn()}
        >
          <DropdownMenuItem value="1">Option 1</DropdownMenuItem>
        </DropdownSelector>,
      )

      fireEvent.click(screen.getByRole('button'))
      expect(screen.getAllByRole('option')).toHaveLength(1)
      expect(
        screen.queryByRole('option', { name: 'Select an option' }),
      ).toBeNull()

      const underlay = getUnderlay()
      fireEvent.pointerDown(underlay, { pointerType: 'mouse', button: 0 })
      fireEvent.pointerUp(underlay, { pointerType: 'mouse', button: 0 })
      fireEvent.click(underlay, { button: 0 })
      rerender(
        <DropdownSelector
          label="Label"
          value=""
          placeholder="Select an option"
          clearable={false}
          onChange={vi.fn()}
        >
          <DropdownMenuItem value="1">Option 1</DropdownMenuItem>
        </DropdownSelector>,
      )
      fireEvent.click(screen.getByRole('button'))
      expect(screen.getAllByRole('option')).toHaveLength(1)
    })

    it('does not add an empty option without a placeholder', () => {
      render(
        <DropdownSelector label="Label" value="" clearable onChange={vi.fn()}>
          <DropdownMenuItem value="1">Option 1</DropdownMenuItem>
        </DropdownSelector>,
      )

      fireEvent.click(screen.getByRole('button'))
      expect(screen.getAllByRole('option')).toHaveLength(1)
      expect(screen.getByRole('option')).toHaveAttribute('data-key', '1')
    })

    it('keeps the hidden select synchronized with one unselected option', () => {
      const { container } = renderClearable()

      const select = container.querySelector('select')
      expect(select).not.toBeNull()
      expect(select?.value).toBe('')
      expect(
        Array.from(select?.options ?? []).map((option) => option.value),
      ).toEqual(['', '1', '2'])
    })

    it('moves focus between the placeholder and normal options with arrow keys', () => {
      renderClearable()

      fireEvent.click(screen.getByRole('button'))
      const placeholder = screen.getByRole('option', {
        name: 'Select an option',
      })
      const firstOption = screen.getByRole('option', { name: 'Option 1' })

      expect(placeholder).toHaveFocus()
      fireEvent.keyDown(placeholder, { key: 'ArrowDown' })
      expect(firstOption).toHaveFocus()
      fireEvent.keyDown(firstOption, { key: 'ArrowUp' })
      expect(placeholder).toHaveFocus()
    })

    it('selects the placeholder with Enter', () => {
      const handleChange = vi.fn()
      renderClearable('', handleChange)

      fireEvent.click(screen.getByRole('button'))
      const placeholder = screen.getByRole('option', {
        name: 'Select an option',
      })
      fireEvent.keyDown(placeholder, { key: 'Enter' })

      expect(handleChange).toHaveBeenCalledWith('')
      expect(document.querySelector('.charcoal-popover')).toBeNull()
    })
  })

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

  describe.each([
    ['inertWorkaround が無効', false],
    ['inertWorkaround が有効', true],
  ])('%s なとき', (_, inertWorkaround) => {
    it('マウスで overlay をクリックすると閉じる', () => {
      render(
        <DropdownSelector
          label="Label"
          value="1"
          onChange={vi.fn()}
          inertWorkaround={inertWorkaround}
        >
          <DropdownMenuItem value="1">Option 1</DropdownMenuItem>
          <DropdownMenuItem value="2">Option 2</DropdownMenuItem>
        </DropdownSelector>,
      )

      fireEvent.click(screen.getByRole('button'))
      expect(document.querySelector('.charcoal-popover')).not.toBeNull()

      const underlay = getUnderlay()
      fireEvent.pointerDown(underlay, { pointerType: 'mouse', button: 0 })
      fireEvent.pointerUp(underlay, { pointerType: 'mouse', button: 0 })
      fireEvent.click(underlay, { button: 0 })

      expect(document.querySelector('.charcoal-popover')).toBeNull()
    })
  })
})
