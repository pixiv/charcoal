import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '..')
const pkg = (...p: string[]) => path.join(root, 'packages', ...p)

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    include: [path.join(import.meta.dirname, '**/*.test.ts')],
    setupFiles: [path.join(root, 'vitest.setup.ts')],
    snapshotSerializers: [
      path.join(import.meta.dirname, 'snapshot-serializer.ts'),
    ],
    alias: [
      {
        find: /^@charcoal-ui\/icons\/css\/(.+)$/,
        replacement: pkg('icons', 'css', '$1'),
      },
      {
        find: '@charcoal-ui/theme/unstable-tokens/css-variables.json',
        replacement: pkg('theme', 'dist', 'unstable-tokens', 'css-variables.json'),
      },
      {
        find: '@charcoal-ui/icon-files/v2/datauri',
        replacement: pkg('icon-files', 'v2', 'datauri', 'index.mjs'),
      },
      {
        find: '@charcoal-ui/icon-files/v1/datauri',
        replacement: pkg('icon-files', 'v1', 'datauri', 'index.mjs'),
      },
      {
        find: /@charcoal-ui\/(.*)/,
        replacement: pkg('$1', 'src'),
      },
    ],
  },
})
