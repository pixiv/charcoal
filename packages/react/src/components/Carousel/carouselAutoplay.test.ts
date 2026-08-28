import { describe, expect, it } from 'vitest'
import { findNextSlideScrollLeft } from './carouselAutoplay'

// viewport 600px / スライド 200px × 5 枚・間隔なし
const items = Array.from({ length: 5 }, (_, i) => ({
  offsetLeft: i * 200,
  offsetWidth: 200,
}))

// loop 時は clone 帯があるので物理端に触れない（クランプしない）
const loopParams = {
  clientWidth: 600,
  maxScroll: 400,
  align: 'start',
  loop: true,
} as const

// 非 loop は scrollWidth 1000 − clientWidth 600 = 400 が上限
const flatParams = {
  clientWidth: 600,
  maxScroll: 400,
  align: 'start',
  loop: false,
} as const

describe('findNextSlideScrollLeft: align=start', () => {
  it('起点の次の静止位置を返す', () => {
    expect(
      findNextSlideScrollLeft(items, { ...loopParams, scrollLeft: 0 }),
    ).toBe(200)
    expect(
      findNextSlideScrollLeft(items, { ...loopParams, scrollLeft: 200 }),
    ).toBe(400)
  })

  it('起点が静止位置から手前へ数 px ずれていても 1 枚ぶん進む', () => {
    expect(
      findNextSlideScrollLeft(items, { ...loopParams, scrollLeft: 197 }),
    ).toBe(400)
  })

  it('起点が静止位置から先へ数 px ずれていても 1 枚ぶん進む', () => {
    expect(
      findNextSlideScrollLeft(items, { ...loopParams, scrollLeft: 203 }),
    ).toBe(400)
  })
})

describe('findNextSlideScrollLeft: align=center', () => {
  // 中央位置 = offsetLeft + 100 − 300 → −200, 0, 200, 400, 600
  it('中央に置く位置を返す', () => {
    expect(
      findNextSlideScrollLeft(items, {
        ...loopParams,
        align: 'center',
        scrollLeft: 0,
      }),
    ).toBe(200)
  })

  it('非 loop の先頭ではクランプで潰れた重複を飛ばして前進する', () => {
    // クランプ後 → 0, 0, 200, 400, 400。0 に居るとき次は 200
    expect(
      findNextSlideScrollLeft(items, {
        ...flatParams,
        align: 'center',
        scrollLeft: 0,
      }),
    ).toBe(200)
  })
})

describe('findNextSlideScrollLeft: 端の扱い', () => {
  it('loop は末尾実スライドから clone-after 帯の先頭へ前進する（逆走しない）', () => {
    // 実セット 5 枚の後ろに clone-after 帯 3 枚が続く DOM 順の列
    const withCloneBand = [
      ...items,
      { offsetLeft: 1000, offsetWidth: 200 },
      { offsetLeft: 1200, offsetWidth: 200 },
      { offsetLeft: 1400, offsetWidth: 200 },
    ]
    // 末尾の実スライド(800)から進むと clone-after 先頭(1000)。
    // 実セット先頭(0)へ戻る＝半セットぶんの逆走にならないこと。
    expect(
      findNextSlideScrollLeft(withCloneBand, {
        ...loopParams,
        scrollLeft: 800,
      }),
    ).toBe(1000)
  })

  it('loop で前へ進む位置が無ければ null（テレポート待ち）', () => {
    expect(
      findNextSlideScrollLeft(items, { ...loopParams, scrollLeft: 800 }),
    ).toBeNull()
  })

  it('非 loop で末尾に到達していたら先頭へ巻き戻す', () => {
    expect(
      findNextSlideScrollLeft(items, { ...flatParams, scrollLeft: 400 }),
    ).toBe(0)
  })

  it('非 loop はクランプするので末尾 2 枚は同じ位置に潰れる', () => {
    // クランプ後 → 0, 200, 400, 400, 400
    expect(
      findNextSlideScrollLeft(items, { ...flatParams, scrollLeft: 200 }),
    ).toBe(400)
  })

  it('スライド 1 枚・非 loop は巻き戻す', () => {
    expect(
      findNextSlideScrollLeft([{ offsetLeft: 0, offsetWidth: 200 }], {
        ...flatParams,
        scrollLeft: 0,
      }),
    ).toBe(0)
  })

  it('スライドが無ければ null', () => {
    expect(
      findNextSlideScrollLeft([], { ...flatParams, scrollLeft: 0 }),
    ).toBeNull()
    expect(
      findNextSlideScrollLeft([], { ...loopParams, scrollLeft: 0 }),
    ).toBeNull()
  })
})
