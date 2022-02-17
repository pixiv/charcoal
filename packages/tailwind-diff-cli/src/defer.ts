export function createDefer() {
  const defers: (() => void)[] = []

  const defer = (deferFn: () => void) => {
    defers.push(deferFn)
  }

  const dispose = () => {
    // eslint-disable-next-line no-constant-condition, @typescript-eslint/no-unnecessary-condition
    while (true) {
      const deferFn = defers.pop()
      if (deferFn == null) {
        return
      }
      try {
        deferFn()
      } catch (err: unknown) {
        console.error('Uncaught defer error:', err)
      }
    }
  }

  return {
    defer,
    dispose,
  } as const
}
