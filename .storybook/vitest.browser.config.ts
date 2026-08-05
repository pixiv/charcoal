import path from 'node:path'

import react from '@vitejs/plugin-react'
import { playwright } from '@vitest/browser-playwright'
import { defineConfig } from 'vitest/config'

const root = path.resolve(import.meta.dirname, '..')
const pkg = (...parts: string[]) => path.join(root, 'packages', ...parts)

export default defineConfig({
  define: {
    'process.env.TEST': 'undefined',
  },
  plugins: [react()],
  server: {
    fs: {
      allow: [root],
    },
  },
  test: {
    name: 'storybook-browser',
    globals: true,
    include: [path.join(import.meta.dirname, 'storybook.browser.test.tsx')],
    setupFiles: [path.join(import.meta.dirname, 'vitest.browser.setup.ts')],
    testTimeout: 30_000,
    attachmentsDir: path.join(root, '__diff_output__'),
    browser: {
      enabled: true,
      provider: playwright(),
      headless: true,
      instances: [
        {
          browser: 'chromium',
          viewport: {
            width: 1280,
            height: 720,
          },
        },
      ],
      screenshotFailures: false,
      expect: {
        toMatchScreenshot: {
          resolveScreenshotPath({ arg, ext }) {
            return path.join(root, '__image_snapshots__', `${arg}-snap${ext}`)
          },
          resolveDiffPath({ arg, ext }) {
            return path.join(root, '__diff_output__', `${arg}${ext}`)
          },
        },
      },
    },
    alias: [
      {
        find: /^@charcoal-ui\/icons\/css\/(.+)$/,
        replacement: pkg('icons', 'css', '$1'),
      },
      {
        find: '@charcoal-ui/theme/tokens/css-variables.json',
        replacement: pkg('theme', 'dist', 'tokens', 'css-variables.json'),
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
