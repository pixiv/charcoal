import { defineConfig } from 'vitest/config'
import path from 'node:path'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['../../vitest.setup.ts'],
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
        find: /^@charcoal-ui\/(?!icon-files|theme\/tokens)(.*)/,
        replacement: path.join(
          path.resolve(import.meta.dirname, '..'),
          '$1',
          'src',
        ),
      },
    ],
  },
})
