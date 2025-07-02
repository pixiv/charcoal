import { renderHook } from '@testing-library/react'
import { useVisuallyHidden } from './useVisuallyHidden'

describe('useVisuallyHidden', () => {
  it('should return visuallyHiddenProps with correct className', () => {
    const { result } = renderHook(() => useVisuallyHidden())

    expect(result.current).toEqual({
      visuallyHiddenProps: {
        className: 'visually-hidden',
      },
    })
  })

  it('should return consistent structure on re-renders', () => {
    const { result, rerender } = renderHook(() => useVisuallyHidden())
    const firstResult = result.current

    rerender()
    expect(result.current).toEqual(firstResult)
    expect(result.current.visuallyHiddenProps.className).toBe('visually-hidden')
  })

  it('should always return an object with visuallyHiddenProps property', () => {
    const { result } = renderHook(() => useVisuallyHidden())

    expect(result.current).toHaveProperty('visuallyHiddenProps')
    expect(typeof result.current.visuallyHiddenProps).toBe('object')
  })

  it('should return className property in visuallyHiddenProps', () => {
    const { result } = renderHook(() => useVisuallyHidden())

    expect(result.current.visuallyHiddenProps).toHaveProperty('className')
    expect(typeof result.current.visuallyHiddenProps.className).toBe('string')
  })

  it('should return consistent results across multiple calls', () => {
    const { result: result1 } = renderHook(() => useVisuallyHidden())
    const { result: result2 } = renderHook(() => useVisuallyHidden())

    expect(result1.current).toEqual(result2.current)
  })
})
