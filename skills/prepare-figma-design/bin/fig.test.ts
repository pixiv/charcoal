import { expect, test } from 'vitest'
import { decode, parseSchema } from './kiwi.mjs'
import { boxOf, compose } from './fig.mjs'

/**
 * Kiwi has no encoder here — a `.fig` is only ever read — so the tests build the bytes
 * they decode. Doing it by hand is the point: it pins the wire format down
 * independently of the reader, which is the only way a round trip proves anything.
 */
class Bytes {
  private out: number[] = []

  byte(value: number) {
    this.out.push(value & 0xff)
    return this
  }

  varuint(value: number) {
    for (;;) {
      const part = value & 0x7f
      value >>>= 7
      this.out.push(value ? part | 0x80 : part)
      if (!value) {
        return this
      }
    }
  }

  /** Kiwi stores a signed number zigzagged, so that small negatives stay one byte. */
  varint(value: number) {
    return this.varuint(value < 0 ? -value * 2 - 1 : value * 2)
  }

  /** The reader rotates a float's bits left by 23; writing one rotates them back. */
  varfloat(value: number) {
    if (value === 0) {
      return this.byte(0)
    }
    const view = new DataView(new ArrayBuffer(4))
    view.setFloat32(0, value, true)
    const bits = view.getUint32(0, true)
    const stored = ((bits << 9) | (bits >>> 23)) >>> 0
    view.setUint32(0, stored, true)
    for (let i = 0; i < 4; i++) {
      this.out.push(view.getUint8(i))
    }
    return this
  }

  string(text: string) {
    for (const b of new TextEncoder().encode(text)) {
      this.out.push(b)
    }
    return this.byte(0)
  }

  done() {
    return new Uint8Array(this.out)
  }
}

const BOOL = -1
const INT = -3
const FLOAT = -5
const STRING = -6
const STRUCT = 1
const MESSAGE = 2

/** A schema with one struct and one message, covering every shape the reader meets. */
function schema() {
  const b = new Bytes().varuint(2)
  b.string('Point').byte(STRUCT).varuint(2)
  b.string('x').varint(FLOAT).byte(0).varuint(1)
  b.string('y').varint(FLOAT).byte(0).varuint(2)
  b.string('Doc').byte(MESSAGE).varuint(5)
  b.string('name').varint(STRING).byte(0).varuint(1)
  b.string('at').varint(0).byte(0).varuint(2) // type 0 is Point
  b.string('tags').varint(STRING).byte(1).varuint(3) // an array
  b.string('depth').varint(INT).byte(0).varuint(4)
  b.string('visible').varint(BOOL).byte(0).varuint(5)
  return parseSchema(b.done())
}

test('reads a message, its struct, its array and its negative numbers', () => {
  const defs = schema()
  const b = new Bytes()
  b.varuint(1).string('Screen')
  b.varuint(2).varfloat(12.5).varfloat(0) // a struct writes its fields in order
  b.varuint(3).varuint(2).string('a').string('b')
  b.varuint(4).varint(-7)
  b.varuint(5).byte(1)
  b.varuint(0) // a message ends at field id 0

  expect(decode(b.done(), defs, 'Doc')).toEqual({
    name: 'Screen',
    at: { x: 12.5, y: 0 },
    tags: ['a', 'b'],
    depth: -7,
    visible: true,
  })
})

test('a field left at its default is simply absent', () => {
  // Which is why the caller has to know the defaults: a missing `visible` means true,
  // not unknown, and treating absence as false hides half a design.
  const defs = schema()
  const b = new Bytes().varuint(1).string('Bare').varuint(0)
  expect(decode(b.done(), defs, 'Doc')).toEqual({ name: 'Bare' })
})

test('refuses a payload its schema does not account for', () => {
  // A short read means the two disagree, and everything after the first wrong field is
  // quietly garbage. Half a design silently mis-decoded is worse than no design.
  const defs = schema()
  const b = new Bytes().varuint(1).string('Screen').varuint(0).byte(99)
  expect(() => decode(b.done(), defs, 'Doc')).toThrow(/did not fit its data/)
})

test('names a type it does not have rather than guessing', () => {
  expect(() => decode(new Uint8Array([0]), schema(), 'Nope')).toThrow(/No Nope/)
})

const IDENTITY = { m00: 1, m01: 0, m02: 0, m10: 0, m11: 1, m12: 0 }
const translate = (x: number, y: number) => ({ ...IDENTITY, m02: x, m12: y })

test('nesting offsets compose into one absolute position', () => {
  // The REST API hands back an absolute box; a .fig stores each transform against its
  // parent, so this is the arithmetic that has to replace it.
  const page = translate(100, 200)
  const card = compose(page, translate(10, 20))
  expect(boxOf(card, { x: 50, y: 40 })).toEqual({
    x: 110,
    y: 220,
    width: 50,
    height: 40,
  })
})

test('a rotated node is as wide as the box that contains it', () => {
  // `absoluteBoundingBox` is upright, so a square turned 45° reports as wider than it
  // is. Taking m02/m12 as the position and size as the size would miss that entirely.
  const r = Math.SQRT1_2
  const turned = { m00: r, m01: -r, m02: 0, m10: r, m11: r, m12: 0 }
  const box = boxOf(turned, { x: 10, y: 10 })
  expect(box.width).toBeCloseTo(Math.SQRT2 * 10, 5)
  expect(box.height).toBeCloseTo(Math.SQRT2 * 10, 5)
  expect(box.x).toBeCloseTo(-Math.SQRT1_2 * 10, 5)
})

test('a node with no size still has a position', () => {
  expect(boxOf(translate(5, 6), undefined)).toEqual({
    x: 5,
    y: 6,
    width: 0,
    height: 0,
  })
})
