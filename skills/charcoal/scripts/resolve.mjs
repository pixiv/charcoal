#!/usr/bin/env node
import { realpathSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { classifyQuery } from './lookup/normalize.mjs'
import { familyQuery, lookupQuery } from './lookup/query.mjs'
import { searchQuery } from './lookup/search.mjs'
import { assertResolveResult } from './lookup/validate.mjs'

export const help = `Usage:
  node scripts/resolve.mjs resolve <query>
  node scripts/resolve.mjs search <intent>
  node scripts/resolve.mjs family <token>

Options:
  --pretty    Pretty-print JSON
  --help      Show this help

Exit codes:
  0  JSON result on stdout ({ ok: true } or { ok: false, reason })
  1  Usage error on stderr

Do not guess token names. Pass a Figma variable, CSS variable, or Tailwind class.`

const COMMANDS = new Set(['resolve', 'search', 'family'])

const HEX_MESSAGE = 'hex はテーマで変わる。Figma の変数名を resolve に渡せ。'
const TOKEN_V1_MESSAGE =
  'Token 1.0 名は使わない。Token 2.0 の変数名を search または resolve し直せ。'

/**
 * @typedef {{ exitCode: number, stdout: string, stderr: string }} CliResult
 */

/**
 * @param {unknown} value
 * @param {boolean} pretty
 */
function stringify(value, pretty) {
  return `${JSON.stringify(value, null, pretty ? 2 : undefined)}\n`
}

/**
 * @param {string} query
 */
export function resolveQuery(query) {
  const classified = classifyQuery(query)

  if (classified.kind === 'hex') {
    return {
      query,
      ok: false,
      reason: 'hex',
      message: HEX_MESSAGE,
      candidates: [],
    }
  }

  if (classified.kind === 'token_v1') {
    return {
      query,
      ok: false,
      reason: 'token_v1',
      message: TOKEN_V1_MESSAGE,
      candidates: [],
    }
  }

  return lookupQuery(query)
}

/**
 * @param {string[]} args
 * @returns {CliResult}
 */
export function run(args) {
  const pretty = args.includes('--pretty')
  const argv = args.filter((arg) => arg !== '--pretty')

  if (argv.includes('--help') || argv.includes('-h')) {
    return { exitCode: 0, stdout: `${help}\n`, stderr: '' }
  }

  const [command, ...rest] = argv
  if (command === undefined) {
    return {
      exitCode: 1,
      stdout: '',
      stderr: `Missing command.\n${help}\n`,
    }
  }

  if (!COMMANDS.has(command)) {
    return {
      exitCode: 1,
      stdout: '',
      stderr: `Unknown command: ${command}\n${help}\n`,
    }
  }

  const query = rest.join(' ').trim()
  if (query === '') {
    return {
      exitCode: 1,
      stdout: '',
      stderr: `Missing query for ${command}.\n${help}\n`,
    }
  }

  const result =
    command === 'search'
      ? searchQuery(query)
      : command === 'family'
        ? familyQuery(query)
        : resolveQuery(query)
  if (command === 'resolve') {
    assertResolveResult(result)
  }
  return { exitCode: 0, stdout: stringify(result, pretty), stderr: '' }
}

const isMain =
  process.argv[1] !== undefined &&
  realpathSync(fileURLToPath(import.meta.url)) === realpathSync(process.argv[1])

if (isMain) {
  const result = run(process.argv.slice(2))
  if (result.stdout !== '') {
    process.stdout.write(result.stdout)
  }
  if (result.stderr !== '') {
    process.stderr.write(result.stderr)
  }
  process.exitCode = result.exitCode
}
