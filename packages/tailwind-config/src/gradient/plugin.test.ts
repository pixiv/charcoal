import { getUtilities } from './plugin'

describe('gradient/plugin/getUtilities', () => {
  const utilities = getUtilities(
    {
      // 実際とは違う適当な色で試す
      surface4Gradient: [
        { color: '#ff0000', ratio: 33 },
        { color: '#0000ff', ratio: 67 },
      ],
    },
    {
      test: {
        type: 'opacity',
        opacity: 0.5,
      },
    },
  )

  it('generates mapping for utility name => linear-gradient', () => {
    expect(utilities).toEqual({
      'surface4-gradient-bottom':
        'linear-gradient(to bottom, #ff0000 33%, #0000ff 67%)',
      'surface4-gradient-bottom-test':
        'linear-gradient(to bottom, rgba(255, 0, 0, 0.5) 33%, rgba(0, 0, 255, 0.5) 67%)',

      'surface4-gradient-left':
        'linear-gradient(to left, #ff0000 33%, #0000ff 67%)',
      'surface4-gradient-left-test':
        'linear-gradient(to left, rgba(255, 0, 0, 0.5) 33%, rgba(0, 0, 255, 0.5) 67%)',

      'surface4-gradient-right':
        'linear-gradient(to right, #ff0000 33%, #0000ff 67%)',
      'surface4-gradient-right-test':
        'linear-gradient(to right, rgba(255, 0, 0, 0.5) 33%, rgba(0, 0, 255, 0.5) 67%)',

      'surface4-gradient-top':
        'linear-gradient(to top, #ff0000 33%, #0000ff 67%)',
      'surface4-gradient-top-test':
        'linear-gradient(to top, rgba(255, 0, 0, 0.5) 33%, rgba(0, 0, 255, 0.5) 67%)',
    })
  })
})
