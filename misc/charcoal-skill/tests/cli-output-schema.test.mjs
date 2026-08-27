import { readdirSync, readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import Ajv2020 from 'ajv/dist/2020.js'
import { describe, expect, test } from 'vitest'
import { run } from '../../../skills/charcoal/scripts/resolve.mjs'
import { isCliOutput } from '../../../skills/charcoal/scripts/lookup/validate.mjs'

const root = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../../..',
)
const fixtureDir = path.join(root, 'misc/charcoal-skill/fixtures/cli-output')
const schema = JSON.parse(
  readFileSync(
    path.join(root, 'skills/charcoal/scripts/cli-output.schema.json'),
    'utf8',
  ),
)
const validate = new Ajv2020({ strict: true }).compile(schema)

function jsonFixtures(directory = '') {
  const directoryPath = path.join(fixtureDir, directory)
  return readdirSync(directoryPath)
    .filter((name) => name.endsWith('.json'))
    .sort()
    .map((name) => [
      directory === '' ? name : path.join(directory, name),
      JSON.parse(readFileSync(path.join(directoryPath, name), 'utf8')),
    ])
}

function parseJsonStdout(args) {
  const result = run(args)
  expect(result).toMatchObject({ exitCode: 0, stderr: '' })
  return JSON.parse(result.stdout)
}

describe('cli-output.schema.json', () => {
  test('keeps Ajv and the bundled validator in parity for every fixture', () => {
    const fixtures = [
      ...jsonFixtures(),
      ...jsonFixtures('valid'),
      ...jsonFixtures('invalid'),
    ]
    expect(fixtures).toHaveLength(11)

    for (const [name, fixture] of fixtures) {
      const ajvAccepted = validate(fixture)
      expect(ajvAccepted, `${name}: ${JSON.stringify(validate.errors)}`).toBe(
        isCliOutput(fixture),
      )
      expect(ajvAccepted, name).toBe(!name.startsWith('invalid/'))
    }
  })

  test('keeps usage errors outside the public JSON stdout contract', () => {
    const [, fixture] = jsonFixtures('errors').find(
      ([name]) => name === path.join('errors', 'usage-error.json'),
    )
    const result = run(fixture.args)
    expect(result).toMatchObject({
      exitCode: fixture.exitCode,
      stdout: fixture.stdout,
    })
    expect(result.stderr.startsWith(fixture.stderrPrefix)).toBe(true)
  })

  test.each([NaN, Infinity, -Infinity])(
    'rejects a non-finite search score (%s) in parity with Ajv',
    (score) => {
      const [, fixture] = jsonFixtures('valid').find(
        ([name]) => name === path.join('valid', 'search-empty-results.json'),
      )
      const output = {
        ...fixture,
        results: [
          {
            score,
            layer: 'semantic',
            figma: 'color/container/primary/default',
            css: '--charcoal-color-container-primary-default',
            tailwind: [],
          },
        ],
      }
      expect(validate(output)).toBe(false)
      expect(isCliOutput(output)).toBe(false)
    },
  )

  test.each([
    ['resolve semantic hit', ['resolve', 'color/container/primary/default']],
    ['resolve primitive hit', ['resolve', '--charcoal-color-light-blue-50']],
    ['resolve miss', ['resolve', '#0096FA']],
    ['search results', ['search', 'プライマリボタンの背景']],
    ['search empty results', ['search', 'unmatched-query']],
    ['family semantic hit', ['family', 'color/container/primary/default']],
    ['family primitive hit', ['family', '--charcoal-color-light-blue-50']],
    ['family miss', ['family', 'not-a-token']],
  ])('validates %s emitted by the CLI', (_, args) => {
    const output = parseJsonStdout(args)
    expect(validate(output), JSON.stringify(validate.errors)).toBe(true)
    expect(isCliOutput(output)).toBe(true)
  })
})
