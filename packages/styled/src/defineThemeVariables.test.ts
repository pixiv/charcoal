import { light } from '@charcoal-ui/theme'
import { defineThemeVariables } from './util'

describe('defineThemeVariables', () => {
  const props = { theme: light }

  describe('overriding text1', () => {
    const colorParams = { text1: '#ff0000' }

    const text1_WITH_DEFAULT_EFFECTS = {
      '--charcoal-text1': '#ff0000',
      '--charcoal-text1-hover': '#f50000',
      '--charcoal-text1-press': '#d60000',
    }

    describe('with all effects', () => {
      const definition = defineThemeVariables(colorParams)

      it('defines css variables', () => {
        expect(definition(props)).toEqual({
          ...text1_WITH_DEFAULT_EFFECTS,
        })
      })
    })

    describe('overriding hover', () => {
      it('defines css variables', () => {
        const definition = defineThemeVariables(colorParams, {
          hover: {
            type: 'alpha',
            color: 'rgba(0, 0, 0, 0.3)',
          },
        })

        expect(definition(props)).toEqual({
          ...text1_WITH_DEFAULT_EFFECTS,
          '--charcoal-text1-hover': '#b30000',
        })
      })
    })
  })
})
