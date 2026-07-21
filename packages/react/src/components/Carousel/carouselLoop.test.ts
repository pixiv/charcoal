import { describe, expect, it } from 'vitest'
import {
  computeCenterScrollLeft,
  computeLoopCloneCount,
  computeLoopTeleport,
  isLoopActive,
  measureLoopGeometry,
} from './carouselLoop'

// 維持帯域は [bandLower, bandLower + setWidth) = [500, 1500)
const geometry = {
  setWidth: 1000,
  bandLower: 500,
  clientWidth: 600,
}

describe('computeLoopTeleport', () => {
  it('帯域内では null（テレポート不要）', () => {
    expect(computeLoopTeleport(500, geometry)).toBeNull()
    expect(computeLoopTeleport(1000, geometry)).toBeNull()
    expect(computeLoopTeleport(1499, geometry)).toBeNull()
  })

  it('帯域境界から誤差スケールの逸脱は帯域内とみなす（snap 補正との往復振動を防ぐ）', () => {
    expect(computeLoopTeleport(497, geometry)).toBeNull()
    expect(computeLoopTeleport(1503, geometry)).toBeNull()
  })

  it('帯域より左は +setWidth の合同位置へ丸める', () => {
    expect(computeLoopTeleport(490, geometry)).toBe(1490)
    expect(computeLoopTeleport(0, geometry)).toBe(1000)
  })

  it('帯域より右は −setWidth の合同位置へ丸める', () => {
    expect(computeLoopTeleport(1510, geometry)).toBe(510)
    expect(computeLoopTeleport(2400, geometry)).toBe(1400)
  })

  it('1 周以上外れていても 1 回の呼び出しで帯域へ丸める', () => {
    expect(computeLoopTeleport(2600, geometry)).toBe(600)
  })

  it('setWidth が 0 以下なら null', () => {
    expect(computeLoopTeleport(0, { ...geometry, setWidth: 0 })).toBeNull()
  })
})

describe('computeCenterScrollLeft', () => {
  it('指定 item の中央が viewport 中央になる scrollLeft を返す', () => {
    // item 中央 (1000 + 400/2) − viewport 半分 (600/2) = 900（帯域内）
    expect(
      computeCenterScrollLeft({ offsetLeft: 1000, offsetWidth: 400 }, geometry),
    ).toBe(900)
  })

  it('帯域を超える位置は合同位置へ正規化する', () => {
    // raw = 1800 + 200 − 300 = 1700 → −setWidth で 700
    expect(
      computeCenterScrollLeft({ offsetLeft: 1800, offsetWidth: 400 }, geometry),
    ).toBe(700)
  })
})

describe('isLoopActive', () => {
  it('実セット幅が viewport より広ければ成立', () => {
    expect(isLoopActive(geometry)).toBe(true)
  })

  it('実セット幅 ≤ viewport では不成立', () => {
    expect(isLoopActive({ ...geometry, setWidth: 600 })).toBe(false)
  })
})

describe('measureLoopGeometry', () => {
  it('clone-after 先頭と実セット先頭の offsetLeft 差を setWidth とする', () => {
    const scroller = document.createElement('div')
    for (let i = 0; i < 9; i++) {
      const child = document.createElement('div')
      Object.defineProperty(child, 'offsetLeft', { value: i * 100 })
      scroller.append(child)
    }
    Object.defineProperty(scroller, 'clientWidth', { value: 250 })
    Object.defineProperty(scroller, 'scrollWidth', { value: 900 })
    expect(measureLoopGeometry(scroller, 3, 3)).toEqual({
      setWidth: 300,
      // スクロール可能域中央: (650 − 300) / 2
      bandLower: 175,
      clientWidth: 250,
    })
  })

  it('clone 込みの子要素が揃っていなければ null', () => {
    expect(measureLoopGeometry(document.createElement('div'), 3, 3)).toBeNull()
  })
})

describe('computeLoopCloneCount', () => {
  // 400px スロット（幅 380 + 間隔 20）の item 6 枚
  const items = Array.from({ length: 6 }, (_, i) => ({
    offsetLeft: i * 400,
    offsetWidth: 380,
  }))

  it('各端の累積幅が 1.5 viewport を覆う最小枚数 + 1 を返す', () => {
    // 被覆要求 = 800 × 1.5 = 1200。4 枚で 1580 ≥ 1200（3 枚では 1180）→ 4 + 1 = 5
    expect(computeLoopCloneCount(items, 800)).toBe(5)
  })

  it('全枚数でも viewport を覆えなければ全枚数に丸める', () => {
    expect(computeLoopCloneCount(items, 10000)).toBe(6)
  })

  it('item が無ければ 0', () => {
    expect(computeLoopCloneCount([], 800)).toBe(0)
  })
})
