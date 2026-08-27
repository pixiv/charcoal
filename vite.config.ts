/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    projects: [
      'packages/*/vitest.config.ts',
      'packages/react/vitest.browser.config.ts',
      '.storybook/vitest.config.ts',
      'misc/charcoal-skill/vitest.config.ts',
    ],
    snapshotFormat: {
      printShadowRoot: false,
    },
    setupFiles: ['./vitest.setup.ts'],
    snapshotSerializers: ['./misc/test/vitest.snapshot-serializer.ts'],
    server: {
      deps: {
        inline: [/@charcoal-ui\/(.*)/],
      },
    },
  },
})
