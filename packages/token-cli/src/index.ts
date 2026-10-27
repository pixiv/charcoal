import { ensureFile, readFileSync, writeFile, existsSync } from 'fs-extra'
import path from 'path'
import { parseArgs } from 'node:util'
import { createToken } from './createToken'
import { FigmaResponse, getDesignToken } from './figma'
import { mustBeDefined } from './utils'

/**
 * Figma
 */
const FIGMA_TOKEN = process.env.FIGMA_TOKEN
const FIGMA_FILE_ID = process.env.FIGMA_FILE_ID

const usage = `token-cli <command>

Commands:
  token-cli fetch      Fetch Figma variables
  token-cli transform  Transform tokens from source file

Options:
  --version  Show version number
  --help     Show help`

const commandOptions = {
  help: { type: 'boolean' as const },
  version: { type: 'boolean' as const },
}

const requiredOption = (value: unknown, name: string): string => {
  if (typeof value !== 'string') {
    throw new Error(`Missing required option: --${name}`)
  }

  return value
}

const normalizeCollectionNames = (args: string[]): string[] => {
  const normalized: string[] = []

  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index]

    if (arg !== '--variable-collection-names') {
      normalized.push(arg)
      continue
    }

    while (args[index + 1] !== undefined && !args[index + 1].startsWith('-')) {
      index += 1
      normalized.push(`--variable-collection-names=${args[index]}`)
    }
  }

  return normalized
}

const fetchTokens = async (args: string[]): Promise<void> => {
  const { values } = parseArgs({
    args,
    options: {
      ...commandOptions,
      output: { type: 'string', short: 'o' },
    },
  })

  if (values.help) {
    console.log(usage)
    return
  }

  mustBeDefined(FIGMA_TOKEN, 'FIGMA_TOKEN')
  mustBeDefined(FIGMA_FILE_ID, 'FIGMA_FILE_ID')
  const outputPath = path.join(
    process.cwd(),
    requiredOption(values.output, 'output'),
  )
  const res = await getDesignToken(FIGMA_TOKEN, FIGMA_FILE_ID)

  await ensureFile(outputPath)
  await writeFile(outputPath, JSON.stringify(await res.json()), 'utf8')
}

const transformTokens = async (args: string[]): Promise<void> => {
  const { values } = parseArgs({
    args: normalizeCollectionNames(args),
    options: {
      ...commandOptions,
      'mode-name': { type: 'string' },
      'variable-collection-names': { type: 'string', multiple: true },
      source: { type: 'string' },
      output: { type: 'string', short: 'o' },
    },
  })

  if (values.help) {
    console.log(usage)
    return
  }

  const sourcePath = path.join(
    process.cwd(),
    requiredOption(values.source, 'source'),
  )
  const outputPath = path.join(
    process.cwd(),
    requiredOption(values.output, 'output'),
  )

  if (!existsSync(sourcePath)) {
    throw new Error(`${sourcePath} not exists.`)
  }

  const buffer = readFileSync(sourcePath)
  const raw = JSON.parse(buffer.toString()) as FigmaResponse
  const collectionNames = values['variable-collection-names']
  const tokens = createToken(
    raw,
    Array.isArray(collectionNames) ? collectionNames : [],
    typeof values['mode-name'] === 'string' ? values['mode-name'] : undefined,
  )

  await ensureFile(outputPath)
  await writeFile(outputPath, JSON.stringify(tokens, sortReplacer, 2), 'utf8')
}

const main = async (): Promise<void> => {
  const args = process.argv.slice(2)

  if (args.includes('--version')) {
    const packageJson = JSON.parse(
      readFileSync(path.join(__dirname, '../package.json'), 'utf8'),
    ) as { version: string }
    console.log(packageJson.version)
    return
  }

  if (args.length === 0 || args.includes('--help') || args.includes('-h')) {
    console.log(usage)
    return
  }

  const [command, ...commandArgs] = args

  switch (command) {
    case 'fetch':
      await fetchTokens(commandArgs)
      return
    case 'transform':
      await transformTokens(commandArgs)
      return
    default:
      throw new Error(`Unknown command: ${command}`)
  }
}

void main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error)
  process.exitCode = 1
})

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
