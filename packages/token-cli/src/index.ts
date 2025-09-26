import { ensureFile, readFileSync, writeFile, existsSync } from 'fs-extra'
import path from 'path'
import yargs from 'yargs'
import { createToken } from './createToken'
import { FigmaResponse, getDesignToken } from './figma'
import { mustBeDefined } from './utils'

/**
 * Figma
 */
const FIGMA_TOKEN = process.env.FIGMA_TOKEN
const FIGMA_FILE_ID = process.env.FIGMA_FILE_ID

void yargs
  .scriptName('token-cli')
  .command(
    'fetch',
    'Fetch Figma variables',
    {
      output: {
        type: 'string',
        demandOption: true,
        alias: 'o',
      },
    },
    async (args) => {
      mustBeDefined(FIGMA_TOKEN, 'FIGMA_TOKEN')
      mustBeDefined(FIGMA_FILE_ID, 'FIGMA_FILE_ID')

      const res = await getDesignToken(FIGMA_TOKEN, FIGMA_FILE_ID)

      await ensureFile(path.join(__dirname, '..', args.output))
      await writeFile(
        path.join(__dirname, '..', args.output),
        JSON.stringify(res.data),
        'utf8'
      )
    }
  )
  .command(
    'transform',
    'Transform tokens from source file',
    {
      'mode-name': {
        type: 'string',
        default: undefined,
      },
      'variable-collection-names': {
        type: 'array',
        default: [] as string[],
      },
      source: {
        type: 'string',
        demandOption: true,
      },
      output: {
        type: 'string',
        demandOption: true,
        alias: 'o',
      },
    },
    async (args) => {
      if (!existsSync(path.join(__dirname, '..', args.source))) {
        throw new Error(
          `${path.join(__dirname, '..', args.source)} not exists.`
        )
      }

      const buffer = readFileSync(path.join(__dirname, '..', args.source))
      const raw = JSON.parse(buffer.toString()) as FigmaResponse

      const tokens = createToken(
        raw,
        args['variable-collection-names'],
        args['mode-name']
      )

      await ensureFile(path.join(__dirname, '..', args.output))
      await writeFile(
        path.join(__dirname, '..', args.output),
        JSON.stringify(tokens, sortReplacer, 2),
        'utf8'
      )
    }
  )
  .demandCommand()
  .strict()
  .help()
  .parse()

// The MIT License (MIT)
// Copyright (c) 2023-present Fabio Spampinato
// https://github.com/fabiospampinato/json-sorted-stringify/blob/b4b87427d471ec4e5972489638dbba100d47ef18/src/index.ts
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const sortReplacer = (_: string, value: any): any => {
  if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
    const keys = Object.keys(value).sort()
    const clone: Record<string, unknown> = {}

    for (let i = 0, l = keys.length; i < l; i++) {
      const key = keys[i]

      clone[key] = value[key]
    }

    return clone
  }

  return value
}
