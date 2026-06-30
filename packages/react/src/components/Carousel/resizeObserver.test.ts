import { describe, it, expect, vi, afterEach } from 'vitest'
import { observeResize } from './resizeObserver'

type MockRO = {
  cb: ResizeObserverCallback
  observe: ReturnType<typeof vi.fn>
  unobserve: ReturnType<typeof vi.fn>
  disconnect: ReturnType<typeof vi.fn>
}

describe('observeResize', () => {
  const orig = globalThis.ResizeObserver
  afterEach(() => {
    globalThis.ResizeObserver = orig
  })

  it('ResizeObserver 非対応なら no-op（throw しない）', () => {
    globalThis.ResizeObserver =
      undefined as unknown as typeof globalThis.ResizeObserver
    const el = document.createElement('div')
    expect(() => observeResize(el, () => undefined)()).not.toThrow()
  })

  it('単一の observer を共有し、対象のサイズ変化で cb を呼ぶ', () => {
    const instances: MockRO[] = []
    globalThis.ResizeObserver = vi.fn((cb: ResizeObserverCallback) => {
      const inst: MockRO = {
        cb,
        observe: vi.fn(),
        unobserve: vi.fn(),
        disconnect: vi.fn(),
      }
      instances.push(inst)
      return inst
    }) as unknown as typeof globalThis.ResizeObserver

    const a = document.createElement('div')
    const b = document.createElement('div')
    const onA = vi.fn()
    const onB = vi.fn()

    const offA = observeResize(a, onA)
    const offB = observeResize(b, onB)

    // 単一 observer を共有
    expect(instances).toHaveLength(1)

    instances[0].cb(
      [{ target: a } as ResizeObserverEntry],
      instances[0] as unknown as ResizeObserver,
    )
    expect(onA).toHaveBeenCalledTimes(1)
    expect(onB).not.toHaveBeenCalled()

    offA()
    expect(instances[0].disconnect).not.toHaveBeenCalled()
    offB()
    expect(instances[0].disconnect).toHaveBeenCalled()
  })
})
