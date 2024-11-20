import { camelCaseKeys } from './changecase-keys'

describe('camelcaseKeys test', () => {
  it('should convert snake_case keys to camelCase', () => {
    const obj = {
      snake_case: 'value',
      nested: {
        another_key: 'another_value',
      },
    }
    type Result = ReturnType<typeof camelCaseKeys<typeof obj, '_'>>
    expectTypeOf<Result>().toEqualTypeOf<{
      snakeCase: string
      nested: { anotherKey: string }
    }>()
  })

  it('should convert kebab-case keys to camelCase', () => {
    const obj = {
      'kebab-case': 'value',
      nested: {
        'another-key': 'another_value',
      },
    }
    type Result = ReturnType<typeof camelCaseKeys<typeof obj, '-'>>

    expectTypeOf<Result>().toEqualTypeOf<{
      kebabCase: string
      nested: { anotherKey: string }
    }>()
  })
})
