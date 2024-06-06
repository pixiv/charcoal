import themeDecorator from './theme-decorator'
import { DocsContainer } from './docs-container'

import './global.css'

/** @type  */
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z0-9].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['react', ['*', 'internals']],
    },
  },
  viewMode: 'docs',
  docs: {
    container: DocsContainer,
  },
}

export const decorators = [themeDecorator]
