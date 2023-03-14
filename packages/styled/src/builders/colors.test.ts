import { light } from '@charcoal-ui/theme'
import { notDisabledSelector } from '@charcoal-ui/utils'
import { PropertyChain } from '../factories/lib'
import { Internal, toCSSObjects, getContext } from '../internals'
import colors from './colors'

describe('styled/colors', () => {
  const o = colors(light)

  describe('o.bg', () => {
    it('色名のプロパティで型がつく', () => {
      // ここが型エラーになった場合、o.bg の型がゆるくなってる可能性がある
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: { background1: PropertyChain<Internal, 'hover' | 'press'> } =
        o.bg

      expect(o.bg).toHaveProperty('background1')
    })

    describe('o.bg.[color]', () => {
      const internal = o.bg.background1

      it('background-color を定義する', () => {
        const [css] = toCSSObjects([internal])

        expect(css).toEqual({
          'background-color': 'var(--charcoal-background1)',
        })
      })

      it('context はない', () => {
        const context = getContext([internal])

        expect(context).toEqual({})
      })

      describe('o.bg.[color].hover', () => {
        const internal = o.bg.background1.hover

        it('background-color を定義する', () => {
          const [css] = toCSSObjects([internal])

          expect(css).toEqual({
            'background-color': 'var(--charcoal-background1)',

            '&:hover': {
              [notDisabledSelector]: {
                'background-color': 'var(--charcoal-background1-hover)',
              },
            },
          })
        })

        it('background-color の transition が有効になる', () => {
          const context = getContext([internal])

          expect(context).toEqual({
            backgroundColorTransition: true,
          })
        })
      })

      describe('o.bg.[color].hover.press', () => {
        const internal = o.bg.background1.hover.press

        it('defines background-color', () => {
          const [css] = toCSSObjects([internal])

          expect(css).toEqual({
            'background-color': 'var(--charcoal-background1)',

            '&:hover': {
              [notDisabledSelector]: {
                'background-color': 'var(--charcoal-background1-hover)',
              },
            },

            '&:active': {
              [notDisabledSelector]: {
                'background-color': 'var(--charcoal-background1-press)',
              },
            },
          })
        })

        it('background-color の transition が有効になる', () => {
          const context = getContext([internal])

          expect(context).toEqual({
            backgroundColorTransition: true,
          })
        })
      })
    })
  })

  describe('o.font', () => {
    it('色名のプロパティで型がつく', () => {
      // ここが型エラーになった場合、o.font の型がゆるくなってる可能性がある
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: { text1: PropertyChain<Internal, 'hover' | 'press'> } = o.font

      expect(o.font).toHaveProperty('text1')
    })

    describe('o.font.[color]', () => {
      const internal = o.font.text1

      it('color を定義する', () => {
        const [css] = toCSSObjects([internal])

        expect(css).toEqual({
          color: 'var(--charcoal-text1)',
        })
      })

      it('context はない', () => {
        const context = getContext([internal])

        expect(context).toEqual({})
      })

      describe('o.font.[color].hover', () => {
        const internal = o.font.text1.hover

        it('color を定義する', () => {
          const [css] = toCSSObjects([internal])

          expect(css).toEqual({
            color: 'var(--charcoal-text1)',

            '&:hover': {
              [notDisabledSelector]: {
                color: 'var(--charcoal-text1-hover)',
              },
            },
          })
        })

        it('color の transition が有効になる', () => {
          const context = getContext([internal])

          expect(context).toEqual({
            colorTransition: true,
          })
        })
      })

      describe('o.font.[color].hover.press', () => {
        const internal = o.font.text1.hover.press

        it('defines color', () => {
          const [css] = toCSSObjects([internal])

          expect(css).toEqual({
            color: 'var(--charcoal-text1)',

            '&:hover': {
              [notDisabledSelector]: {
                color: 'var(--charcoal-text1-hover)',
              },
            },

            '&:active': {
              [notDisabledSelector]: {
                color: 'var(--charcoal-text1-press)',
              },
            },
          })
        })

        it('color の transition が有効になる', () => {
          const context = getContext([internal])

          expect(context).toEqual({
            colorTransition: true,
          })
        })
      })
    })
  })
})
