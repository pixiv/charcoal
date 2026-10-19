// import { loaders } from './loaders'
import { PixivIcon, PixivIconLoadError, calcActualSize } from '.'
import {
  vi,
  describe,
  it,
  expect,
  beforeEach,
  afterEach,
  expectTypeOf,
} from 'vitest'

describe('PixivIcon', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  let icon: PixivIcon
  beforeEach(() => {
    icon = document.createElement('pixiv-icon') as PixivIcon

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    icon.waitUntilVisible = () => Promise.resolve()
  })

  it('can createElement()', () => {
    expect(icon.constructor.name).toBe('PixivIcon')
  })
})

describe('PixivIcon lifecycle', () => {
  let nextIcon = 0
  const observers: TestIntersectionObserver[] = []
  class TestIntersectionObserver implements IntersectionObserver {
    readonly root = null
    readonly rootMargin = '50px'
    readonly thresholds = [0]
    observe = vi.fn()
    unobserve = vi.fn()
    disconnect = vi.fn()
    takeRecords = vi.fn(() => [])

    constructor(private callback: IntersectionObserverCallback) {
      observers.push(this)
    }

    show() {
      this.callback(
        [{ isIntersecting: true } as IntersectionObserverEntry],
        this,
      )
    }
  }

  let icon: PixivIcon
  beforeEach(() => {
    observers.length = 0
    vi.stubGlobal('IntersectionObserver', TestIntersectionObserver)
    icon = document.createElement('pixiv-icon') as PixivIcon
    icon.setAttribute('name', '16/TestLifecycle')
  })

  afterEach(() => {
    icon.disconnectedCallback()
    vi.unstubAllGlobals()
  })

  it('settles visibility waits when disconnected before becoming visible', async () => {
    const settled = vi.fn()
    void icon.connectedCallback().then(settled)
    icon.disconnectedCallback()
    await Promise.resolve()
    await Promise.resolve()

    expect(observers[0].disconnect).toHaveBeenCalledOnce()
    expect(settled).toHaveBeenCalledOnce()
  })

  it('keeps only one observer when connected again', () => {
    void icon.connectedCallback()
    void icon.connectedCallback()

    expect(observers).toHaveLength(2)
    expect(observers[0].disconnect).toHaveBeenCalledOnce()
    expect(observers[1].disconnect).not.toHaveBeenCalled()
  })

  it('ignores queued visibility callbacks from a previous connection', async () => {
    const settled = vi.fn()
    void icon.connectedCallback().then(settled)
    icon.disconnectedCallback()
    void icon.connectedCallback()
    observers[0].show()
    await Promise.resolve()
    await Promise.resolve()

    expect(settled).toHaveBeenCalledOnce()
    expect(observers[1].disconnect).not.toHaveBeenCalled()
  })

  function deferredIcon() {
    const name = `16/DeferredLifecycle${nextIcon++}`
    const deferred = Promise.withResolvers<string>()
    PixivIcon.extend({ [name]: () => deferred.promise })
    return { name, ...deferred }
  }

  async function showIcon() {
    const connection = icon.connectedCallback()
    observers.at(-1)?.show()
    await Promise.resolve()
    return { connection }
  }

  it('keeps the latest icon when loads resolve out of order', async () => {
    const first = deferredIcon()
    const second = deferredIcon()
    icon.setAttribute('name', first.name)
    const { connection } = await showIcon()
    icon.setAttribute('name', second.name)

    second.resolve('<svg data-icon="second"></svg>')
    await vi.waitFor(() => {
      expect(icon.shadowRoot?.querySelector('svg')?.dataset.icon).toBe('second')
    })
    first.resolve('<svg data-icon="first"></svg>')
    await connection
    expect(icon.shadowRoot?.querySelector('svg')?.dataset.icon).toBe('second')
  })

  it('does not render a pending load after disconnecting', async () => {
    const pending = deferredIcon()
    icon.setAttribute('name', pending.name)
    const { connection } = await showIcon()
    icon.disconnectedCallback()
    pending.resolve('<svg data-icon="detached"></svg>')
    await connection

    expect(icon.shadowRoot?.querySelector('[data-icon]')).toBeNull()
  })

  it('dispatches a load error and leaves a placeholder after a name change fails', async () => {
    const first = deferredIcon()
    icon.setAttribute('name', first.name)
    const { connection } = await showIcon()
    first.resolve('<svg data-icon="first"></svg>')
    await connection
    const errors: unknown[] = []
    icon.addEventListener('error', (event) => {
      errors.push((event as CustomEvent<unknown>).detail)
    })

    icon.setAttribute('name', '16/MissingLifecycleIcon')
    await vi.waitFor(() => expect(errors).toHaveLength(1))
    expect(errors[0]).toBeInstanceOf(PixivIconLoadError)
    expect(icon.shadowRoot?.querySelector('svg')).not.toBeNull()
    expect(icon.shadowRoot?.querySelector('[data-icon]')).toBeNull()
  })

  it('ignores failures from superseded loads', async () => {
    const first = deferredIcon()
    const second = deferredIcon()
    const onError = vi.fn()
    icon.addEventListener('error', onError)
    icon.setAttribute('name', first.name)
    const { connection } = await showIcon()
    icon.setAttribute('name', second.name)
    second.resolve('<svg data-icon="second"></svg>')
    first.reject(new Error('superseded load'))
    await connection

    await vi.waitFor(() => {
      expect(icon.shadowRoot?.querySelector('svg')?.dataset.icon).toBe('second')
    })
    expect(onError).not.toHaveBeenCalled()
  })
})

