export {}

declare global {
  // eslint-disable-next-line no-var, @typescript-eslint/no-explicit-any
  var ResizeObserver: any
}

globalThis.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))
