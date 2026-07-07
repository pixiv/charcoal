import { describe, expect, it } from 'vitest'
import {
  computeCenterScrollLeft,
  computeLoopTeleport,
  isLoopActive,
  measureLoopGeometry,
} from './carouselLoop'

// 維持帯域は [0.5 * setWidth, 1.5 * setWidth) = [500, 1500)
const geometry = { setWidth: 1000, clientWidth: 600, maxScroll: 2400 }

describe('computeLoopTeleport', () => {
  it('帯域内では null（テレポート不要）', () => {
    expect(computeLoopTeleport(500, geometry)).toBeNull()
    expect(computeLoopTeleport(1000, geometry)).toBeNull()
    expect(computeLoopTeleport(1499, geometry)).toBeNull()
  })

  it('帯域より左は +setWidth の合同位置へ丸める', () => {
    expect(computeLoopTeleport(499, geometry)).toBe(1499)
    expect(computeLoopTeleport(0, geometry)).toBe(1000)
  })

  it('帯域より右は −setWidth の合同位置へ丸める', () => {
    expect(computeLoopTeleport(1500, geometry)).toBe(500)
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
    expect(measureLoopGeometry(scroller, 3)).toEqual({
      setWidth: 300,
      clientWidth: 250,
      maxScroll: 650,
    })
  })

  it('子要素が 3n 揃っていなければ null', () => {
    expect(measureLoopGeometry(document.createElement('div'), 3)).toBeNull()
  })
})
