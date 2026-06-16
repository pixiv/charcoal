import { describe, it, expect, vi, afterEach } from 'vitest'
import { observeCenter } from './intersectionObserver'

type MockIO = {
  cb: IntersectionObserverCallback
  observe: ReturnType<typeof vi.fn>
  unobserve: ReturnType<typeof vi.fn>
  disconnect: ReturnType<typeof vi.fn>
}

describe('observeCenter', () => {
  const orig = globalThis.IntersectionObserver
  afterEach(() => {
    globalThis.IntersectionObserver = orig
  })

  it('IntersectionObserver 非対応なら no-op（throw しない）', () => {
    globalThis.IntersectionObserver =
      undefined as unknown as typeof globalThis.IntersectionObserver
    const el = document.createElement('div')
    expect(() => observeCenter(el, () => undefined)()).not.toThrow()
  })

  it('同一 root の el は observer を共有し、中央交差で対象の onEnter だけ呼ぶ', () => {
    const instances: MockIO[] = []
    globalThis.IntersectionObserver = vi.fn(
      (cb: IntersectionObserverCallback) => {
        const inst: MockIO = {
          cb,
          observe: vi.fn(),
          unobserve: vi.fn(),
          disconnect: vi.fn(),
        }
        instances.push(inst)
        return inst
      },
    ) as unknown as typeof globalThis.IntersectionObserver

    const root = document.createElement('div')
    const a = document.createElement('div')
    const b = document.createElement('div')
    root.append(a, b)
    const onA = vi.fn()
    const onB = vi.fn()

    const offA = observeCenter(a, onA)
    const offB = observeCenter(b, onB)

    // 同一 root（親）なので observer は1つだけ
    expect(instances).toHaveLength(1)
    expect(instances[0].observe).toHaveBeenCalledWith(a)
    expect(instances[0].observe).toHaveBeenCalledWith(b)

    // a が中央交差 → onA だけ
    instances[0].cb(
      [{ isIntersecting: true, target: a } as IntersectionObserverEntry],
      instances[0] as unknown as IntersectionObserver,
    )
    expect(onA).toHaveBeenCalledTimes(1)
    expect(onB).not.toHaveBeenCalled()

    // 最後の el を外すと disconnect
    offA()
    expect(instances[0].disconnect).not.toHaveBeenCalled()
    offB()
    expect(instances[0].disconnect).toHaveBeenCalled()
  })
})
