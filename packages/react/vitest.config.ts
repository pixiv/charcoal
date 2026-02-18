import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

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
