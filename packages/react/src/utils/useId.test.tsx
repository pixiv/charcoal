import { renderHook } from '@testing-library/react'
import { useId } from './useId'

import '@testing-library/jest-dom'

describe('useId', () => {
  it('should return provided id when id is given', () => {
    const { result } = renderHook(() => useId('custom-id'))
    expect(result.current).toBe('custom-id')
  })

  it('should return generated id when no id is provided', () => {
    const { result } = renderHook(() => useId())
    expect(result.current).toMatch(/^:r[\d\w]+:$/)
  })

  it('should return generated id when undefined is provided', () => {
    const { result } = renderHook(() => useId(undefined))
    expect(result.current).toMatch(/^:r[\d\w]+:$/)
  })

  it('should return different generated ids for different hook instances', () => {
    const { result: result1 } = renderHook(() => useId())
    const { result: result2 } = renderHook(() => useId())
    expect(result1.current).not.toBe(result2.current)
  })

  it('should be stable across re-renders when id is provided', () => {
    const { result, rerender } = renderHook(
      ({ id }: { id?: string }) => useId(id),
      { initialProps: { id: 'stable-id' } }
    )
    const initialId = result.current
    rerender({ id: 'stable-id' })
    expect(result.current).toBe(initialId)
  })

  it('should be stable across re-renders when no id is provided', () => {
    const { result, rerender } = renderHook(() => useId())
    const initialId = result.current
    rerender()
    expect(result.current).toBe(initialId)
  })
})
