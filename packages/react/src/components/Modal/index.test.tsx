import { useState } from 'react'
import { render, fireEvent, act, cleanup } from '@testing-library/react'
import { OverlayProvider } from 'react-aria'
import { vi, describe, it, expect, afterEach } from 'vitest'
import Modal from '.'
import { MODAL_TRANSITION_DURATION_MS } from './useTransitionPresence'

const MOBILE_WIDTH = 500
const DESKTOP_WIDTH = 1024

function setWindowWidth(width: number) {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: width,
  })
  fireEvent(window, new Event('resize'))
}

// jsdom は CSS transition を実行しないので transitionend を手動で発火させる
function fireTransitionEnd(el: Element, propertyName: string) {
  fireEvent(
    el,
    Object.assign(new Event('transitionend', { bubbles: true }), {
      propertyName,
    }),
  )
}

function getBackground() {
  return document.querySelector('.charcoal-modal-background')
}

function getDialog() {
  return document.querySelector('.charcoal-modal-dialog')
}

function TestApp({ defaultOpen = false }: { defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  return (
    <OverlayProvider>
      <button data-testid="open" onClick={() => setIsOpen(true)}>
        open
      </button>
      <button data-testid="close" onClick={() => setIsOpen(false)}>
        close
      </button>
      <Modal
        title="test modal"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        bottomSheet
      >
        <div>modal content</div>
      </Modal>
    </OverlayProvider>
  )
}

function renderModal({ defaultOpen = false } = {}) {
  const result = render(<TestApp defaultOpen={defaultOpen} />)
  const open = () =>
    fireEvent.click(result.getByTestId('open', { exact: true }))
  const close = () =>
    fireEvent.click(result.getByTestId('close', { exact: true }))
  return { open, close }
}

afterEach(() => {
  cleanup()
  vi.useRealTimers()
  setWindowWidth(DESKTOP_WIDTH)
})

describe('Modal (bottom sheet transition)', () => {
  it('desktop: mounts and unmounts immediately without data-animation', () => {
    setWindowWidth(DESKTOP_WIDTH)
    const { open, close } = renderModal()

    expect(getDialog()).not.toBeInTheDocument()

    open()
    expect(getDialog()).toBeInTheDocument()
    expect(getBackground()).not.toHaveAttribute('data-animation')

    close()
    expect(getDialog()).not.toBeInTheDocument()
  })

  it('mobile: enters via transition and settles on the dialog transform transitionend only', () => {
    setWindowWidth(MOBILE_WIDTH)
    const { open } = renderModal()

    open()
    expect(getDialog()).toBeInTheDocument()
    expect(getBackground()).toHaveAttribute('data-animation', 'entering')

    // 背景の background-color の transitionend では entered にならない
    fireTransitionEnd(getBackground() as Element, 'background-color')
    expect(getBackground()).toHaveAttribute('data-animation', 'entering')

    fireTransitionEnd(getDialog() as Element, 'transform')
    expect(getBackground()).toHaveAttribute('data-animation', 'entered')
  })

  it('mobile: keeps the DOM mounted while exiting, unmounts after transitionend', () => {
    setWindowWidth(MOBILE_WIDTH)
    const { open, close } = renderModal()

    open()
    fireTransitionEnd(getDialog() as Element, 'transform')

    close()
    expect(getBackground()).toHaveAttribute('data-animation', 'exiting')
    expect(getDialog()).toBeInTheDocument()

    fireTransitionEnd(getDialog() as Element, 'transform')
    expect(getDialog()).not.toBeInTheDocument()
  })

  it('mobile: closing mid-enter goes straight to exiting without unmounting', () => {
    setWindowWidth(MOBILE_WIDTH)
    const { open, close } = renderModal()

    open()
    expect(getBackground()).toHaveAttribute('data-animation', 'entering')

    // enter の transitionend を待たずに閉じる
    close()
    expect(getBackground()).toHaveAttribute('data-animation', 'exiting')
    expect(getDialog()).toBeInTheDocument()
  })

  it('mobile: reopening mid-exit goes straight to entering, the element never leaves the document', () => {
    setWindowWidth(MOBILE_WIDTH)
    const { open, close } = renderModal()

    open()
    fireTransitionEnd(getDialog() as Element, 'transform')
    const dialog = getDialog()

    close()
    expect(getBackground()).toHaveAttribute('data-animation', 'exiting')

    // exit の transitionend を待たずに開き直す
    open()
    expect(getBackground()).toHaveAttribute('data-animation', 'entering')
    // 同じ要素のまま（アンマウント → 再マウントが起きていない）
    expect(getDialog()).toBe(dialog)
  })

  it('mobile: a stale transitionend after reopening settles to entered instead of unmounting', () => {
    setWindowWidth(MOBILE_WIDTH)
    const { open, close } = renderModal()

    open()
    fireTransitionEnd(getDialog() as Element, 'transform')
    close()
    open()
    expect(getBackground()).toHaveAttribute('data-animation', 'entering')

    // 開き直しの直後に、キャンセルされた exit 側の transitionend が届く
    fireTransitionEnd(getDialog() as Element, 'transform')
    expect(getDialog()).toBeInTheDocument()
    expect(getBackground()).toHaveAttribute('data-animation', 'entered')
  })

  it('mobile: unmounts via the timeout fallback when transitionend never fires', () => {
    vi.useFakeTimers()
    setWindowWidth(MOBILE_WIDTH)
    const { open, close } = renderModal()

    open()
    fireTransitionEnd(getDialog() as Element, 'transform')

    close()
    expect(getDialog()).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(MODAL_TRANSITION_DURATION_MS + 100)
    })
    expect(getDialog()).not.toBeInTheDocument()
  })

  it('resizing to desktop while open drops the animation, then closes immediately', () => {
    setWindowWidth(MOBILE_WIDTH)
    const { open, close } = renderModal()

    open()
    fireTransitionEnd(getDialog() as Element, 'transform')
    expect(getBackground()).toHaveAttribute('data-animation', 'entered')

    setWindowWidth(DESKTOP_WIDTH)
    expect(getDialog()).toBeInTheDocument()
    expect(getBackground()).not.toHaveAttribute('data-animation')

    close()
    expect(getDialog()).not.toBeInTheDocument()
  })
})
