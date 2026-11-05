import * as React from 'react'
import { render } from '@testing-library/react'
import { vi } from 'vitest'
import { useForwardedRef } from './useForwardedRef'

const TestComponent = React.forwardRef<HTMLDivElement, { label?: string }>(
  function TestComponent({ label = 'test' }, forwardedRef) {
    const ref = useForwardedRef(forwardedRef)
    return <div ref={ref}>{label}</div>
  },
)

describe('useForwardedRef', () => {
  it('attaches a callback once and clears it on unmount', () => {
    const ref = vi.fn()
    const { container, rerender, unmount } = render(<TestComponent ref={ref} />)
    const node = container.firstChild
    expect(ref.mock.calls).toEqual([[node]])

    rerender(<TestComponent ref={ref} label="updated" />)
    expect(ref.mock.calls).toEqual([[node]])

    unmount()
    expect(ref.mock.calls).toEqual([[node], [null]])
  })

  it('clears an object ref on unmount', () => {
    const ref = React.createRef<HTMLDivElement>()
    const { container, unmount } = render(<TestComponent ref={ref} />)
    expect(ref.current).toBe(container.firstChild)
    unmount()
    expect(ref.current).toBeNull()
  })

  it('detaches the previous callback before attaching a replacement', () => {
    const previousRef = vi.fn()
    const nextRef = vi.fn()
    const { container, rerender, unmount } = render(
      <TestComponent ref={previousRef} />,
    )
    const node = container.firstChild
    rerender(<TestComponent ref={nextRef} />)
    expect(previousRef.mock.calls).toEqual([[node], [null]])
    expect(nextRef.mock.calls).toEqual([[node]])
    unmount()
    expect(nextRef.mock.calls).toEqual([[node], [null]])
  })

  it('clears the previous object when the forwarded ref changes', () => {
    const previousRef = React.createRef<HTMLDivElement>()
    const nextRef = React.createRef<HTMLDivElement>()
    const { container, rerender, unmount } = render(
      <TestComponent ref={previousRef} />,
    )
    const node = container.firstChild
    rerender(<TestComponent ref={nextRef} />)
    expect(previousRef.current).toBeNull()
    expect(nextRef.current).toBe(node)
    unmount()
    expect(nextRef.current).toBeNull()
  })

  it('handles adding and removing the forwarded ref', () => {
    const ref = vi.fn()
    const { container, rerender } = render(<TestComponent />)
    const node = container.firstChild
    rerender(<TestComponent ref={ref} />)
    expect(ref.mock.calls).toEqual([[node]])
    rerender(<TestComponent />)
    expect(ref.mock.calls).toEqual([[node], [null]])
    expect(container.firstChild).toBe(node)
  })

  it('reattaches after StrictMode effect cleanup and clears the final ref', () => {
    const ref = vi.fn()
    const { container, unmount } = render(
      <React.StrictMode>
        <TestComponent ref={ref} />
      </React.StrictMode>,
    )
    const node = container.firstChild
    expect(ref.mock.calls).toEqual([[node], [null], [node]])
    unmount()
    expect(ref.mock.calls).toEqual([[node], [null], [node], [null]])
  })
})
