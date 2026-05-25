import { defineConfig } from 'vitest/config'
import path from 'node:path'

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    alias: [
      {
        find: /^@charcoal-ui\/icons\/css\/(.+)$/,
        replacement: path.join(
          path.resolve(import.meta.dirname, '..'),
          'icons',
          'css',
          '$1',
        ),
      },
      {
        find: /@charcoal-ui\/(.*)/,
        replacement: path.join(
          path.resolve(import.meta.dirname, '..'),
          '$1',
          'src',
        ),
      },
    ],
  },
})
