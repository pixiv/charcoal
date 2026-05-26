import type { SnapshotSerializer } from 'vitest'

const reactAriaIdPattern = /react-aria-:r[0-9a-z]+:/g

export default {
  serialize(val, config, indentation, depth, refs, printer) {
    const replaced = (val as string).replace(
      reactAriaIdPattern,
      'react-aria-:test-id:'
    )
    return printer(replaced, config, indentation, depth, refs)
  },
  test(val) {
    return typeof val === 'string' && reactAriaIdPattern.test(val)
  },
} satisfies SnapshotSerializer
