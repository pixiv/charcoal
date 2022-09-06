import themeDecorator from './theme-decorator'
import './global.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z0-9].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [themeDecorator]
