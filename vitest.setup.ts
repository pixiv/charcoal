import { beforeAll, vi } from 'vitest'
import { setProjectAnnotations } from '@storybook/react-vite'
import * as projectAnnotations from './.storybook/preview'

setProjectAnnotations(projectAnnotations)

beforeAll(() => {
  vi.stubGlobal(
    'ResizeObserver',
    vi.fn().mockImplementation(() => ({
      observe: vi.fn(),
      unobserve: vi.fn(),
      disconnect: vi.fn(),
    })),
  )
  vi.stubGlobal(
    'IntersectionObserver',
    vi.fn().mockImplementation(() => ({
      observe() {
        return null
      },
      disconnect() {
        return null
      },
    })),
  )
  if (typeof CSS !== 'undefined' && typeof CSS.supports !== 'function') {
    CSS.supports = () => false
  }

  vi.stubGlobal(
    'matchMedia',
    vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  )

  vi.mock('react-aria/useId', async () => {
    const mod = await vi.importActual('react-aria/useId')

    return {
      ...mod,
      useId: () => 'test-id',
    }
  })

  vi.mock('react-stately', async () => {
    const stately =
      await vi.importActual<typeof import('react-stately')>('react-stately')

    return {
      ...stately,
      useOverlayTriggerState: (
        ...args: Parameters<typeof stately.useOverlayTriggerState>
      ) => {
        const state = stately.useOverlayTriggerState(...args)

        return { ...state, isOpen: true }
      },
    }
  })
})
