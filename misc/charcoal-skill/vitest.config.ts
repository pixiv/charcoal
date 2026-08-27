import { defineConfig } from 'vitest/config'

export default defineConfig({
  root: import.meta.dirname,
  test: {
    globals: true,
    environment: 'node',
    include: ['tests/**/*.{test,spec}.{js,mjs,ts}'],
  },
})
