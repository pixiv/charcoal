import { createRef, type ComponentProps } from 'react'
import { render, fireEvent, act, cleanup, screen } from '@testing-library/react'
import { vi, describe, it, expect, afterEach, beforeEach } from 'vitest'
import Toast, { useToast, type ToastHandler } from '.'

function renderToast(props: ComponentProps<typeof Toast> = {}) {
  const ref = createRef<ToastHandler>()
  const result = render(<Toast ref={ref} {...props} />)
  const show: ToastHandler['show'] = (message, options) => {
    act(() => {
      ref.current?.show(message, options)
    })
    act(() => {
      vi.advanceTimersByTime(300)
    })
  }
  return { ...result, show }
}

function finishExitAnimation(message: string) {
  const toast = screen.getByText(message).closest('.charcoal-toast')
  if (toast === null) throw new Error('Toast not found')
  fireEvent(
    toast,
    Object.assign(new Event('animationend', { bubbles: true }), {
      animationName: 'charcoal-toast-exit',
    }),
  )
}

describe('Toast', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    cleanup()
    vi.useRealTimers()
  })

  it('shows a message and hides after 5 seconds', () => {
    const { show } = renderToast()

    expect(screen.queryByRole('region')).not.toBeInTheDocument()

    show('保存しました', { variant: 'success' })

    expect(screen.getByText('保存しました')).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(5000)
    })

    expect(screen.getByText('保存しました')).toBeInTheDocument()
    expect(
      screen.getByText('保存しました').closest('.charcoal-toast'),
    ).toHaveAttribute('data-exiting', 'true')

    finishExitAnimation('保存しました')

    expect(screen.queryByText('保存しました')).not.toBeInTheDocument()
  })

  it.each([0, -1])('clamps duration to zero: %s', (duration) => {
    const { show } = renderToast()

    show('保存しました', { variant: 'success', duration })
    expect(screen.getByText('保存しました')).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(1)
    })
    expect(
      screen.getByText('保存しました').closest('.charcoal-toast'),
    ).toHaveAttribute('data-exiting', 'true')

    finishExitAnimation('保存しました')
    expect(screen.queryByText('保存しました')).not.toBeInTheDocument()
  })

  it.each([
    Number.NaN,
    Number.POSITIVE_INFINITY,
    Number.NEGATIVE_INFINITY,
    'invalid' as unknown as number,
  ])('falls back to the default duration: %s', (duration) => {
    const { show } = renderToast()

    show('保存しました', { variant: 'success', duration })
    act(() => {
      vi.advanceTimersByTime(4999)
    })
    expect(screen.getByText('保存しました')).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(1)
    })
    expect(
      screen.getByText('保存しました').closest('.charcoal-toast'),
    ).toHaveAttribute('data-exiting', 'true')
  })

  it('queues the next toast until the previous one closes', async () => {
    const { show } = renderToast()

    show('first', { variant: 'success' })
    show('second', { variant: 'error' })

    expect(screen.getByText('first')).toBeInTheDocument()
    expect(screen.queryByText('second')).not.toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(5000)
    })
    await act(async () => {
      finishExitAnimation('first')
    })

    expect(screen.queryByText('first')).not.toBeInTheDocument()
    expect(screen.getByText('second')).toBeInTheDocument()
    expect(
      screen.getByText('second').closest('.charcoal-toast'),
    ).toHaveAttribute('data-variant', 'error')
  })

  it('keeps the toast open while hovered after the timer ends, then closes on leave', () => {
    const { show } = renderToast()

    show('保存しました', { variant: 'success' })
    const toast = screen.getByText('保存しました').closest('.charcoal-toast')
    if (toast === null) throw new Error('Toast not found')

    fireEvent.pointerEnter(toast, { pointerType: 'mouse' })
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(toast).not.toHaveAttribute('data-exiting', 'true')

    fireEvent.pointerLeave(toast)
    expect(toast).toHaveAttribute('data-exiting', 'true')
  })

  it('keeps the toast open while focused', () => {
    const { show } = renderToast()

    show('保存しました', { variant: 'success' })
    const toast = screen.getByText('保存しました').closest('.charcoal-toast')
    if (toast === null) throw new Error('Toast not found')

    fireEvent.keyDown(document, { key: 'F6' })
    expect(screen.getByRole('region')).toHaveFocus()

    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(toast).not.toHaveAttribute('data-exiting', 'true')

    fireEvent.blur(screen.getByRole('region'))
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(toast).toHaveAttribute('data-exiting', 'true')
  })

  it('places a toast at the top by default', () => {
    const { show } = renderToast()

    show('保存しました', { variant: 'success' })

    expect(screen.getByRole('region')).toHaveAttribute('data-position', 'top')
  })

  it('places a toast at the bottom when requested', () => {
    const { show } = renderToast({ position: 'bottom' })

    show('保存しました', { variant: 'success' })

    expect(screen.getByRole('region')).toHaveAttribute(
      'data-position',
      'bottom',
    )
  })

  it.each(['success', 'error'] as const)(
    'applies the %s variant',
    (variant) => {
      const { show } = renderToast()

      show('保存しました', { variant })

      expect(
        screen.getByText('保存しました').closest('.charcoal-toast'),
      ).toHaveAttribute('data-variant', variant)
    },
  )

  it('supports a custom z-index and portal container', () => {
    const portalContainer = document.createElement('div')
    document.body.append(portalContainer)
    const { show } = renderToast({ zIndex: 30, portalContainer })

    show('保存しました', { variant: 'success' })

    expect(portalContainer).toContainElement(screen.getByRole('region'))
    expect(screen.getByRole('region')).toHaveStyle({ zIndex: 30 })

    portalContainer.remove()
  })

  it('moves focus to the toast region with F6', () => {
    const { show } = renderToast()

    show('保存しました', { variant: 'success' })

    fireEvent.keyDown(document, { key: 'F6' })

    expect(screen.getByRole('region')).toHaveFocus()
  })
})

describe('useToast', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    cleanup()
    vi.useRealTimers()
  })

  it('shows a toast via the returned void function', () => {
    let showResult: void | undefined

    function HookApp() {
      const [toast, show] = useToast()
      return (
        <>
          {toast}
          <button
            type="button"
            onClick={() => {
              showResult = show('hook message', { variant: 'success' })
            }}
          >
            open
          </button>
        </>
      )
    }

    render(<HookApp />)
    fireEvent.click(screen.getByText('open'))
    expect(screen.getByText('hook message')).toBeInTheDocument()
    expect(showResult).toBeUndefined()
  })
})
