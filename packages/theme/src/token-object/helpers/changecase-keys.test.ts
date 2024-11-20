import { camelCaseKeys } from './changecase-keys'

import { createTokenObject } from '..'
import lightToken from '../../json/pixiv-light.json'
import darkToken from '../../json/pixiv-dark.json'
import baseToken from '../../json/base.json'

describe('camelcaseKeys test', () => {
  it('should convert snake_case keys to camelCase', () => {
    const obj = {
      snake_case: 'value',
      nested: {
        another_key: 'another_value',
      },
    }
    const result = camelCaseKeys<typeof obj, '_'>(obj)
    expect(result).toEqual({
      snakeCase: 'value',
      nested: {
        anotherKey: 'another_value',
      },
    })
  })

  it('should convert kebab-case keys to camelCase', () => {
    const obj = {
      'kebab-case': 'value',
      nested: {
        'another-key': 'another_value',
      },
    }
    const result = camelCaseKeys<typeof obj, '-'>(obj)
    expect(result).toEqual({
      kebabCase: 'value',
      nested: {
        anotherKey: 'another_value',
      },
    })
  })
})

describe.each([
  ['light theme', lightToken],
  ['dark theme', darkToken],
] as const)('changeCaseKeys snapshot test: %s', (description, token) => {
  test('camelcaseKeys snapshot test', () => {
    const theme = createTokenObject(token, baseToken)
    const result = camelCaseKeys(theme)

    expect(result).toMatchSnapshot()
  })
})
