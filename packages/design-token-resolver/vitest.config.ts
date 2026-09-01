import { defineConfig } from 'vitest/config'
import path from 'node:path'

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    alias: [
      {
        find: '@charcoal-ui/tailwind-config/token-v2',
        replacement: path.join(
          path.resolve(import.meta.dirname, '..'),
          'tailwind-config',
          'src',
          'token-v2',
          'index.ts',
        ),
      },
      {
        find: /^@charcoal-ui\/(?!theme\/tokens)(.*)/,
        replacement: path.join(
          path.resolve(import.meta.dirname, '..'),
          '$1',
          'src',
        ),
      },
    ],
  },
})
