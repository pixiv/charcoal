import { fireEvent, render } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { AutoplayProvider } from './CarouselAutoplayProvider'

type Props = Readonly<{ interval?: number; paused: boolean }>

const renderProvider = (props: Props) => {
  const advance = vi.fn()
  const view = render(<AutoplayProvider {...props} advance={advance} />)
  return {
    advance,
    el: view.container.firstElementChild as HTMLElement,
    unmount: view.unmount,
    update: (next: Props) =>
      view.rerender(<AutoplayProvider {...next} advance={advance} />),
  }
}

// この jsdom は onscrollend を持つので onScrollSettle は scrollend 経路を選ぶ
const settle = (el: HTMLElement) => fireEvent(el, new Event('scrollend'))

afterEach(() => {
  vi.useRealTimers()
})

describe('AutoplayProvider', () => {
  it('interval 経過で advance("auto") を呼ぶ', () => {
    vi.useFakeTimers()
    try {
      const { advance } = renderProvider({ interval: 3000, paused: false })
      vi.advanceTimersByTime(2999)
      expect(advance).not.toHaveBeenCalled()
      vi.advanceTimersByTime(1)
      expect(advance).toHaveBeenCalledExactlyOnceWith('auto')
    } finally {
      vi.useRealTimers()
    }
  })

  it('paused の間は呼ばず、解除すると滞留時間を頭から数え直す', () => {
    vi.useFakeTimers()
    try {
      const { advance, update } = renderProvider({
        interval: 3000,
        paused: true,
      })
      vi.advanceTimersByTime(9000)
      expect(advance).not.toHaveBeenCalled()

      update({ interval: 3000, paused: false })
      // 残り時間は保持しない
      vi.advanceTimersByTime(2999)
      expect(advance).not.toHaveBeenCalled()
      vi.advanceTimersByTime(1)
      expect(advance).toHaveBeenCalledTimes(1)
    } finally {
      vi.useRealTimers()
    }
  })

  it.each([undefined, 0, -1, Number.NaN, Number.POSITIVE_INFINITY])(
    'interval=%s では起動しない',
    (interval) => {
      vi.useFakeTimers()
      try {
        const { advance } = renderProvider({ interval, paused: false })
        vi.advanceTimersByTime(60_000)
        expect(advance).not.toHaveBeenCalled()
      } finally {
        vi.useRealTimers()
      }
    },
  )

  it('interval 未指定では matchMedia を購読しない', () => {
    // interval なし（autoplay 未指定の Carousel）まで matchMedia を購読すると、
    // autoplay を使わない既存の Carousel すべてに余分な購読とレンダーが付く。
    // window.matchMedia は setup の beforeAll で vi.fn() 化済みの共有インスタンスなので、
    // spyOn/restore で差し替えず呼び出し履歴だけをクリアして使う。
    const matchMedia = vi.mocked(window.matchMedia)
    matchMedia.mockClear()
    renderProvider({ paused: false })
    expect(matchMedia).not.toHaveBeenCalled()
  })

  it('matchMedia 非対応環境でも例外を投げず自動送りが動く', () => {
    // matchMedia を持たない window shim（consumer 側の古い jsdom 等）でも
    // マウント時に例外を投げてはならない。
    const original = window.matchMedia
    Reflect.deleteProperty(window, 'matchMedia')
    vi.useFakeTimers()
    try {
      const { advance } = renderProvider({ interval: 3000, paused: false })
      vi.advanceTimersByTime(3000)
      expect(advance).toHaveBeenCalledExactlyOnceWith('auto')
    } finally {
      vi.useRealTimers()
      window.matchMedia = original
    }
  })

  it('prefers-reduced-motion では起動しない', () => {
    // 差し替えたグローバルだけを局所的に戻す（setup の他の stub を巻き添えにしない）
    const origMatchMedia = window.matchMedia
    vi.stubGlobal(
      'matchMedia',
      vi.fn().mockImplementation((query: string) => ({
        matches: query.includes('prefers-reduced-motion'),
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    )
    vi.useFakeTimers()
    try {
      const { advance } = renderProvider({ interval: 3000, paused: false })
      vi.advanceTimersByTime(60_000)
      expect(advance).not.toHaveBeenCalled()
    } finally {
      vi.useRealTimers()
      vi.stubGlobal('matchMedia', origMatchMedia)
    }
  })

  it('prefers-reduced-motion の change に追従して起動・停止をやり直す', () => {
    // 差し替えたグローバルだけを局所的に戻す（setup の他の stub を巻き添えにしない）
    const origMatchMedia = window.matchMedia
    let matches = false
    let changeListener: (() => void) | undefined
    vi.stubGlobal(
      'matchMedia',
      vi.fn().mockImplementation((query: string) => ({
        get matches() {
          return matches
        },
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        // change リスナーを捕まえ、テストから matches の切り替わりを模擬する。
        addEventListener: vi.fn((type: string, cb: () => void) => {
          if (type === 'change') changeListener = cb
        }),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    )
    vi.useFakeTimers()
    try {
      const { advance } = renderProvider({ interval: 3000, paused: false })
      vi.advanceTimersByTime(3000)
      expect(advance).toHaveBeenCalledTimes(1)

      // OS 側で prefers-reduced-motion が有効になる（false → true）
      matches = true
      changeListener?.()
      vi.advanceTimersByTime(60_000)
      expect(advance).toHaveBeenCalledTimes(1)

      // 解除される（true → false）と滞留時間を頭から数え直して再開する
      matches = false
      changeListener?.()
      vi.advanceTimersByTime(2999)
      expect(advance).toHaveBeenCalledTimes(1)
      vi.advanceTimersByTime(1)
      expect(advance).toHaveBeenCalledTimes(2)
    } finally {
      vi.useRealTimers()
      vi.stubGlobal('matchMedia', origMatchMedia)
    }
  })

  it('マウント時にタイマーを 2 重に張らない', () => {
    // matchMedia の判定（matcher.matches）確定とタイマー起動を同期 1 パスで
    // 行っている（useMedia のような非同期 state 経由の tri-state を挟まない）。
    // 挟んだ場合、未確定値での先勝ちタイマーと確定後の張り直しで setTimeout が
    // 2 回積まれてしまう（advance の呼び出し回数だけでは見分けが付かない）。
    const setTimeoutSpy = vi.spyOn(window, 'setTimeout')
    try {
      const { unmount } = renderProvider({ interval: 3000, paused: false })
      expect(setTimeoutSpy).toHaveBeenCalledTimes(1)
      unmount()
    } finally {
      setTimeoutSpy.mockRestore()
    }
  })

  it('スクロール静止でタイマーが張り直される', () => {
    vi.useFakeTimers()
    try {
      const { advance, el } = renderProvider({ interval: 3000, paused: false })
      vi.advanceTimersByTime(2000)
      settle(el)
      // 張り直されていなければ、ここまでで元の 3000ms を超えて発火しているはず
      vi.advanceTimersByTime(2000)
      expect(advance).not.toHaveBeenCalled()
      vi.advanceTimersByTime(1000)
      expect(advance).toHaveBeenCalledTimes(1)
    } finally {
      vi.useRealTimers()
    }
  })

  it('advance が例外を投げても次のティックは張り直される', () => {
    vi.useFakeTimers()
    try {
      const advance = vi.fn(() => {
        throw new Error('boom')
      })
      render(
        <AutoplayProvider interval={3000} paused={false} advance={advance} />,
      )

      // 1 回目の例外で張り直しが飛ぶと、以降のティックは永久に来ない
      expect(() => vi.advanceTimersByTime(3000)).toThrow('boom')
      expect(advance).toHaveBeenCalledTimes(1)

      expect(() => vi.advanceTimersByTime(3000)).toThrow('boom')
      expect(advance).toHaveBeenCalledTimes(2)
    } finally {
      vi.useRealTimers()
    }
  })

  it('アンマウントでタイマーが止まる', () => {
    vi.useFakeTimers()
    try {
      const { advance, unmount } = renderProvider({
        interval: 3000,
        paused: false,
      })
      unmount()
      vi.advanceTimersByTime(60_000)
      expect(advance).not.toHaveBeenCalled()
    } finally {
      vi.useRealTimers()
    }
  })

  it('div 属性と children を透過して描画する', () => {
    const { container } = render(
      <AutoplayProvider
        paused={false}
        advance={vi.fn()}
        className="charcoal-carousel__scroller"
        tabIndex={0}
      >
        <span>slide</span>
      </AutoplayProvider>,
    )
    const el = container.firstElementChild as HTMLElement
    expect(el.tagName).toBe('DIV')
    expect(el).toHaveClass('charcoal-carousel__scroller')
    expect(el.tabIndex).toBe(0)
    expect(el.textContent).toBe('slide')
  })
})
