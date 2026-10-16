/**
 * A reader for Kiwi, the binary format a `.fig` file stores its document in.
 *
 * Nothing here is specific to Figma. Kiwi carries its own schema — a `.fig` embeds the
 * exact schema its data was written against — so a reader needs only the wire format,
 * which is public, and never a copy of Figma's internal types. That is what makes
 * reading a `.fig` a decoding job rather than a reverse-engineering one: a file written
 * by a newer Figma describes itself.
 *
 * The format: varints little-endian, 7 bits to a byte. A struct writes its fields in
 * declaration order with no tags. A message writes `fieldId, value` pairs and ends at
 * field id 0, so a field left at its default is simply absent — which is why the caller
 * must know the defaults rather than expecting every field to arrive.
 */

const BOOL = -1
const BYTE = -2
const INT = -3
const UINT = -4
const FLOAT = -5
const STRING = -6
const INT64 = -7
const UINT64 = -8

const ENUM = 0
const STRUCT = 1

/** A cursor over the byte array, holding the decode position. */
class Reader {
  /** @param {Uint8Array} data */
  constructor(data) {
    this.data = data
    this.at = 0
    this.view = new DataView(data.buffer, data.byteOffset, data.byteLength)
  }

  byte() {
    return this.data[this.at++] ?? 0
  }

  varuint() {
    let value = 0
    let shift = 0
    for (;;) {
      const byte = this.byte()
      value += (byte & 0x7f) * 2 ** shift
      shift += 7
      if ((byte & 0x80) === 0) {
        return value
      }
    }
  }

  varint() {
    const value = this.varuint()
    return value & 1 ? -(value + 1) / 2 : value / 2
  }

  /**
   * Floats are stored with their bits rotated so that the common values — whole numbers
   * and zero — end in zero bytes and cost one byte instead of four.
   */
  varfloat() {
    if (this.data[this.at] === 0) {
      this.at++
      return 0
    }
    const bits = this.view.getUint32(this.at, true)
    this.at += 4
    const rotated = ((bits << 23) | (bits >>> 9)) >>> 0
    this.view.setUint32(0, rotated, true)
    return this.view.getFloat32(0, true)
  }

  string() {
    const start = this.at
    while (this.data[this.at] !== 0) {
      this.at++
    }
    const text = DECODER.decode(this.data.subarray(start, this.at))
    this.at++
    return text
  }
}

const DECODER = new TextDecoder()

/**
 * The schema that was written alongside the data: every type the file uses, in the
 * order the data refers to them by index.
 *
 * @param {Uint8Array} bytes
 */
export function parseSchema(bytes) {
  const reader = new Reader(bytes)
  const definitions = []
  const count = reader.varuint()
  for (let i = 0; i < count; i++) {
    const name = reader.string()
    const kind = reader.byte()
    const fields = []
    const fieldCount = reader.varuint()
    for (let f = 0; f < fieldCount; f++) {
      fields.push({
        name: reader.string(),
        type: reader.varint(),
        isArray: reader.byte() !== 0,
        id: reader.varuint(),
      })
    }
    definitions.push({ name, kind, fields, byId: new Map() })
  }
  for (const definition of definitions) {
    for (const field of definition.fields) {
      definition.byId.set(field.id, field)
    }
  }
  return definitions
}

/**
 * Decodes one value of the given type. Enums come back as their integer — the schema
 * names the type but not its members, so turning 25 into `FRAME` is the caller's job.
 *
 * @param {Reader} reader
 * @param {ReturnType<typeof parseSchema>} definitions
 * @param {number} type
 * @returns {any}
 */
function value(reader, definitions, type) {
  switch (type) {
    case BOOL:
      return reader.byte() !== 0
    case BYTE:
      return reader.byte()
    case INT:
    case INT64:
      return reader.varint()
    case UINT:
    case UINT64:
      return reader.varuint()
    case FLOAT:
      return reader.varfloat()
    case STRING:
      return reader.string()
    default:
      break
  }
  /** @type {any} */
  const definition = definitions[type]
  if (!definition) {
    throw new Error(`No type ${type} in this file's schema`)
  }
  if (definition.kind === ENUM) {
    return reader.varuint()
  }
  if (definition.kind === STRUCT) {
    /** @type {Record<string, any>} */
    const out = {}
    for (const field of definition.fields) {
      out[field.name] = field.isArray
        ? array(reader, definitions, field.type)
        : value(reader, definitions, field.type)
    }
    return out
  }
  /** @type {Record<string, any>} */
  const out = {}
  for (;;) {
    const id = reader.varuint()
    if (id === 0) {
      return out
    }
    const field = definition.byId.get(id)
    if (!field) {
      throw new Error(`Field ${id} is not in ${definition.name}`)
    }
    out[field.name] = field.isArray
      ? array(reader, definitions, field.type)
      : value(reader, definitions, field.type)
  }
}

/**
 * @param {Reader} reader
 * @param {ReturnType<typeof parseSchema>} definitions
 * @param {number} type
 */
function array(reader, definitions, type) {
  const length = reader.varuint()
  const out = new Array(length)
  for (let i = 0; i < length; i++) {
    out[i] = value(reader, definitions, type)
  }
  return out
}

/**
 * Decodes the whole payload as one value of the named type.
 *
 * @param {Uint8Array} bytes
 * @param {ReturnType<typeof parseSchema>} definitions
 * @param {string} rootName
 */
export function decode(bytes, definitions, rootName) {
  const root = definitions.findIndex((d) => d.name === rootName)
  if (root === -1) {
    throw new Error(`No ${rootName} type in this file's schema`)
  }
  const reader = new Reader(bytes)
  const decoded = value(reader, definitions, root)
  if (reader.at !== bytes.length) {
    // A short read means the schema and the data disagree, and everything decoded after
    // the first wrong field is quietly garbage. Better to refuse than to hand that on.
    throw new Error(
      `Decoded ${reader.at} of ${bytes.length} bytes; this file's schema did not fit its data`,
    )
  }
  return decoded
}
