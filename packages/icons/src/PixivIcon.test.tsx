// import { loaders } from './loaders'
import { PixivIcon, calcActualSize } from '.'
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

describe('calcActualSize', () => {
  describe('unsafeNonGuidelineSize', () => {
    it('returns the given size directly', () => {
      expect(
        calcActualSize({ name: '24/Add', unsafeNonGuidelineSize: 100 }),
      ).toBe(100)
    })

    it('returns the given size for Inline icons', () => {
      expect(
        calcActualSize({ name: 'Inline/Add', unsafeNonGuidelineSize: 48 }),
      ).toBe(48)
    })
  })

  describe('unsafeNonGuidelineScale', () => {
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
    it('throws for unsafeNonGuidelineSize = 0', () => {
      expect(() =>
        calcActualSize({ name: '24/Add', unsafeNonGuidelineSize: 0 }),
      ).toThrow(TypeError)
    })

    it('throws for negative unsafeNonGuidelineSize', () => {
      expect(() =>
        calcActualSize({ name: '24/Add', unsafeNonGuidelineSize: -10 }),
      ).toThrow(TypeError)
    })

    it('throws for Infinity unsafeNonGuidelineSize', () => {
      expect(() =>
        calcActualSize({ name: '24/Add', unsafeNonGuidelineSize: Infinity }),
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

    it('accepts unsafeNonGuidelineSize only', () => {
      expectTypeOf(calcActualSize).toBeCallableWith({
        name: '24/Add',
        unsafeNonGuidelineSize: 64,
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

    it('rejects scale + unsafeNonGuidelineSize', () => {
      // @ts-expect-error scale and unsafeNonGuidelineSize are mutually exclusive
      expectTypeOf(calcActualSize).toBeCallableWith({
        name: '24/Add',
        scale: 2,
        unsafeNonGuidelineSize: 64,
      })
    })

    it('rejects unsafeNonGuidelineScale + unsafeNonGuidelineSize', () => {
      // @ts-expect-error unsafeNonGuidelineScale and unsafeNonGuidelineSize are mutually exclusive
      expectTypeOf(calcActualSize).toBeCallableWith({
        name: '24/Add',
        unsafeNonGuidelineScale: 1.5,
        unsafeNonGuidelineSize: 64,
      })
    })

    it('rejects all three', () => {
      // @ts-expect-error all three sizing options are mutually exclusive
      expectTypeOf(calcActualSize).toBeCallableWith({
        name: '24/Add',
        scale: 2,
        unsafeNonGuidelineScale: 1.5,
        unsafeNonGuidelineSize: 64,
      })
    })
  })
})
