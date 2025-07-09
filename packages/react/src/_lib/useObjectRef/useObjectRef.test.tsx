import { renderHook } from '@testing-library/react'
import { useRef } from 'react'
import { useObjectRef } from './index'

describe('useObjectRef', () => {
  it('should return a mutable ref object', () => {
    const { result } = renderHook(() => useObjectRef<HTMLDivElement>())

    expect(result.current).toHaveProperty('current')
    expect(result.current.current).toBeNull()
  })

  it('should set and get current value', () => {
    const { result } = renderHook(() => useObjectRef<HTMLDivElement>())
    const element = document.createElement('div')

    result.current.current = element
    expect(result.current.current).toBe(element)
  })

  it('should call function ref when value changes', () => {
    const mockRef = vi.fn()
    const { result } = renderHook(() => useObjectRef<HTMLDivElement>(mockRef))
    const element = document.createElement('div')

    result.current.current = element
    expect(mockRef).toHaveBeenCalledWith(element)
  })

  it('should update object ref when value changes', () => {
    const objectRef = { current: null as HTMLDivElement | null }
    const { result } = renderHook(() => useObjectRef<HTMLDivElement>(objectRef))
    const element = document.createElement('div')

    result.current.current = element
    expect(objectRef.current).toBe(element)
  })

  it('should handle null forwardedRef', () => {
    const { result } = renderHook(() => useObjectRef<HTMLDivElement>(null))
    const element = document.createElement('div')

    expect(() => {
      result.current.current = element
    }).not.toThrow()
    expect(result.current.current).toBe(element)
  })

  it('should handle undefined forwardedRef', () => {
    const { result } = renderHook(() => useObjectRef<HTMLDivElement>(undefined))
    const element = document.createElement('div')

    expect(() => {
      result.current.current = element
    }).not.toThrow()
    expect(result.current.current).toBe(element)
  })

  it('should update both internal and forwarded refs', () => {
    const mockRef = vi.fn()
    const { result } = renderHook(() => useObjectRef<HTMLDivElement>(mockRef))
    const element1 = document.createElement('div')
    const element2 = document.createElement('div')

    result.current.current = element1
    expect(result.current.current).toBe(element1)
    expect(mockRef).toHaveBeenCalledWith(element1)

    result.current.current = element2
    expect(result.current.current).toBe(element2)
    expect(mockRef).toHaveBeenCalledWith(element2)
  })

  it('should set value to null', () => {
    const mockRef = vi.fn()
    const { result } = renderHook(() => useObjectRef<HTMLDivElement>(mockRef))
    const element = document.createElement('div')

    result.current.current = element
    expect(result.current.current).toBe(element)

    result.current.current = null
    expect(result.current.current).toBeNull()
    expect(mockRef).toHaveBeenCalledWith(null)
  })

  it('should work with useRef created ref object', () => {
    const { result: refResult } = renderHook(() => useRef<HTMLDivElement>(null))
    const { result } = renderHook(() =>
      useObjectRef<HTMLDivElement>(refResult.current)
    )
    const element = document.createElement('div')

    result.current.current = element
    expect(result.current.current).toBe(element)
    expect(refResult.current.current).toBe(element)
  })

  it('should maintain callback ref behavior when forwardedRef changes', () => {
    const mockRef1 = vi.fn()
    const mockRef2 = vi.fn()

    const { result, rerender } = renderHook(
      ({ forwardedRef }) => useObjectRef<HTMLDivElement>(forwardedRef),
      { initialProps: { forwardedRef: mockRef1 } }
    )

    const element = document.createElement('div')
    result.current.current = element
    expect(mockRef1).toHaveBeenCalledWith(element)

    rerender({ forwardedRef: mockRef2 })
    const element2 = document.createElement('div')
    result.current.current = element2
    expect(mockRef2).toHaveBeenCalledWith(element2)
  })
})
