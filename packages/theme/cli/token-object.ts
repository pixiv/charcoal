/* eslint-disable no-console */
import { mkdirSync, readFileSync, writeFileSync } from 'fs'
import path from 'path'
import { createCSSTokenObject, createTokenObject } from '../src/token-object'
import type { TokenDictionary } from '../src/token-object/types'
import { parseArgs } from 'node:util'
import { camelCaseKeys } from '../src/token-object'

// コマンドライン引数の解析
const args = parseArgs({
  options: {
    token: { type: 'string' },
    base: { type: 'string' },
    output: { type: 'string' },
    format: { type: 'string', short: 'f' },
  },
})

const tokenFilePath = args.values.token
const baseFilePath = args.values.base
const outputFilePath = args.values.output
const format = args.values.format

if (
  tokenFilePath === undefined ||
  baseFilePath === undefined ||
  outputFilePath === undefined
) {
  console.error('Error: --token, --base, and --output options are required.')
  process.exit(1)
}

// ファイルの読み込み
const tokenJson = JSON.parse(
  readFileSync(path.resolve(tokenFilePath), 'utf8')
) as TokenDictionary
const baseJson = JSON.parse(
  readFileSync(path.resolve(baseFilePath), 'utf8')
) as TokenDictionary

// トークンオブジェクトの生成
let tokenObject = {}
switch (format) {
  case 'camel': {
    tokenObject = camelCaseKeys(createTokenObject(tokenJson, baseJson))
    break
  }
  case 'css': {
    tokenObject = createCSSTokenObject(tokenJson, (x) => `charcoal-${x}`)
    break
  }
  default: {
    tokenObject = createTokenObject(tokenJson, baseJson)
    break
  }
}

mkdirSync(path.dirname(outputFilePath), { recursive: true })
writeFileSync(
  path.resolve(outputFilePath),
  JSON.stringify(tokenObject, null, 2)
)

console.log(`Token object generated and saved to ${outputFilePath}`)
