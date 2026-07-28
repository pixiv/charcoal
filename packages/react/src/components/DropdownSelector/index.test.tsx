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
