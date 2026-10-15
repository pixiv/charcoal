import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    // The scripts under test read files and shell out; they never touch a DOM, and the
    // root config's jsdom would only slow them down.
    environment: 'node',
    include: ['**/*.test.ts'],
  },
})
