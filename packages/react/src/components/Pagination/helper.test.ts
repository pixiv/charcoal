import { renderHook } from '@testing-library/react'
import { usePaginationWindow } from './helper'

describe('usePaginationWindow', () => {
  describe('7 pages or less (no ellipsis)', () => {
    it('returns [1,2,3,4,5,6,7] when page=1, pageCount=10', () => {
      const { result } = renderHook(() => usePaginationWindow(1, 10))
      expect(result.current).toEqual([1, 2, 3, 4, 5, 6, 7])
    })

    it('returns [1,2,3,4,5,6,7] when page=2, pageCount=10', () => {
      const { result } = renderHook(() => usePaginationWindow(2, 10))
      expect(result.current).toEqual([1, 2, 3, 4, 5, 6, 7])
    })

    it('returns [1,2,3,4,5,6,7] when page=4, pageCount=10', () => {
      const { result } = renderHook(() => usePaginationWindow(4, 10))
      expect(result.current).toEqual([1, 2, 3, 4, 5, 6, 7])
    })
  })

  describe('with ellipsis', () => {
    it('returns [1, ..., 4, 5, 6, 7, 8] when page=5, pageCount=100', () => {
      const { result } = renderHook(() => usePaginationWindow(5, 100))
      expect(result.current).toEqual([1, '...', 4, 5, 6, 7, 8])
    })

    it('returns [1, ..., 96, 97, 98, 99, 100] when page=100, pageCount=100', () => {
      const { result } = renderHook(() => usePaginationWindow(100, 100))
      expect(result.current).toEqual([1, '...', 96, 97, 98, 99, 100])
    })
  })

  describe('with pageRangeDisplayed specified', () => {
    it('shows first 5 pages when pageRangeDisplayed=5 (no ellipsis)', () => {
      const { result } = renderHook(() => usePaginationWindow(2, 20, 5))
      expect(result.current).toEqual([1, 2, 3, 4, 5])
    })

    it('shows ellipsis when pageRangeDisplayed=5', () => {
      const { result } = renderHook(() => usePaginationWindow(5, 20, 5))
      expect(result.current).toEqual([1, '...', 5, 6, 7])
    })
  })

  describe('when arguments change', () => {
    it('updates window when page changes', () => {
      const { result, rerender } = renderHook(
        ({ page, pageCount }) => usePaginationWindow(page, pageCount),
        { initialProps: { page: 2, pageCount: 10 } },
      )
      expect(result.current).toEqual([1, 2, 3, 4, 5, 6, 7])

      rerender({ page: 5, pageCount: 10 })
      expect(result.current).toEqual([1, '...', 4, 5, 6, 7, 8])
    })
  })
})
