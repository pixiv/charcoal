import { renderHook } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import { useLocalStorage } from './themeHelper'

describe('themeHelper', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('does not enter an update loop when localStorage contains JSON', () => {
    localStorage.setItem('theme', JSON.stringify({ mode: 'dark' }))

    const { result } = renderHook(() =>
      useLocalStorage<{ mode: string }>('theme'),
    )

    expect(result.current[0]).toEqual({ mode: 'dark' })
    expect(result.current[2]).toBe(true)
  })
})
