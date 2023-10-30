import type { ReactNode } from 'react'

export {}

globalThis.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
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

jest.mock('@react-aria/overlays', () => ({
  ...jest.requireActual('@react-aria/overlays'),
  Overlay: jest.fn(({ children }: { children: ReactNode }) => children),
}))
