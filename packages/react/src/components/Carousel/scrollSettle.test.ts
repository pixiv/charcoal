import { afterEach, describe, expect, it, vi } from 'vitest'
import { onScrollSettle } from './scrollSettle'

afterEach(() => {
  vi.useRealTimers()
  Reflect.deleteProperty(window, 'onscrollend')
})

describe('onScrollSettle', () => {
  it('scrollend 対応環境ではブラウザのイベントで発火する', () => {
    // jsdom には onscrollend が無いので、対応環境として振る舞わせる
    Object.defineProperty(window, 'onscrollend', {
      value: null,
      configurable: true,
      writable: true,
    })
    const el = document.createElement('div')
    const fn = vi.fn()
    const stop = onScrollSettle(el, fn)

    el.dispatchEvent(new Event('scrollend'))
    expect(fn).toHaveBeenCalledTimes(1)

    stop()
    el.dispatchEvent(new Event('scrollend'))
    expect(fn).toHaveBeenCalledTimes(1)
  })

  it('非対応環境では scroll の途切れで 1 回だけ発火する', () => {
    vi.useFakeTimers()
    try {
      const el = document.createElement('div')
      const fn = vi.fn()
      const stop = onScrollSettle(el, fn)

      el.dispatchEvent(new Event('scroll'))
      vi.advanceTimersByTime(50)
      el.dispatchEvent(new Event('scroll'))
      vi.advanceTimersByTime(50)
      // 直近の scroll から 100ms 経っていないのでまだ発火しない
      expect(fn).not.toHaveBeenCalled()

      vi.advanceTimersByTime(50)
      expect(fn).toHaveBeenCalledTimes(1)

      stop()
    } finally {
      vi.useRealTimers()
    }
  })

  it('解除すると保留中の発火もキャンセルされる', () => {
    vi.useFakeTimers()
    try {
      const el = document.createElement('div')
      const fn = vi.fn()
      const stop = onScrollSettle(el, fn)

      el.dispatchEvent(new Event('scroll'))
      stop()
      vi.advanceTimersByTime(200)
      expect(fn).not.toHaveBeenCalled()
    } finally {
      vi.useRealTimers()
    }
  })
})
