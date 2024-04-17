import type { ReactPortal } from 'react'

export { }

globalThis.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

global.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe() {
    return null
  },
  disconnect() {
    return null
  },
}))

window.matchMedia = jest.fn().mockImplementation((query: string) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(),
  removeListener: jest.fn(),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
}))

jest.mock('@react-aria/utils', () => ({
  ...jest.requireActual('@react-aria/utils'),
  useId: () => 'test-id',
}))

jest.mock(
  '@react-aria/overlays',
  () => ({
    ...jest.requireActual('@react-aria/overlays'),
    Overlay: jest.fn(({ children }) => children as ReactPortal),
  })
)

import type { OverlayTriggerProps } from 'react-stately'

jest.mock('react-stately', () => ({
  ...jest.requireActual('react-stately'),
  useOverlayTriggerState: (args: OverlayTriggerProps) => {
    const { useOverlayTriggerState } =
      jest.requireActual<typeof import('react-stately')>('react-stately')
    const state = useOverlayTriggerState(args)

    return { ...state, isOpen: true }
  },
}))
