/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    server: {
      deps: {
        inline: [
          /@react-aria\/(.*)/,
          /@react-stately\/(.*)/,
          /react-stately/,
          /@charcoal-ui\/(.*)/,
        ],
      },
    },
  },
})
