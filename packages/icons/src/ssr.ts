export const __SERVER__ = typeof window === 'undefined'

const CAN_USE_DOM = typeof HTMLElement !== 'undefined'

// Workaround: `extends HTMLELement` の形式でないとbabelのトランスパイルがおかしくなる
if (__SERVER__ || !CAN_USE_DOM) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
  globalThis.HTMLElement = class {} as any
}
