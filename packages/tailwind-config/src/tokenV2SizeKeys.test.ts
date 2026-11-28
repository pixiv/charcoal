import { normalizeTokenV2SizeKeys } from './tokenV2SizeKeys'

describe('normalizeTokenV2SizeKeys', () => {
  test('normalizes s, m, and l keys', () => {
    expect(normalizeTokenV2SizeKeys({ s: 'x', m: 'y', l: 'z' })).toEqual({
      sm: 'x',
      md: 'y',
      lg: 'z',
    })
  })

  test('keeps distinguishable size keys as-is', () => {
    expect(normalizeTokenV2SizeKeys({ xs: 'x', xl: 'y', xxl: 'z' })).toEqual({
      xs: 'x',
      xl: 'y',
      xxl: 'z',
    })
  })

  test('normalizes matching hyphen-separated segments', () => {
    expect(
      normalizeTokenV2SizeKeys({
        's-10': 'x',
        'l-compact': 'y',
        'm-cozy': 'z',
      }),
    ).toEqual({
      'sm-10': 'x',
      'lg-compact': 'y',
      'md-cozy': 'z',
    })
  })

  test('normalizes nested object keys recursively', () => {
    expect(
      normalizeTokenV2SizeKeys({
        target: {
          s: 'x',
          m: 'y',
          l: 'z',
        },
      }),
    ).toEqual({
      target: {
        sm: 'x',
        md: 'y',
        lg: 'z',
      },
    })
  })

  test('keeps default keys as-is', () => {
    expect(
      normalizeTokenV2SizeKeys({
        default: 'x',
        DEFAULT: 'y',
      }),
    ).toEqual({
      default: 'x',
      DEFAULT: 'y',
    })
  })

  test('keeps CSS variable string values as-is', () => {
    expect(
      normalizeTokenV2SizeKeys({
        s: 'var(--charcoal-space-target-s)',
      }),
    ).toEqual({
      sm: 'var(--charcoal-space-target-s)',
    })
  })

  test('throws when normalized keys collide', () => {
    expect(() => normalizeTokenV2SizeKeys({ s: 'x', sm: 'y' })).toThrow(
      'Token V2 size key normalization collision',
    )
  })
})
