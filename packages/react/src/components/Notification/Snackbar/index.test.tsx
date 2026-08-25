import { useEffect, type ReactNode } from 'react'
import { render, fireEvent, act, cleanup, screen } from '@testing-library/react'
import { vi, describe, it, expect, afterEach, beforeEach } from 'vitest'
import Snackbar, { useSnackbar, type ShowSnackbarOptions } from '.'

function renderSnackbar(props: Parameters<typeof useSnackbar>[0] = {}) {
  let showSnackbar:
    ((message: ReactNode, options?: ShowSnackbarOptions) => void) | undefined

  function SnackbarApp() {
    const [snackbar, show] = useSnackbar(props)
    useEffect(() => {
      showSnackbar = show
    }, [show])
    return snackbar
  }

  const result = render(<SnackbarApp />)
  function show(message: ReactNode, options?: ShowSnackbarOptions) {
    if (showSnackbar === undefined) throw new Error('showSnackbar not found')
    const currentShowSnackbar = showSnackbar
    act(() => {
      currentShowSnackbar(message, options)
    })
    act(() => {
      vi.advanceTimersByTime(300)
    })
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

  it('renders the message and required action', () => {
    render(
      <Snackbar
        message="保存しました"
        action={<button type="button">取り消す</button>}
      />,
    )

    expect(screen.getByText('保存しました')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: '取り消す' })).toBeInTheDocument()
  })

  it('requires a non-null action at the type level', () => {
    // @ts-expect-error action must not be undefined
    const undefinedAction = <Snackbar message="x" action={undefined} />

    expect(undefinedAction).toBeDefined()
  })

  it('shows a message and hides after 5 seconds', () => {
    const { show } = renderSnackbar()

    expect(screen.queryByRole('region')).not.toBeInTheDocument()

    show('保存しました')

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
    const { show } = renderSnackbar({ duration })

    show('保存しました')
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
    const { show } = renderSnackbar({ duration })

    show('保存しました')
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

    show('first')
    show('second')

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

  it('replaces the current snackbar immediately when requested', () => {
    const onClose = vi.fn()
    const { show } = renderSnackbar({ order: 'replace' })

    show('first', { onClose })
    show('second')

    expect(screen.queryByText('first')).not.toBeInTheDocument()
    expect(screen.getByText('second')).toBeInTheDocument()
    expect(onClose).toHaveBeenCalledExactlyOnceWith('replaced')
  })

  it('reports timeout when the snackbar closes after its duration', () => {
    const onClose = vi.fn()
    const { show } = renderSnackbar({ duration: 0 })

    show('保存しました', { onClose })
    act(() => {
      vi.advanceTimersByTime(1)
    })

    expect(onClose).toHaveBeenCalledExactlyOnceWith('timeout')
  })

  it('reports action when the action is clicked', () => {
    const onClose = vi.fn()
    const { show } = renderSnackbar()

    show('保存しました', {
      action: <button type="button">取り消す</button>,
      onClose,
    })
    fireEvent.click(screen.getByRole('button', { name: '取り消す' }))

    expect(onClose).toHaveBeenCalledExactlyOnceWith('action')
  })

  it('reports unmounted only for the currently displayed snackbar', () => {
    const firstOnClose = vi.fn()
    const secondOnClose = vi.fn()
    const { show, unmount } = renderSnackbar()

    show('first', { onClose: firstOnClose })
    show('second', { onClose: secondOnClose })
    unmount()

    expect(firstOnClose).toHaveBeenCalledExactlyOnceWith('unmounted')
    expect(secondOnClose).not.toHaveBeenCalled()
  })

  it('keeps the snackbar open while hovered after the timer ends, then closes on leave', () => {
    const { show } = renderSnackbar()

    show('保存しました')
    const snackbar = screen
      .getByText('保存しました')
      .closest('.charcoal-snackbar')
    if (snackbar === null) throw new Error('Snackbar not found')

    fireEvent.pointerEnter(snackbar, { pointerType: 'mouse' })
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(snackbar).not.toHaveAttribute('data-exiting', 'true')

    fireEvent.pointerLeave(snackbar)
    expect(snackbar).toHaveAttribute('data-exiting', 'true')
  })

  it('keeps the snackbar open while focused', () => {
    const { show } = renderSnackbar()

    show('保存しました')
    const snackbar = screen
      .getByText('保存しました')
      .closest('.charcoal-snackbar')
    if (snackbar === null) throw new Error('Snackbar not found')

    fireEvent.keyDown(document, { key: 'F6' })
    expect(screen.getByRole('region')).toHaveFocus()

    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(snackbar).not.toHaveAttribute('data-exiting', 'true')

    fireEvent.blur(screen.getByRole('region'))
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(snackbar).toHaveAttribute('data-exiting', 'true')
  })

  it('places a snackbar with an action at the bottom', () => {
    const { show } = renderSnackbar({ position: 'top' })

    show('保存しました', {
      action: <button type="button">取り消す</button>,
    })

    expect(screen.getByRole('region')).toHaveAttribute(
      'data-position',
      'bottom',
    )
  })

  it('places a snackbar without an action at the top when requested', () => {
    const { show } = renderSnackbar({ position: 'top' })

    show('保存しました')

    expect(screen.getByRole('region')).toHaveAttribute('data-position', 'top')
  })

  it('supports a custom z-index and portal container', () => {
    const portalContainer = document.createElement('div')
    document.body.append(portalContainer)
    const { show } = renderSnackbar({ zIndex: 30, portalContainer })

    show('保存しました')

    expect(portalContainer).toContainElement(screen.getByRole('region'))
    expect(screen.getByRole('region')).toHaveStyle({ zIndex: 30 })

    portalContainer.remove()
  })

  it('moves focus to the toast region with F6', () => {
    const { show } = renderSnackbar()

    show('保存しました', {
      action: <button type="button">取り消す</button>,
    })

    fireEvent.keyDown(document, { key: 'F6' })

    expect(screen.getByRole('region')).toHaveFocus()
  })

  it('restores focus after a focused snackbar closes', () => {
    const { show } = renderSnackbar()
    const trigger = document.createElement('button')
    document.body.append(trigger)
    trigger.focus()

    show('保存しました', {
      action: <button type="button">閉じる</button>,
    })

    fireEvent.keyDown(document, { key: 'F6' })
    expect(screen.getByRole('region')).toHaveFocus()

    fireEvent.click(screen.getByRole('button', { name: '閉じる' }))
    finishExitAnimation('保存しました')

    expect(trigger).toHaveFocus()
    trigger.remove()
  })

  it('closes on action click even while hovered', () => {
    const { show } = renderSnackbar()
    const trigger = document.createElement('button')
    document.body.append(trigger)
    trigger.focus()

    show('保存しました', {
      action: <button type="button">閉じる</button>,
    })

    const snackbar = screen
      .getByText('保存しました')
      .closest('.charcoal-snackbar')
    if (snackbar === null) throw new Error('Snackbar not found')

    fireEvent.pointerEnter(snackbar, { pointerType: 'mouse' })
    fireEvent.click(screen.getByRole('button', { name: '閉じる' }))

    expect(snackbar).toHaveAttribute('data-exiting', 'true')

    finishExitAnimation('保存しました')
    expect(screen.queryByText('保存しました')).not.toBeInTheDocument()
    expect(trigger).toHaveFocus()
    trigger.remove()
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
