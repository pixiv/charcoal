/**
 * ナビゲーションボタンのヒットエリア検証（実ブラウザ）
 *
 * hasGradient の 72px フェード帯はページ送り操作の領域に見えるが、
 * クリック可能域が中央の 32px 円形ボタンだけだと、帯の残り部分の
 * クリックが背後のスライド（リンク等）に素通りしてしまう。
 * 帯全体がナビゲーションボタンのヒットエリアであることを
 * document.elementFromPoint のヒットテストで検証する。
 * （pointer-events / 擬似要素のヒットテストは jsdom では再現できない）
 */
import { userEvent } from '@vitest/browser/context'
import { render } from '@testing-library/react'
import Carousel from '.'

const EDGE_ZONE_WIDTH = 72

const slides = Array.from({ length: 10 }, (_, i) => (
  <div key={`slide-${i}`} style={{ width: 200, height: 160 }}>
    Slide {i}
  </div>
))

function renderCarousel() {
  const { container } = render(
    <div style={{ width: 400 }}>
      <Carousel size="M" hasGradient>
        {slides}
      </Carousel>
    </div>,
  )
  const viewport = container.querySelector(
    '.charcoal-carousel__viewport',
  ) as HTMLElement
  return { container, viewport, rect: viewport.getBoundingClientRect() }
}

function hitNavigationItem(x: number, y: number) {
  return document
    .elementFromPoint(x, y)
    ?.closest('.charcoal-carousel__navigation__item')
}

describe('navigation button hit area', () => {
  it('右端 72px 帯のクリックはスライドではなく next ボタンに届く', () => {
    const { rect } = renderCarousel()
    const centerY = rect.top + rect.height / 2

    // ボタン円（32px、帯の中央）の外側かつ帯の内側の点
    const nearEdge = hitNavigationItem(rect.right - 8, centerY)
    expect(nearEdge?.getAttribute('data-direction')).toBe('next')

    // ボタンの上下方向の外側（帯の上端付近）
    const aboveButton = hitNavigationItem(
      rect.right - EDGE_ZONE_WIDTH / 2,
      rect.top + 8,
    )
    expect(aboveButton?.getAttribute('data-direction')).toBe('next')
  })

  it('スクロール不能な側（初期位置の prev）の帯はスライドへ素通りする', () => {
    const { rect } = renderCarousel()
    const centerY = rect.top + rect.height / 2

    const hit = document.elementFromPoint(rect.left + 8, centerY)
    expect(hit?.closest('.charcoal-carousel__navigation__item')).toBeNull()
    expect(hit?.closest('.charcoal-carousel__scroller')).not.toBeNull()
  })

  it('帯のボタン外の点をクリックすると next へページ送りされる', async () => {
    const { container, viewport, rect } = renderCarousel()
    const scroller = container.querySelector(
      '.charcoal-carousel__scroller',
    ) as HTMLElement
    expect(scroller.scrollLeft).toBe(0)

    // trusted click とその後の scroll イベントは React の act() 管理外で
    // 発火するため、この区間だけ act 警告を無効化する。
    const g = globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }
    g.IS_REACT_ACT_ENVIRONMENT = false
    try {
      // viewport 左上基準・帯の内側かつボタン円の外側の座標を実クリックする
      await userEvent.click(viewport, {
        position: { x: rect.width - 8, y: 8 },
      })

      await vi.waitFor(() => {
        expect(scroller.scrollLeft).toBeGreaterThan(0)
      })
    } finally {
      g.IS_REACT_ACT_ENVIRONMENT = true
    }
  })

  it('帯の外側（中央領域）のクリックはスライドに届く', () => {
    const { rect } = renderCarousel()
    const centerY = rect.top + rect.height / 2

    const hit = document.elementFromPoint(rect.left + rect.width / 2, centerY)
    expect(hit?.closest('.charcoal-carousel__navigation__item')).toBeNull()
    expect(hit?.closest('.charcoal-carousel__scroller')).not.toBeNull()
  })
})
