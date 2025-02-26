import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

import * as path from 'node:path'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['../../vitest.setup.ts', './vitest.setup.ts'],
    alias: [
      {
        find: /@charcoal-ui\/(.*)/,
        replacement: path.join(path.resolve(__dirname, '..'), '$1', 'src'),
      },
    ],
  },
})
