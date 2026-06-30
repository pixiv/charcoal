import { describe, it, expect } from 'vitest'
import { createCarouselStore } from './carouselStore'

describe('createCarouselStore', () => {
  it('初期値', () => {
    expect(createCarouselStore().getSnapshot()).toEqual({
      activeIndex: 0,
      canPrev: false,
      canNext: false,
      scroll: null,
    })
  })

  it('setActive: 変化なしなら同一参照', () => {
    const s = createCarouselStore()
    const a = s.getSnapshot()
    s.dispatch({ type: 'setActive', index: 0 })
    expect(s.getSnapshot()).toBe(a)
    s.dispatch({ type: 'setActive', index: 2 })
    expect(s.getSnapshot().activeIndex).toBe(2)
  })

  it('setScrollState: 変化なしなら同一参照', () => {
    const s = createCarouselStore()
    s.dispatch({ type: 'setScrollState', canPrev: true, canNext: true })
    const a = s.getSnapshot()
    s.dispatch({ type: 'setScrollState', canPrev: true, canNext: true })
    expect(s.getSnapshot()).toBe(a)
  })

  it('requestScroll: index と単調増加 nonce', () => {
    const s = createCarouselStore()
    s.dispatch({ type: 'requestScroll', index: 3 })
    expect(s.getSnapshot().scroll).toEqual({ index: 3, nonce: 1 })
    s.dispatch({ type: 'requestScroll', index: 3 })
    expect(s.getSnapshot().scroll).toEqual({ index: 3, nonce: 2 })
  })
})
