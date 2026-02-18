import { defineConfig } from 'vitest/config'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  test: {
    globals: true,
    alias: [
      {
        find: /@charcoal-ui\/(.*)/,
        replacement: path.join(path.resolve(__dirname, '..'), '$1', 'src'),
      },
    ],
  },
})
