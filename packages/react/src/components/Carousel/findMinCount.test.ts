import { describe, expect, it } from 'vitest'
import { findMinCount } from './findMinCount'

describe('findMinCount', () => {
  it('satisfies を満たす最初の要素までの個数を返す', () => {
    expect(findMinCount([10, 20, 30, 40], (v) => v >= 30)).toBe(3)
  })

  it('先頭が満たすなら 1', () => {
    expect(findMinCount([10, 20], () => true)).toBe(1)
  })

  it('末尾まで満たさなければ全個数に丸める', () => {
    expect(findMinCount([10, 20, 30], () => false)).toBe(3)
  })

  it('1 要素では satisfies を評価せず 1', () => {
    expect(
      findMinCount([10], () => {
        throw new Error('unreachable')
      }),
    ).toBe(1)
  })

  it('空配列は 0', () => {
    expect(findMinCount([], () => true)).toBe(0)
  })
})
