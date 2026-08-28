import { fireEvent, render, screen } from '@testing-library/react'
import type { ComponentType } from 'react'
import { afterEach } from 'vitest'
import { useSnackbar } from './Snackbar'
import { useToast } from './Toast'

const HEADER_OFFSET = 64
const OFFSET = 24
const MINIMUM_OFFSET = 16

const notificationOptions = {
  position: 'top',
  headerOffset: HEADER_OFFSET,
  duration: 60_000,
} as const

type AppProps = {
  offset?: number
}

function ToastApp({ offset = OFFSET }: AppProps) {
  const [toast, showToast] = useToast({ ...notificationOptions, offset })

  return (
    <>
      <button
        type="button"
        onClick={() => showToast('保存しました', { type: 'success' })}
      >
        通知を表示
      </button>
      <div style={{ height: '200vh' }}>{toast}</div>
    </>
  )
}

function SnackbarApp({ offset = OFFSET }: AppProps) {
  const [snackbar, showSnackbar] = useSnackbar({
    ...notificationOptions,
    offset,
  })

  return (
    <>
      <button type="button" onClick={() => showSnackbar('保存しました')}>
        通知を表示
      </button>
      <div style={{ height: '200vh' }}>{snackbar}</div>
    </>
  )
}

function getRegions(regionSelector: string) {
  const notificationRegion = screen.getByRole('region')
  const itemRegion = notificationRegion.querySelector(regionSelector)

  if (!(itemRegion instanceof HTMLElement)) {
    throw new Error('Notification item region not found')
  }

  return { notificationRegion, itemRegion }
}

async function scrollTo(top: number) {
  window.scrollTo(0, top)
  await vi.waitFor(() => expect(window.scrollY).toBe(top))
}

afterEach(async () => {
  await scrollTo(0)
})

describe.each<{
  name: string
  App: ComponentType<AppProps>
  regionSelector: string
}>([
  {
    name: 'Toast',
    App: ToastApp,
    regionSelector: '.charcoal-toast-region',
  },
  {
    name: 'Snackbar',
    App: SnackbarApp,
    regionSelector: '.charcoal-snackbar-region',
  },
])('$name header offset', ({ App, regionSelector }) => {
  it('ヘッダーと一緒にスクロールし、画面上端からoffsetの位置で固定される', async () => {
    render(<App />)
    fireEvent.click(screen.getByRole('button', { name: '通知を表示' }))

    const { notificationRegion, itemRegion } = getRegions(regionSelector)

    expect(itemRegion.getBoundingClientRect().top).toBe(HEADER_OFFSET + OFFSET)

    await scrollTo(20)

    expect(notificationRegion.getBoundingClientRect().top).toBe(-20)
    expect(itemRegion.getBoundingClientRect().top).toBe(
      HEADER_OFFSET + OFFSET - 20,
    )

    await scrollTo(HEADER_OFFSET)

    expect(notificationRegion.getBoundingClientRect().top).toBe(-HEADER_OFFSET)
    expect(itemRegion.getBoundingClientRect().top).toBe(OFFSET)
  })

  it('offsetが16未満の場合は初期表示位置に16pxの余白を確保する', () => {
    render(<App offset={8} />)
    fireEvent.click(screen.getByRole('button', { name: '通知を表示' }))

    const { itemRegion } = getRegions(regionSelector)

    expect(itemRegion.getBoundingClientRect().top).toBe(
      HEADER_OFFSET + MINIMUM_OFFSET,
    )
  })
})
