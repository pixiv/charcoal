import { defineConfig } from 'vitest/config'

import * as path from 'node:path'

export default defineConfig({
  test: {
    globals: true,
    typecheck: {
      enabled: true,
    },
    benchmark: {},
    alias: [
      {
        find: /@charcoal-ui\/(.*)/,
        replacement: path.join(path.resolve(__dirname, '..'), '$1', 'src'),
      },
    ],
  },
})
