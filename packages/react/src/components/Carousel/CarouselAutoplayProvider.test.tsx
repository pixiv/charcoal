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
