import { fireEvent, render, screen } from '@testing-library/react'
import { useState } from 'react'
import { beforeAll, vi } from 'vitest'
import DropdownSelector from '.'
import DropdownMenuItem from './DropdownMenuItem'
import MenuItemGroup from './MenuItemGroup'

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
  it('clears the controlled value through a noSelection item', () => {
    const handleChange = vi.fn()
    function Example() {
      const [value, setValue] = useState('popular')
      return (
        <DropdownSelector
          label="Sort"
          value={value}
          placeholder="Select an option"
          onChange={(next) => {
            handleChange(next)
            setValue(next)
          }}
        >
          <DropdownMenuItem noSelection>None</DropdownMenuItem>
          <DropdownMenuItem value="popular">Popular</DropdownMenuItem>
        </DropdownSelector>
      )
    }

    const { container } = render(<Example />)
    fireEvent.click(screen.getByRole('button'))
    fireEvent.click(screen.getByRole('option', { name: 'None' }))

    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith('')
    expect(document.querySelector('.charcoal-popover')).toBeNull()
    expect(screen.getByRole('button')).toHaveTextContent('Select an option')
    expect(container.querySelector('select')?.value).toBe('')
    expect(container.querySelectorAll('option[value=""]').length).toBe(1)
  })

  it('supports keyboard selection and navigation for noSelection items', () => {
    const handleChange = vi.fn()
    render(
      <DropdownSelector label="Sort" value="popular" onChange={handleChange}>
        <DropdownMenuItem noSelection>None</DropdownMenuItem>
        <DropdownMenuItem value="popular">Popular</DropdownMenuItem>
        <DropdownMenuItem value="new" disabled>
          New
        </DropdownMenuItem>
      </DropdownSelector>,
    )

    fireEvent.click(screen.getByRole('button'))
    const popular = screen.getByRole('option', { name: 'Popular' })
    expect(popular).toHaveFocus()
    fireEvent.keyDown(popular, { key: 'ArrowUp' })
    const none = screen.getByRole('option', { name: 'None' })
    expect(none).toHaveFocus()
    fireEvent.keyDown(none, { key: 'Enter' })

    expect(handleChange).toHaveBeenCalledWith('')
  })

  it('does not mark a noSelection item as selected', () => {
    render(
      <DropdownSelector label="Sort" value="" onChange={vi.fn()}>
        <DropdownMenuItem noSelection>None</DropdownMenuItem>
        <DropdownMenuItem value="popular">Popular</DropdownMenuItem>
      </DropdownSelector>,
    )

    fireEvent.click(screen.getByRole('button'))
    expect(screen.getByRole('option', { name: 'None' })).toHaveAttribute(
      'aria-selected',
      'false',
    )
    expect(document.querySelector('[data-selected="true"]')).toBeNull()
    expect(screen.getByRole('option', { name: 'None' })).toHaveAttribute(
      'data-no-selection',
      'true',
    )
  })

  it('clears through the pen pointer path', () => {
    const handleChange = vi.fn()
    render(
      <DropdownSelector label="Sort" value="popular" onChange={handleChange}>
        <DropdownMenuItem noSelection>None</DropdownMenuItem>
        <DropdownMenuItem value="popular">Popular</DropdownMenuItem>
      </DropdownSelector>,
    )

    fireEvent.click(screen.getByRole('button'))
    const none = screen.getByRole('option', { name: 'None' })
    fireEvent.pointerDown(none, { pointerType: 'pen', clientX: 0, clientY: 0 })
    fireEvent.pointerUp(none, { pointerType: 'pen', clientX: 0, clientY: 0 })

    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith('')
  })

  it('includes noSelection items in groups and skips disabled items while navigating', () => {
    render(
      <DropdownSelector label="Sort" value="popular" onChange={vi.fn()}>
        <DropdownMenuItem value="popular">Popular</DropdownMenuItem>
        <MenuItemGroup text="Other">
          <DropdownMenuItem noSelection disabled>
            Disabled none
          </DropdownMenuItem>
          <DropdownMenuItem noSelection>None</DropdownMenuItem>
        </MenuItemGroup>
      </DropdownSelector>,
    )

    fireEvent.click(screen.getByRole('button'))
    const popular = screen.getByRole('option', { name: 'Popular' })
    fireEvent.keyDown(popular, { key: 'ArrowDown' })
    expect(screen.getByRole('option', { name: 'None' })).toHaveFocus()
  })

  it('focuses the noSelection item only in the opened popover', () => {
    render(
      <>
        <DropdownSelector label="First" value="" onChange={vi.fn()}>
          <DropdownMenuItem noSelection>First none</DropdownMenuItem>
          <DropdownMenuItem value="popular">Popular</DropdownMenuItem>
        </DropdownSelector>
        <DropdownSelector label="Second" value="" onChange={vi.fn()}>
          <DropdownMenuItem noSelection>Second none</DropdownMenuItem>
          <DropdownMenuItem value="popular">Popular</DropdownMenuItem>
        </DropdownSelector>
      </>,
    )

    fireEvent.click(screen.getByRole('button', { name: 'Second' }))
    expect(screen.getByRole('option', { name: 'Second none' })).toHaveFocus()
  })

  it('skips a disabled noSelection item when initially focusing an unselected menu', () => {
    render(
      <DropdownSelector label="Sort" value="" onChange={vi.fn()}>
        <DropdownMenuItem noSelection disabled>
          Disabled none
        </DropdownMenuItem>
        <DropdownMenuItem value="popular">Popular</DropdownMenuItem>
      </DropdownSelector>,
    )

    fireEvent.click(screen.getByRole('button'))
    expect(screen.getByRole('option', { name: 'Popular' })).toHaveFocus()
  })

  it('warns for invalid noSelection children', () => {
    const error = vi.spyOn(console, 'error').mockImplementation(() => undefined)
    render(
      <DropdownSelector label="Sort" value="" onChange={vi.fn()}>
        <DropdownMenuItem noSelection value="popular">
          Invalid
        </DropdownMenuItem>
        <DropdownMenuItem noSelection>Also invalid</DropdownMenuItem>
      </DropdownSelector>,
    )

    fireEvent.click(screen.getByRole('button'))

    expect(error).toHaveBeenCalled()
    error.mockRestore()
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
