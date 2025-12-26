
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

export default {
  plugins: {
    tailwindcss: {
      config: resolve(dirname(fileURLToPath(import.meta.url)), './tailwind.config.mjs'),
    },
    autoprefixer: {},
  },
}
