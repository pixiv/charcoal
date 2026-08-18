/**
 * Apple Pencil (pointerType: 'pen') での overlay 解除テスト
 *
 * jsdom では検証できないため実ブラウザで実行する:
 *
 * 1. jsdom は inert を実装していない (`'inert' in HTMLElement.prototype` が false)。
 *    そのため react-aria の ariaHideOutside は aria-hidden にフォールバックし、
 *    「inert 要素はポインタイベントを受け取らない」という本番の挙動が再現されない。
 * 2. jsdom は PointerEvent を実装しておらず pointerType が落ちる。
 *
 * iOS Safari は非インタラクティブな要素へのペン入力で click を合成しないため、
 * click に依存する react-aria の外側判定では overlay を閉じられない。
 */
import { fireEvent, render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import DropdownSelector from '.'
import DropdownMenuItem from './DropdownMenuItem'

/** Apple Pencil のタップは iOS Safari で click を伴わない */
const penTap = (element: Element) => {
  const init = { pointerType: 'pen', button: 0, composed: true }
  fireEvent.pointerDown(element, init)
  fireEvent.pointerUp(element, init)
}

const popover = () => document.querySelector('.charcoal-popover')

const getUnderlay = () => {
  const underlay = popover()?.previousElementSibling
  if (!(underlay instanceof HTMLElement)) throw new Error('underlay not found')
  return underlay
}

/** ブラウザが実際にヒットテストする要素。inert / pointer-events を反映する */
const hitTestOutsidePopover = () => {
  const rect = popover()?.getBoundingClientRect()
  if (!rect) throw new Error('popover not found')
  const target = document.elementFromPoint(
    Math.round(rect.left + rect.width / 2),
    Math.round(rect.bottom + 40),
  )
  if (target === null) throw new Error('no element at point')
  return target
}

const renderSelector = (inertWorkaround: boolean) =>
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

describe.each([
  ['inertWorkaround が無効', false],
  ['inertWorkaround が有効', true],
])('%s なとき', (_, inertWorkaround) => {
  it('Apple Pencil で overlay の外側をタップすると閉じる', () => {
    renderSelector(inertWorkaround)

    penTap(screen.getByRole('button'))
    expect(popover()).not.toBeNull()

    penTap(hitTestOutsidePopover())

    expect(popover()).toBeNull()
  })

  // 選択肢のタップは onChange 経由で閉じるのが仕様なので、余白部分を叩く
  it('Apple Pencil で popover の余白をタップしても閉じない', () => {
    renderSelector(inertWorkaround)

    penTap(screen.getByRole('button'))
    const inside = popover()
    if (inside === null) throw new Error('popover not found')

    penTap(inside)

    expect(popover()).not.toBeNull()
  })
})

it('underlay は inertWorkaround が無効なとき inert になる', () => {
  renderSelector(false)
  penTap(screen.getByRole('button'))

  expect('inert' in HTMLElement.prototype).toBe(true)
  expect(getUnderlay().inert).toBe(true)
})
