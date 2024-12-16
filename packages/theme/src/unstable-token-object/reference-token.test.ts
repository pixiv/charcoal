import { createReferenceTokenResolver } from './reference-token'

describe('createReferenceTokenResolver', () => {
  const target = {
    colors: {
      primary: { value: '{colors.accent}' },
    },
    fonts: {
      header: { value: '{fonts.main}' },
    },
  }

  const origin = {
    colors: {
      accent: { value: '{colors.secondary}' },
      secondary: { value: '#00ff00' },
    },
    fonts: {
      main: { value: 'Arial' },
      secondaryHeader: { value: '{fonts.main}' },
    },
  }

  const resolver = createReferenceTokenResolver(target, origin)

  it('should return the same value if not a reference token', () => {
    const value = 'no-reference'
    expect(resolver(value)).toBe(value)
  })

  it('should resolve a reference token using the reference', () => {
    const value = '{colors.primary}'
    expect(resolver(value)).toBe('#00ff00')
  })

  it('should resolve a reference token directly from reference', () => {
    const value = '{colors.accent}'
    expect(resolver(value)).toBe('#00ff00')
  })

  it('should resolve a nested reference token in source via reference', () => {
    const value = '{fonts.header}'
    expect(resolver(value)).toBe('Arial')
  })

  it('should resolve a reference directly from reference without template source', () => {
    const value = '{colors.secondary}'
    expect(resolver(value)).toBe('#00ff00')
  })

  it('should resolve a reference in valueReference that points to another valueReference', () => {
    const value = '{fonts.secondaryHeader}'
    expect(resolver(value)).toBe('Arial')
  })

  it('should throw error for unknown tokens', () => {
    const value = '{unknown.category}'
    expect(() => resolver(value)).toThrow()
  })
})
