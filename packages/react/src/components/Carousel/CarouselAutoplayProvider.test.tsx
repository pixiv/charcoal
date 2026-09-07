import { render } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { AutoplayProvider } from './CarouselAutoplayProvider'
import { createScrollIntent } from './scrollIntent'

const setup = (
  overrides: Partial<{
    interval: number | null
    paused: boolean
    advance: () => void
  }> = {},
) => {
  const intent = createScrollIntent()
  const advance = vi.fn()
  const initial = { interval: 1000, paused: false, advance, ...overrides }
  const { rerender, unmount } = render(
    <AutoplayProvider {...initial} intent={intent} />,
  )
  return {
    intent,
    advance,
    unmount,
    rerender: (props: typeof initial) =>
      rerender(<AutoplayProvider {...props} intent={intent} />),
  }
}

describe('AutoplayProvider', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('interval ごとに advance を呼ぶ', () => {
    vi.useFakeTimers()
    try {
      const { advance } = setup()
      vi.advanceTimersByTime(999)
      expect(advance).not.toHaveBeenCalled()
      vi.advanceTimersByTime(1)
      expect(advance).toHaveBeenCalledTimes(1)
      vi.advanceTimersByTime(2000)
      expect(advance).toHaveBeenCalledTimes(3)
    } finally {
      vi.useRealTimers()
    }
  })

  it('interval が null ならタイマーを張らない', () => {
    vi.useFakeTimers()
    try {
      const { advance } = setup({ interval: null })
      expect(vi.getTimerCount()).toBe(0)
      vi.advanceTimersByTime(60_000)
      expect(advance).not.toHaveBeenCalled()
    } finally {
      vi.useRealTimers()
    }
  })

  it('paused の間は張らず、解除で張り直す', () => {
    vi.useFakeTimers()
    try {
      const { advance, rerender } = setup({ paused: true })
      vi.advanceTimersByTime(5000)
      expect(advance).not.toHaveBeenCalled()

      rerender({ interval: 1000, paused: false, advance })
      vi.advanceTimersByTime(1000)
      expect(advance).toHaveBeenCalledTimes(1)
    } finally {
      vi.useRealTimers()
    }
  })

  it('走行中（moving）の tick は送らず、到着（idle）から滞留を数え直す', () => {
    vi.useFakeTimers()
    try {
      const { advance, intent } = setup()
      intent.dispatch({ type: 'scroll' })
      vi.advanceTimersByTime(1000)
      expect(advance).not.toHaveBeenCalled()

      vi.advanceTimersByTime(500)
      intent.dispatch({ type: 'settle' })
      vi.advanceTimersByTime(999)
      expect(advance).not.toHaveBeenCalled()
      vi.advanceTimersByTime(1)
      expect(advance).toHaveBeenCalledTimes(1)
    } finally {
      vi.useRealTimers()
    }
  })

  it('指が触れている間（pointerDown）は送らない', () => {
    vi.useFakeTimers()
    try {
      const { advance, intent } = setup()
      intent.dispatch({ type: 'input', kind: 'pointer' })
      vi.advanceTimersByTime(1000)
      expect(advance).not.toHaveBeenCalled()

      intent.dispatch({ type: 'release' })
      vi.advanceTimersByTime(1000)
      expect(advance).toHaveBeenCalledTimes(1)
    } finally {
      vi.useRealTimers()
    }
  })

  it('prefers-reduced-motion: reduce の間は送らず、change で再開する', () => {
    vi.useFakeTimers()
    const original = window.matchMedia
    let onChange: (() => void) | undefined
    const matcher = {
      matches: true,
      addEventListener: vi.fn((_: string, cb: () => void) => {
        onChange = cb
      }),
      removeEventListener: vi.fn(),
    }
    window.matchMedia = vi.fn(
      () => matcher as unknown as MediaQueryList,
    ) as typeof window.matchMedia
    try {
      const { advance, unmount } = setup()
      expect(window.matchMedia).toHaveBeenCalledWith(
        '(prefers-reduced-motion: reduce)',
      )
      vi.advanceTimersByTime(5000)
      expect(advance).not.toHaveBeenCalled()

      matcher.matches = false
      onChange?.()
      vi.advanceTimersByTime(1000)
      expect(advance).toHaveBeenCalledTimes(1)

      unmount()
      expect(matcher.removeEventListener).toHaveBeenCalledWith(
        'change',
        expect.any(Function),
      )
    } finally {
      window.matchMedia = original
      vi.useRealTimers()
    }
  })

  it('advance が例外を投げても次の tick を張り直す', () => {
    vi.useFakeTimers()
    try {
      const advance = vi.fn().mockImplementationOnce(() => {
        throw new Error('boom')
      })
      setup({ advance })
      expect(() => vi.advanceTimersByTime(1000)).toThrow('boom')
      vi.advanceTimersByTime(1000)
      expect(advance).toHaveBeenCalledTimes(2)
    } finally {
      vi.useRealTimers()
    }
  })

  it('アンマウントでタイマーと購読が消える', () => {
    vi.useFakeTimers()
    try {
      const { advance, unmount, intent } = setup()
      unmount()
      expect(vi.getTimerCount()).toBe(0)
      intent.dispatch({ type: 'scroll' })
      intent.dispatch({ type: 'settle' })
      vi.advanceTimersByTime(5000)
      expect(advance).not.toHaveBeenCalled()
    } finally {
      vi.useRealTimers()
    }
  })
})
