import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import fs from 'node:fs'
import type { Plugin } from 'vite'

/**
 * icon.css を virtual module として提供する vite plugin
 *
 * `@charcoal-ui/icons-css` は実在しないパッケージ名のため、
 * vite の import-analysis が CI 環境で解決に失敗する。
 * virtual module にすることで vite の module graph を経由せず
 * CSS 文字列を直接返す。
 */
function iconCssPlugin(): Plugin {
  const cssPath = path.resolve(import.meta.dirname, '../icons/css/icon.css')
  const virtualId = 'virtual:icon-css'
  const resolvedVirtualId = '\0' + virtualId
  return {
    name: 'inline-icon-css',
    resolveId(id) {
      if (id === virtualId) return resolvedVirtualId
    },
    load(id) {
      if (id === resolvedVirtualId) {
        const css = fs.readFileSync(cssPath, 'utf-8')
        return `export default ${JSON.stringify(css)}`
      }
    },
  }
}

export default defineConfig({
  server: {
    fs: {
      allow: [path.resolve(import.meta.dirname, '../..')],
    },
  },
  plugins: [
    iconCssPlugin(),
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
