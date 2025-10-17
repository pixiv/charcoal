import { renderHook } from '@testing-library/react'
import { useRef } from 'react'
import { mergeRefs } from './index'

describe('mergeRefs', () => {
  it('should merge function refs', () => {
    const ref1 = vi.fn()
    const ref2 = vi.fn()
    const mergedRef = mergeRefs(ref1, ref2)
    const element = document.createElement('div')

    mergedRef(element)

    expect(ref1).toHaveBeenCalledWith(element)
    expect(ref2).toHaveBeenCalledWith(element)
  })

  it('should merge object refs', () => {
    const ref1 = { current: null as HTMLDivElement | null }
    const ref2 = { current: null as HTMLDivElement | null }
    const mergedRef = mergeRefs(ref1, ref2)
    const element = document.createElement('div')

    mergedRef(element)

    expect(ref1.current).toBe(element)
    expect(ref2.current).toBe(element)
  })

  it('should merge mixed function and object refs', () => {
    const functionRef = vi.fn()
    const objectRef = { current: null as HTMLDivElement | null }
    const mergedRef = mergeRefs(functionRef, objectRef)
    const element = document.createElement('div')

    mergedRef(element)

    expect(functionRef).toHaveBeenCalledWith(element)
    expect(objectRef.current).toBe(element)
  })

  it('should handle null refs gracefully', () => {
    const validRef = vi.fn()
    const mergedRef = mergeRefs(null, validRef, null)
    const element = document.createElement('div')

    expect(() => mergedRef(element)).not.toThrow()
    expect(validRef).toHaveBeenCalledWith(element)
  })

  it('should handle undefined refs gracefully', () => {
    const validRef = vi.fn()
    const mergedRef = mergeRefs(undefined, validRef, undefined)
    const element = document.createElement('div')

    expect(() => mergedRef(element)).not.toThrow()
    expect(validRef).toHaveBeenCalledWith(element)
  })

  it('should handle empty refs array', () => {
    const mergedRef = mergeRefs()
    const element = document.createElement('div')

    expect(() => mergedRef(element)).not.toThrow()
  })

  it('should handle all null/undefined refs', () => {
    const mergedRef = mergeRefs(null, undefined, null)
    const element = document.createElement('div')

    expect(() => mergedRef(element)).not.toThrow()
  })

  it('should call refs with null value', () => {
    const functionRef = vi.fn()
    const objectRef = { current: document.createElement('div') }
    const mergedRef = mergeRefs(functionRef, objectRef)

    mergedRef(null)

    expect(functionRef).toHaveBeenCalledWith(null)
    expect(objectRef.current).toBeNull()
  })

  it('should work with useRef created refs', () => {
    const { result: ref1Result } = renderHook(() =>
      useRef<HTMLDivElement>(null)
    )
    const { result: ref2Result } = renderHook(() =>
      useRef<HTMLDivElement>(null)
    )

    const mergedRef = mergeRefs(ref1Result.current, ref2Result.current)
    const element = document.createElement('div')

    mergedRef(element)

    expect(ref1Result.current.current).toBe(element)
    expect(ref2Result.current.current).toBe(element)
  })

  it('should handle many refs', () => {
    const refs = Array.from({ length: 10 }, () => vi.fn())
    const mergedRef = mergeRefs(...refs)
    const element = document.createElement('div')

    mergedRef(element)

    refs.forEach((ref) => {
      expect(ref).toHaveBeenCalledWith(element)
    })
  })

  it('should continue processing refs even if one throws', () => {
    const workingRef1 = vi.fn()
    const throwingRef = vi.fn().mockImplementation(() => {
      throw new Error('Test error')
    })
    const workingRef2 = vi.fn()

    const mergedRef = mergeRefs(workingRef1, throwingRef, workingRef2)
    const element = document.createElement('div')

    expect(() => mergedRef(element)).toThrow('Test error')
    expect(workingRef1).toHaveBeenCalledWith(element)
    expect(throwingRef).toHaveBeenCalledWith(element)
    expect(workingRef2).not.toHaveBeenCalled()
  })

  it('should return a function', () => {
    const mergedRef = mergeRefs()
    expect(typeof mergedRef).toBe('function')
  })
})
