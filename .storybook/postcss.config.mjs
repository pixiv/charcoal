import { resolve } from 'node:path'

export default {
  plugins: {
    tailwindcss: {
      config: resolve(import.meta.dirname, './tailwind.config.mjs'),
    },
    autoprefixer: {},
  },
}
