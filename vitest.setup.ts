import { beforeAll, vi } from 'vitest'
import type { ReactPortal } from 'react'
import { setProjectAnnotations } from '@storybook/react'

import * as projectAnnotations from './.storybook/preview'

setProjectAnnotations(projectAnnotations)

beforeAll(() => {
  globalThis.ResizeObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  }))

  global.IntersectionObserver = vi.fn().mockImplementation(() => ({
    observe() {
      return null
    },
    disconnect() {
      return null
    },
  }))

  window.matchMedia = vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }))

  vi.mock('@react-aria/utils', async () => {
    const utils = await vi.importActual('@react-aria/utils')

    return {
      ...utils,
      useId: () => 'test-id',
    }
  })

  vi.mock('@react-aria/overlays', async () => {
    const overlays = await vi.importActual('@react-aria/overlays')

    return {
      ...overlays,
      Overlay: vi.fn(({ children }) => children as ReactPortal),
    }
  })

  vi.mock('react-stately', async () => {
    const stately = await vi.importActual<typeof import('react-stately')>('react-stately')

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
