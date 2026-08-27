import path from 'node:path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  root: path.resolve(import.meta.dirname, '../..'),
  test: {
    globals: true,
    environment: 'node',
    include: ['misc/charcoal-skill/tests/**/*.{test,spec}.{js,mjs,ts}'],
    alias: [
      {
        find: '@charcoal-ui/tailwind-config',
        replacement: path.join(
          path.resolve(import.meta.dirname, '../..'),
          'packages',
          'tailwind-config',
          'src',
          'tokenV2Mappings.ts',
        ),
      },
    ],
  },
})
