/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    snapshotSerializers: ['./misc/test/vitest.snapshot-serializer.ts'],
    server: {
      deps: {
        inline: [/@charcoal-ui\/(.*)/, /react-stately/, /react-aria/],
      },
    },
  },
})
