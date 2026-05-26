import type { SnapshotSerializer } from 'vitest'

const unstableIdPattern = /react-aria-:r[0-9a-z]+:|react-aria-:test-id:/g

export default {
  serialize(val, config, indentation, depth, refs, printer) {
    const replaced = (val as string).replace(unstableIdPattern, 'test-id')
    return printer(replaced, config, indentation, depth, refs)
  },
  test(val) {
    return typeof val === 'string' && unstableIdPattern.test(val)
  },
} satisfies SnapshotSerializer
