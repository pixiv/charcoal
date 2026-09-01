import { readFile } from 'node:fs/promises'
import { parseArgs } from 'node:util'
import { normalizeQueryName } from './resolver/normalize-query'
import { resolveBatchQueries, resolveSingleQuery } from './resolver/resolve'
import type { TokenQuery, TokenResolutionResult } from './resolver/types'

export class CliInputError extends Error {}

export type CliIo = Readonly<{
  readStdin(): Promise<string>
  writeStdout(value: string): void
  writeStderr(value: string): void
}>

function asPlainObject(value: unknown): Record<string, unknown> | undefined {
  return value !== null && typeof value === 'object' && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : undefined
}

function validateQuery(value: unknown): TokenQuery {
  const query = asPlainObject(value)
  if (query === undefined || typeof query.name !== 'string') {
    throw new CliInputError('Each query must be an object with a string name.')
  }
  if (
    (query.collection !== undefined && typeof query.collection !== 'string') ||
    (query.property !== undefined && typeof query.property !== 'string')
  ) {
    throw new CliInputError('Query collection and property must be strings.')
  }
  if (
    Object.keys(query).some(
      (key) => key !== 'name' && key !== 'collection' && key !== 'property',
    )
  ) {
    throw new CliInputError('Each query contains an unsupported field.')
  }

  try {
    normalizeQueryName(query.name)
  } catch (error) {
    throw new CliInputError(
      error instanceof Error ? error.message : 'Invalid token name.',
    )
  }

  return {
    name: query.name,
    ...(query.collection === undefined ? {} : { collection: query.collection }),
    ...(query.property === undefined ? {} : { property: query.property }),
  }
}

export function parseBatchInput(input: string): readonly TokenQuery[] {
  let value: unknown
  try {
    value = JSON.parse(input)
  } catch {
    throw new CliInputError('Batch input must be valid JSON.')
  }

  const batch = asPlainObject(value)
  if (
    batch === undefined ||
    !Array.isArray(batch.queries) ||
    Object.keys(batch).some((key) => key !== 'queries')
  ) {
    throw new CliInputError(
      'Batch input must be an object with a queries array.',
    )
  }

  return batch.queries.map(validateQuery)
}

type ParsedArguments = Readonly<{
  name?: string
  input?: string
  collection?: string
  property?: string
}>

function parseArguments(args: readonly string[]): ParsedArguments {
  try {
    const [command, ...commandArgs] = args
    if (command !== 'resolve') {
      throw new CliInputError('The resolve command is required.')
    }

    const { values, positionals } = parseArgs({
      args: commandArgs,
      options: {
        input: { type: 'string' },
        collection: { type: 'string' },
        property: { type: 'string' },
      },
      allowPositionals: true,
      strict: true,
    })
    if (positionals.length > 1) {
      throw new CliInputError('Only one token name can be provided.')
    }

    const [name] = positionals
    if (values.input !== undefined) {
      if (
        name !== undefined ||
        values.collection !== undefined ||
        values.property !== undefined
      ) {
        throw new CliInputError(
          '--input cannot be combined with name, --collection, or --property.',
        )
      }
      return { input: values.input }
    }
    if (name === undefined) {
      throw new CliInputError('A token name or --input is required.')
    }

    return {
      name,
      ...(values.collection === undefined
        ? {}
        : { collection: values.collection }),
      ...(values.property === undefined ? {} : { property: values.property }),
    }
  } catch (error) {
    if (error instanceof CliInputError) {
      throw error
    }
    throw new CliInputError(
      error instanceof Error ? error.message : 'Invalid arguments.',
    )
  }
}

async function readBatchInput(input: string, io: CliIo): Promise<string> {
  try {
    return input === '-' ? await io.readStdin() : await readFile(input, 'utf8')
  } catch (error) {
    throw new CliInputError(
      error instanceof Error
        ? `Unable to read input: ${error.message}`
        : 'Unable to read input.',
    )
  }
}

export async function runCli(
  args: readonly string[],
  io: CliIo,
  resolve: (query: TokenQuery) => TokenResolutionResult = resolveSingleQuery,
): Promise<number> {
  try {
    const parsed = parseArguments(args)
    const result =
      parsed.input === undefined
        ? resolve(validateQuery(parsed))
        : resolveBatchQueries(
            parseBatchInput(await readBatchInput(parsed.input, io)),
          )
    io.writeStdout(`${JSON.stringify(result)}\n`)
    return 0
  } catch (error) {
    if (error instanceof CliInputError) {
      io.writeStderr(`charcoal-token-resolver: ${error.message}\n`)
      return 2
    }
    io.writeStderr(
      `charcoal-token-resolver: ${error instanceof Error ? error.message : 'Internal error.'}\n`,
    )
    return 1
  }
}
