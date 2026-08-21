import { createRef, type ComponentProps } from 'react'
import { render, fireEvent, act, cleanup, screen } from '@testing-library/react'
import { vi, describe, it, expect, afterEach, beforeEach } from 'vitest'
import Snackbar, { useSnackbar, type SnackbarHandler } from '.'

function renderSnackbar(props: ComponentProps<typeof Snackbar> = {}) {
  const ref = createRef<SnackbarHandler>()
  const result = render(<Snackbar ref={ref} {...props} />)
  const show: SnackbarHandler['show'] = (message, options) => {
    ref.current?.show(message, options)
  }
  return { ...result, show }
}

function finishExitAnimation(message: string) {
  const snackbar = screen.getByText(message).closest('.charcoal-snackbar')
  if (snackbar === null) throw new Error('Snackbar not found')
  fireEvent(
    snackbar,
    Object.assign(new Event('animationend', { bubbles: true }), {
      animationName: 'charcoal-snackbar-exit',
    }),
  )
}

describe('Snackbar', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    cleanup()
    vi.useRealTimers()
  })

  it('shows a message and hides after 5 seconds', () => {
    const { show } = renderSnackbar()

    expect(screen.queryByRole('region')).not.toBeInTheDocument()

    act(() => {
      show('保存しました')
    })

    expect(screen.getByText('保存しました')).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(5000)
    })

    expect(screen.getByText('保存しました')).toBeInTheDocument()
    expect(
      screen.getByText('保存しました').closest('.charcoal-snackbar'),
    ).toHaveAttribute('data-exiting', 'true')

    finishExitAnimation('保存しました')

    expect(screen.queryByText('保存しました')).not.toBeInTheDocument()
  })

  it.each([0, -1])('clamps duration to zero: %s', (duration) => {
    const { show } = renderSnackbar()

    act(() => {
      show('保存しました', { duration })
    })
    expect(screen.getByText('保存しました')).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(1)
    })
    expect(
      screen.getByText('保存しました').closest('.charcoal-snackbar'),
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
    const { show } = renderSnackbar()

    act(() => {
      show('保存しました', { duration })
    })
    act(() => {
      vi.advanceTimersByTime(4999)
    })
    expect(screen.getByText('保存しました')).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(1)
    })
    expect(
      screen.getByText('保存しました').closest('.charcoal-snackbar'),
    ).toHaveAttribute('data-exiting', 'true')
  })

  it('queues the next snackbar until the previous one closes', async () => {
    const { show } = renderSnackbar()

    act(() => {
      show('first')
    })
    act(() => {
      show('second')
    })

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
  })

  it('keeps the snackbar open when hideSnackbarOnClick is false', () => {
    const onClick = vi.fn()
    const { show } = renderSnackbar()

    act(() => {
      show('保存しました', {
        button: {
          children: '取り消す',
          onClick,
          hideSnackbarOnClick: false,
        },
      })
    })

    expect(
      screen.getByText('保存しました').closest('.charcoal-snackbar'),
    ).toHaveAttribute('data-with-button', 'true')
    fireEvent.click(screen.getByText('取り消す'))
    expect(onClick).toHaveBeenCalledTimes(1)
    expect(screen.getByText('保存しました')).toBeInTheDocument()
  })

  it('places a snackbar with a button at the bottom', () => {
    const { show } = renderSnackbar({ position: 'top' })

    act(() => {
      show('保存しました', {
        button: { children: '取り消す' },
      })
    })

    expect(screen.getByRole('region')).toHaveAttribute(
      'data-position',
      'bottom',
    )
  })

  it('supports a custom z-index and portal container', () => {
    const portalContainer = document.createElement('div')
    document.body.append(portalContainer)
    const { show } = renderSnackbar({ zIndex: 20, portalContainer })

    act(() => {
      show('保存しました')
    })

    expect(portalContainer).toContainElement(screen.getByRole('region'))
    expect(screen.getByRole('region')).toHaveStyle({ zIndex: 20 })

    portalContainer.remove()
  })

  it('moves focus to the action button with F6', () => {
    const { show } = renderSnackbar()

    act(() => {
      show('保存しました', {
        button: { children: '取り消す' },
      })
    })

    const button = screen.getByRole('button', { name: '取り消す' })
    expect(button).toHaveAttribute('aria-keyshortcuts', 'F6')

    fireEvent.keyDown(document, { key: 'F6' })

    expect(button).toHaveFocus()
  })

  it('restores focus after a focused snackbar closes', () => {
    const { show } = renderSnackbar()
    const trigger = document.createElement('button')
    document.body.append(trigger)
    trigger.focus()

    act(() => {
      show('保存しました', {
        button: { children: '閉じる' },
      })
    })

    fireEvent.keyDown(document, { key: 'F6' })
    const closeButton = screen.getByRole('button', { name: '閉じる' })
    expect(closeButton).toHaveFocus()

    fireEvent.click(closeButton)
    finishExitAnimation('保存しました')

    expect(trigger).toHaveFocus()
    trigger.remove()
  })

  it('renders the button with a custom component', () => {
    function Link({ to, ...props }: ComponentProps<'a'> & { to: string }) {
      return <a {...props} href={to} />
    }

    const { show } = renderSnackbar()

    act(() => {
      show('保存しました', {
        button: {
          component: Link,
          to: '/details',
          children: '詳細を見る',
        },
      })
    })

    expect(screen.getByRole('link', { name: '詳細を見る' })).toHaveAttribute(
      'href',
      '/details',
    )
  })

  it('closes on button click by default', () => {
    const { show } = renderSnackbar()

    act(() => {
      show('保存しました', {
        button: { children: '閉じる' },
      })
    })

    fireEvent.click(screen.getByText('閉じる'))
    expect(screen.getByText('保存しました')).toBeInTheDocument()

    finishExitAnimation('保存しました')

    expect(screen.queryByText('保存しました')).not.toBeInTheDocument()
  })

  it('uses Navigation button variant when dimmed', () => {
    const { show } = renderSnackbar({ dim: true })

    act(() => {
      show('保存しました', {
        button: { children: '閉じる' },
      })
    })

    expect(screen.getByRole('button', { name: '閉じる' })).toHaveAttribute(
      'data-variant',
      'Navigation',
    )
  })

  it('honors an explicit button variant when dimmed', () => {
    const { show } = renderSnackbar({ dim: true })

    act(() => {
      show('保存しました', {
        button: { children: '削除する', variant: 'Danger' },
      })
    })

    expect(screen.getByRole('button', { name: '削除する' })).toHaveAttribute(
      'data-variant',
      'Danger',
    )
  })

  it('removes the snackbar with a timeout fallback', () => {
    const { show } = renderSnackbar()

    act(() => {
      show('保存しました', { duration: 1 })
    })
    act(() => {
      vi.advanceTimersByTime(1)
    })

    act(() => {
      vi.advanceTimersByTime(400)
    })

    expect(screen.queryByText('保存しました')).not.toBeInTheDocument()
  })
})

describe('useSnackbar', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    cleanup()
    vi.useRealTimers()
  })

  it('shows a snackbar via the returned void function', () => {
    let showResult: void | undefined

    function HookApp() {
      const [snackbar, show] = useSnackbar()
      return (
        <>
          {snackbar}
          <button
            type="button"
            onClick={() => {
              showResult = show('hook message')
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
