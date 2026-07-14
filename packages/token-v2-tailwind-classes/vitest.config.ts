import path from 'node:path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  root: import.meta.dirname,
  test: {
    globals: true,
    environment: 'node',
    alias: [
      {
        find: '@charcoal-ui/tailwind-config',
        replacement: path.join(
          path.resolve(import.meta.dirname, '..'),
          'tailwind-config',
          'src',
          'tokenV2Mappings.ts',
        ),
      },
    ],
  },
})
