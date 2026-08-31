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
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
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
  it('Apple Pencil で overlay の外側をタップすると閉じる', async () => {
    renderSelector(inertWorkaround)

    penTap(screen.getByRole('button'))
    expect(popover()).not.toBeNull()

    penTap(hitTestOutsidePopover())

    await waitFor(() => {
      expect(popover()).toBeNull()
    })
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

it('inertWorkaround が有効なとき、開いた直後に underlay へ送られる互換 click では閉じない', () => {
  renderSelector(true)

  penTap(screen.getByRole('button'))
  expect(popover()).not.toBeNull()

  // Android Chrome はペンの pointerup 後、underlay 上の pointerdown を伴わない
  // mouse / click イベントを新しく追加された underlay に送る。
  const underlay = getUnderlay()
  fireEvent.mouseDown(underlay)
  fireEvent.mouseUp(underlay)
  fireEvent.click(underlay)

  expect(popover()).not.toBeNull()
})

it('ペンで外側をタップしたとき、下にあるクリック可能な要素をクリックせずに閉じる', async () => {
  const handleBackgroundClick = vi.fn()
  render(
    <>
      <DropdownSelector
        label="Label"
        value="1"
        onChange={vi.fn()}
        inertWorkaround
      >
        <DropdownMenuItem value="1">Option 1</DropdownMenuItem>
        <DropdownMenuItem value="2">Option 2</DropdownMenuItem>
      </DropdownSelector>
      <button
        type="button"
        onClick={handleBackgroundClick}
        style={{ position: 'fixed', right: 16, bottom: 16 }}
      >
        Background button
      </button>
    </>,
  )

  penTap(screen.getByRole('button', { name: 'Label' }))
  expect(popover()).not.toBeNull()

  const backgroundButton = screen.getByRole('button', {
    name: 'Background button',
  })
  const rect = backgroundButton.getBoundingClientRect()
  const point = {
    x: Math.round(rect.left + rect.width / 2),
    y: Math.round(rect.top + rect.height / 2),
  }
  const pointerTarget = document.elementFromPoint(point.x, point.y)
  if (pointerTarget === null) throw new Error('pointer target not found')

  fireEvent.pointerDown(pointerTarget, {
    pointerType: 'pen',
    button: 0,
    composed: true,
  })
  // Android Chrome はこの touchstart がキャンセルされた場合、後続の互換
  // mouse / click イベントを生成しない。
  expect(fireEvent.touchStart(pointerTarget)).toBe(false)
  fireEvent.pointerUp(pointerTarget, {
    pointerType: 'pen',
    button: 0,
    composed: true,
  })

  await waitFor(() => {
    expect(popover()).toBeNull()
  })
  expect(handleBackgroundClick).not.toHaveBeenCalled()
})

it('underlay は inertWorkaround が無効なとき inert になる', () => {
  renderSelector(false)
  penTap(screen.getByRole('button'))

  expect('inert' in HTMLElement.prototype).toBe(true)
  expect(getUnderlay().inert).toBe(true)
})
