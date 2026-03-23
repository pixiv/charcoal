import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'node:path'

export default defineConfig({
  server: {
    fs: {
      allow: [path.resolve(import.meta.dirname, '../..')],
    },
  },
  plugins: [
    react({
      babel: {
        plugins: [
          [
            'babel-plugin-react-compiler',
            {
              compilationMode: 'annotation',
              target: '18',
            },
          ],
        ],
      },
    }),
  ],
  test: {
    globals: true,
    include: ['src/**/*.browser.test.{ts,tsx}'],
    browser: {
      enabled: true,
      provider: 'playwright',
      name: 'chromium',
      headless: true,
    },
    alias: [
      {
        find: '@charcoal-ui/icons-css',
        replacement: path.resolve(import.meta.dirname, '../icons/css'),
      },
      {
        find: /@charcoal-ui\/(.*)/,
        replacement: path.join(
          path.resolve(import.meta.dirname, '..'),
          '$1',
          'src',
        ),
      },
    ],
  },
})
