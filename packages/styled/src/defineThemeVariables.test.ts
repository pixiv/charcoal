import { light } from '@charcoal-ui/theme'
import { defineThemeVariables } from './util'

describe('defineThemeVariables', () => {
  describe('light theme', () => {
    const definition = defineThemeVariables({ text1: '#ff0000' })
    const props = { theme: light }

    it('defines css variables', () => {
      expect(definition(props)).toEqual({
        '--charcoal-text1': '#ff0000',
        '--charcoal-text1-hover': '#f50000',
        '--charcoal-text1-press': '#d60000',
        '--charcoal-text1-disabled': 'rgba(255,0,0,0.32)',
      })
    })
  })
})
