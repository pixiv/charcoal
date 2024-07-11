/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import * as path from 'node:path'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    alias: [
      {
        find: /@charcoal-ui\/(.*)/,
        replacement: path.join(
          path.resolve(__dirname, 'packages'),
          '$1',
          'src'
        ),
      },
    ],
    server: {
      deps: {
        inline: [
          /@react-aria\/(.*)/,
          /@react-stately\/(.*)/,
          /react-stately/,
          /@charcoal-ui\/(.*)/,
        ]
      }
    }
  },
})
