import { readdirSync, readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import Ajv2020 from 'ajv/dist/2020.js'
import { describe, expect, test } from 'vitest'
import { run } from '../../../skills/charcoal/scripts/resolve.mjs'

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

function parseJsonStdout(args) {
  const result = run(args)
  expect(result).toMatchObject({ exitCode: 0, stderr: '' })
  return JSON.parse(result.stdout)
}

describe('cli-output.schema.json', () => {
  test('validates every positive public-output fixture with Ajv 8.20.0', () => {
    const fixtures = readdirSync(fixtureDir)
      .filter((name) => name.endsWith('.json'))
      .sort()

    expect(fixtures).toHaveLength(7)
    for (const name of fixtures) {
      const fixture = JSON.parse(
        readFileSync(path.join(fixtureDir, name), 'utf8'),
      )
      expect(
        validate(fixture),
        `${name}: ${JSON.stringify(validate.errors)}`,
      ).toBe(true)
    }
  })

  test.each([
    ['resolve semantic hit', ['resolve', 'color/container/primary/default']],
    ['resolve primitive hit', ['resolve', '--charcoal-color-light-blue-50']],
    ['resolve miss', ['resolve', '#0096FA']],
    ['search results', ['search', 'プライマリボタンの背景']],
    ['family semantic hit', ['family', 'color/container/primary/default']],
    ['family primitive hit', ['family', '--charcoal-color-light-blue-50']],
    ['family miss', ['family', 'not-a-token']],
  ])('validates %s emitted by the CLI', (_, args) => {
    expect(
      validate(parseJsonStdout(args)),
      JSON.stringify(validate.errors),
    ).toBe(true)
  })
})
