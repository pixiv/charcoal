import { act, renderHook } from '@testing-library/react'
import { afterEach, beforeAll, describe, expect, it, vi } from 'vitest'
import { useHoverPause } from './useHoverPause'

// jsdom は :hover のライブ判定を持たず matches(':hover') が常に true を返すため、
// テストから制御できるように :hover だけ差し替える（既定は「乗っていない」）。
let stubbedHover = false
beforeAll(() => {
  const originalMatches = Element.prototype.matches
  vi.spyOn(Element.prototype, 'matches').mockImplementation(function (
    this: Element,
    selector: string,
  ) {
    return selector === ':hover'
      ? stubbedHover
      : originalMatches.call(this, selector)
  })
})
afterEach(() => {
  stubbedHover = false
})

const setup = (enabled = true) => {
  const el = document.createElement('div')
  document.body.appendChild(el)
  const ref = { current: el }
  const hook = renderHook(
    ({ enabled }: { enabled: boolean }) => useHoverPause(ref, enabled),
    { initialProps: { enabled } },
  )
  return { el, ...hook }
}

const pointer = (type: string, pointerType: string) =>
  Object.assign(new Event(type), { pointerType })

describe('useHoverPause', () => {
  it('pointerenter(mouse) で true、pointerleave で false', () => {
    const { el, result } = setup()
    expect(result.current).toBe(false)
    act(() => {
      el.dispatchEvent(pointer('pointerenter', 'mouse'))
    })
    expect(result.current).toBe(true)
    act(() => {
      el.dispatchEvent(pointer('pointerleave', 'mouse'))
    })
    expect(result.current).toBe(false)
  })

  it('touch の pointerenter は無視する', () => {
    const { el, result } = setup()
    act(() => {
      el.dispatchEvent(pointer('pointerenter', 'touch'))
    })
    expect(result.current).toBe(false)
  })

  it('enabled が false なら常に false', () => {
    const { el, result } = setup(false)
    act(() => {
      el.dispatchEvent(pointer('pointerenter', 'mouse'))
    })
    expect(result.current).toBe(false)
  })

  it('マウント時に既に :hover なら true から始まる', () => {
    stubbedHover = true
    const { result } = setup()
    expect(result.current).toBe(true)
  })

  it('enabled が true になった時点で :hover を種付けし、false に戻せば false になる', () => {
    stubbedHover = true
    const { result, rerender } = setup(false)
    expect(result.current).toBe(false)
    rerender({ enabled: true })
    expect(result.current).toBe(true)
    rerender({ enabled: false })
    expect(result.current).toBe(false)
  })
})
