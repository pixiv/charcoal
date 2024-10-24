import { camelCaseKeys, createTokenObject } from '.'
import lightToken from '../json/pixiv-light.json'
import darkToken from '../json/pixiv-dark.json'
import baseToken from '../json/base.json'

import { bench } from 'vitest'

describe.each([
  ['light theme', lightToken],
  ['dark theme', darkToken],
] as const)('createTokenObject test: %s', (description, token) => {
  bench('benchmarks token object creation for the theme', () => {
    createTokenObject(token, baseToken)
  })

  bench('benchmarks token object creation with camelCase formatting', () => {
    camelCaseKeys(createTokenObject(token, baseToken))
  })
})
