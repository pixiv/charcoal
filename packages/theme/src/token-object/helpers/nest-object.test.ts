import { nestObject } from './nest-object'

describe('nestObject test', () => {
  it('should create a nested object from a single key path', () => {
    const path: ['a'] = ['a']
    const value = 'value'
    const result = nestObject(path, value)
    expect(result).toEqual({ a: value })
  })

  it('should create a nested object from a multi-level key path', () => {
    const path: ['a', 'b', 'c'] = ['a', 'b', 'c']
    const value = 'value'
    const result = nestObject(path, value)
    expect(result).toEqual({ a: { b: { c: value } } })
  })

  it('should handle nested paths correctly', () => {
    const path: ['theme', 'color', 'background', 'default'] = [
      'theme',
      'color',
      'background',
      'default',
    ]
    const value = '#ffffff'
    const result = nestObject(path, value)
    expect(result).toEqual({
      theme: { color: { background: { default: value } } },
    })
  })

  it('should throw an error if an empty path is provided', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expect(() => nestObject([], 'value')).toThrowError(
      'Path must be a non-empty array'
    )
  })
})