describe('calcActualSize', () => {
  describe('fixedSize', () => {
    it('returns the given size directly', () => {
      expect(calcActualSize({ name: '24/Add', fixedSize: 100 })).toBe(100)
    })

    it('returns the given size for Inline icons', () => {
      expect(calcActualSize({ name: 'Inline/Add', fixedSize: 48 })).toBe(48)
    })
  })

  describe('unsafeNonGuidelineScale (deprecated)', () => {
    it('scales 24/ icons', () => {
      expect(
        calcActualSize({ name: '24/Add', unsafeNonGuidelineScale: 1.5 }),
      ).toBe(36)
    })

    it('scales Inline/ icons from base 16', () => {
      expect(
        calcActualSize({ name: 'Inline/Add', unsafeNonGuidelineScale: 2 }),
      ).toBe(32)
    })

    it('scales other size icons', () => {
      expect(
        calcActualSize({ name: '32/Add', unsafeNonGuidelineScale: 0.5 }),
      ).toBe(16)
    })
  })

  describe('guideline scale', () => {
    describe('Inline icons', () => {
      it('returns 16 by default', () => {
        expect(calcActualSize({ name: 'Inline/Add' })).toBe(16)
      })

      it('returns 16 for scale=1', () => {
        expect(calcActualSize({ name: 'Inline/Add', scale: 1 })).toBe(16)
      })

      it('returns 32 for scale=2', () => {
        expect(calcActualSize({ name: 'Inline/Add', scale: 2 })).toBe(32)
      })

      it('returns 16 for scale=3', () => {
        expect(calcActualSize({ name: 'Inline/Add', scale: 3 })).toBe(16)
      })
    })

    describe('24/ icons', () => {
      it('returns 24 by default', () => {
        expect(calcActualSize({ name: '24/Add' })).toBe(24)
      })

      it('returns 48 for scale=2', () => {
        expect(calcActualSize({ name: '24/Add', scale: 2 })).toBe(48)
      })

      it('returns 72 for scale=3', () => {
        expect(calcActualSize({ name: '24/Add', scale: 3 })).toBe(72)
      })
    })

    describe('other size icons', () => {
      it('returns base size regardless of scale', () => {
        expect(calcActualSize({ name: '32/Add', scale: 2 })).toBe(32)
      })

      it('returns 16 for 16/ icons', () => {
        expect(calcActualSize({ name: '16/Add' })).toBe(16)
      })
    })

    describe('string scale values', () => {
      it('handles scale "1"', () => {
        expect(calcActualSize({ name: '24/Add', scale: '1' })).toBe(24)
      })

      it('handles scale "2"', () => {
        expect(calcActualSize({ name: '24/Add', scale: '2' })).toBe(48)
      })

      it('handles scale "3"', () => {
        expect(calcActualSize({ name: '24/Add', scale: '3' })).toBe(72)
      })
    })
  })

  describe('edge cases: invalid name', () => {
    it('throws for empty string name', () => {
      expect(() => calcActualSize({ name: '' })).toThrow(TypeError)
    })

    it('throws for name without / separator', () => {
      expect(() => calcActualSize({ name: 'BadName' })).toThrow(TypeError)
    })

    it('throws for name with non-numeric size prefix', () => {
      expect(() => calcActualSize({ name: 'abc/Icon' })).toThrow(TypeError)
    })
  })

  describe('edge cases: zero, negative, and Infinity values', () => {
    it('throws for fixedSize = 0', () => {
      expect(() => calcActualSize({ name: '24/Add', fixedSize: 0 })).toThrow(
        TypeError,
      )
    })

    it('throws for negative fixedSize', () => {
      expect(() => calcActualSize({ name: '24/Add', fixedSize: -10 })).toThrow(
        TypeError,
      )
    })

    it('throws for Infinity fixedSize', () => {
      expect(() =>
        calcActualSize({ name: '24/Add', fixedSize: Infinity }),
      ).toThrow(TypeError)
    })

    it('throws for unsafeNonGuidelineScale = 0', () => {
      expect(() =>
        calcActualSize({ name: '24/Add', unsafeNonGuidelineScale: 0 }),
      ).toThrow(TypeError)
    })

    it('throws for negative unsafeNonGuidelineScale', () => {
      expect(() =>
        calcActualSize({ name: '24/Add', unsafeNonGuidelineScale: -1 }),
      ).toThrow(TypeError)
    })

    it('throws for Infinity unsafeNonGuidelineScale', () => {
      expect(() =>
        calcActualSize({ name: '24/Add', unsafeNonGuidelineScale: Infinity }),
      ).toThrow(TypeError)
    })
  })

  describe('IconSizing union type', () => {
    it('accepts scale only', () => {
      expectTypeOf(calcActualSize).toBeCallableWith({
        name: '24/Add',
        scale: 2,
      })
    })

    it('accepts unsafeNonGuidelineScale only', () => {
      expectTypeOf(calcActualSize).toBeCallableWith({
        name: '24/Add',
        unsafeNonGuidelineScale: 1.5,
      })
    })

    it('accepts fixedSize only', () => {
      expectTypeOf(calcActualSize).toBeCallableWith({
        name: '24/Add',
        fixedSize: 64,
      })
    })

    it('accepts no sizing (defaults)', () => {
      expectTypeOf(calcActualSize).toBeCallableWith({ name: '24/Add' })
    })

    it('rejects scale + unsafeNonGuidelineScale', () => {
      // @ts-expect-error scale and unsafeNonGuidelineScale are mutually exclusive
      expectTypeOf(calcActualSize).toBeCallableWith({
        name: '24/Add',
        scale: 2,
        unsafeNonGuidelineScale: 1.5,
      })
    })

    it('rejects scale + fixedSize', () => {
      // @ts-expect-error scale and fixedSize are mutually exclusive
      expectTypeOf(calcActualSize).toBeCallableWith({
        name: '24/Add',
        scale: 2,
        fixedSize: 64,
      })
    })

    it('rejects unsafeNonGuidelineScale + fixedSize', () => {
      // @ts-expect-error unsafeNonGuidelineScale and fixedSize are mutually exclusive
      expectTypeOf(calcActualSize).toBeCallableWith({
        name: '24/Add',
        unsafeNonGuidelineScale: 1.5,
        fixedSize: 64,
      })
    })

    it('rejects all three', () => {
      // @ts-expect-error all three sizing options are mutually exclusive
      expectTypeOf(calcActualSize).toBeCallableWith({
        name: '24/Add',
        scale: 2,
        unsafeNonGuidelineScale: 1.5,
        fixedSize: 64,
      })
    })
  })
})
