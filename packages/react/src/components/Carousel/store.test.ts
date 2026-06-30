import { describe, it, expect, vi } from 'vitest'
import { createStore } from './store'

describe('createStore', () => {
  it('reducer の結果を getSnapshot で返す', () => {
    const s = createStore(
      (n: number, a: { type: 'inc' }) => (a.type === 'inc' ? n + 1 : n),
      0,
    )
    expect(s.getSnapshot()).toBe(0)
    s.dispatch({ type: 'inc' })
    expect(s.getSnapshot()).toBe(1)
  })

  it('dispatch ごとに listener を呼び、unsubscribe で止まる', () => {
    const s = createStore((n: number, _a: { type: 'inc' }) => n + 1, 0)
    const fn = vi.fn()
    const off = s.subscribe(fn)
    s.dispatch({ type: 'inc' })
    expect(fn).toHaveBeenCalledTimes(1)
    off()
    s.dispatch({ type: 'inc' })
    expect(fn).toHaveBeenCalledTimes(1)
  })
})
