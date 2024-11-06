/* eslint-disable no-console */
import { readFileSync, mkdirSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { createCSSTokenObject, createTokenObject } from '../src/token-object'
import type { TokenDictionary } from '../src/token-object/types'
import { camelCaseKeys } from '../src/token-object'

type ValueStyle = 'cssVariable'
type KeyStyle = 'camelCase'

type Config = {
  tokenFile: string
  baseFile: string
  outputFile: string
  keyStyle?: KeyStyle
  valueStyle?: ValueStyle
}

const configurations: Config[] = [
  {
    tokenFile: './src/json/pixiv-light.json',
    baseFile: './src/json/base.json',
    outputFile: './dist/tokens/pixiv-light.json',
    keyStyle: undefined,
    valueStyle: undefined,
  },
  {
    tokenFile: './src/json/pixiv-dark.json',
    baseFile: './src/json/base.json',
    outputFile: './dist/tokens/pixiv-dark.json',
    keyStyle: undefined,
    valueStyle: undefined,
  },

  {
    tokenFile: './src/json/pixiv-light.json',
    baseFile: './src/json/base.json',
    outputFile: './dist/tokens/camel/pixiv-light.json',
    keyStyle: 'camelCase',
    valueStyle: undefined,
  },
  {
    tokenFile: './src/json/pixiv-dark.json',
    baseFile: './src/json/base.json',
    outputFile: './dist/tokens/camel/pixiv-dark.json',
    keyStyle: 'camelCase',
    valueStyle: undefined,
  },

  {
    tokenFile: './src/json/pixiv-light.json',
    baseFile: './src/json/base.json',
    outputFile: './dist/tokens/css-variables.json',
    keyStyle: undefined,
    valueStyle: 'cssVariable',
  },

  {
    tokenFile: './src/json/pixiv-light.json',
    baseFile: './src/json/base.json',
    outputFile: './dist/tokens/camel/css-variables.json',
    keyStyle: 'camelCase',
    valueStyle: 'cssVariable',
  },
]

for (const {
  tokenFile,
  baseFile,
  outputFile,
  keyStyle,
  valueStyle,
} of configurations) {
  const baseJson = JSON.parse(
    readFileSync(path.resolve(baseFile), 'utf8')
  ) as TokenDictionary

  const createToken = <T extends TokenDictionary>(
    value: T
  ): Record<string, unknown> => {
    switch (valueStyle) {
      case 'cssVariable': {
        return createCSSTokenObject(value, (x) => `charcoal-${x}`)
      }
      default: {
        return createTokenObject(value, baseJson)
      }
    }
  }
  const transformKey = <T extends Record<string, unknown>>(
    value: T
  ): Record<string, unknown> => {
    switch (keyStyle) {
      case 'camelCase': {
        return camelCaseKeys(value)
      }
      default: {
        return value
      }
    }
  }

  const tokenJson = JSON.parse(
    readFileSync(path.resolve(tokenFile), 'utf8')
  ) as TokenDictionary
  const tokenObject = transformKey(createToken(tokenJson))

  mkdirSync(path.dirname(outputFile), { recursive: true })
  writeFileSync(path.resolve(outputFile), JSON.stringify(tokenObject, null, 2))

  console.log(
    `Generated ${outputFile} with keyStyle ${keyStyle} and valueStyle ${valueStyle}.`
  )
}
