// eslint-disable-next-line no-var, @typescript-eslint/no-explicit-any
declare var ResizeObserver: any

// eslint-disable-next-line @typescript-eslint/no-unused-vars
ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))
