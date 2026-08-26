import { describe, expect, test } from 'vitest'
import { run, resolveQuery } from './resolve.mjs'
import { assertResolveResult } from './lookup/validate.mjs'

function parseStdout(result) {
  expect(result.stderr).toBe('')
  expect(result.exitCode).toBe(0)
  return JSON.parse(result.stdout)
}

describe('resolve.mjs CLI contract', () => {
  test('usage errors go to stderr and exit 1', () => {
    expect(run([])).toMatchObject({
      exitCode: 1,
      stdout: '',
    })
    expect(run([]).stderr).toContain('Missing command.')
    expect(run(['resolve']).exitCode).toBe(1)
    expect(run(['dump', 'x']).exitCode).toBe(1)
  })

  test('help is not JSON and exits 0', () => {
    const result = run(['--help'])
    expect(result.exitCode).toBe(0)
    expect(result.stdout).toContain(
      'node skills/charcoal/scripts/resolve.mjs resolve <query>',
    )
  })

  test('hex is a structured miss, not a semantic hit', () => {
    const result = parseStdout(run(['resolve', '#0096FA']))
    assertResolveResult(result)
    expect(result).toEqual({
      query: '#0096FA',
      ok: false,
      reason: 'hex',
      message: 'hex はテーマで変わる。Figma の変数名を resolve に渡せ。',
      candidates: [],
    })
  })

  test('Token 1.0 names are refused without a conversion table', () => {
    const result = parseStdout(run(['resolve', '--charcoal-text2']))
    assertResolveResult(result)
    expect(result).toMatchObject({
      ok: false,
      reason: 'token_v1',
      candidates: [],
    })
  })

  test('structured misses still exit 0', () => {
    expect(run(['resolve', '#0096FA']).exitCode).toBe(0)
    expect(run(['resolve', 'no-such-token']).exitCode).toBe(0)
  })

  test('--pretty prints indented JSON', () => {
    expect(run(['resolve', '#0096FA', '--pretty']).stdout).toContain('\n  ')
  })
})

describe('resolve golden examples', () => {
  test('contract samples for miss / primitive / semantic validate', () => {
    assertResolveResult(resolveQuery('#0096FA'))
    assertResolveResult({
      query: '--charcoal-color-light-blue-50',
      ok: true,
      layer: 'primitive',
      css: '--charcoal-color-light-blue-50',
      recommendedSemantic: [],
      notes: [
        'Color Space プリミティブはプロダクト UI に直接使わない。セマンティックトークンを選べ。',
      ],
    })
    assertResolveResult({
      query: 'color/container/primary/default',
      ok: true,
      layer: 'semantic',
      category: 'color',
      group: 'container',
      figma: 'color/container/primary/default',
      css: '--charcoal-color-container-primary-default',
      cssUsage:
        'background-color: var(--charcoal-color-container-primary-default)',
      tailwind: {
        key: 'container-primary',
        recommended: ['bg-container-primary'],
        alsoValid: [],
      },
      related: {
        hover: {
          css: '--charcoal-color-container-primary-hover',
          tailwind: ['bg-container-primary-hover'],
        },
        press: {
          css: '--charcoal-color-container-primary-press',
          tailwind: ['bg-container-primary-press'],
        },
      },
      notes: [],
    })
  })

  test('resolve color/container/primary/default', () => {
    const result = parseStdout(
      run(['resolve', 'color/container/primary/default']),
    )
    expect(result).toMatchObject({
      ok: true,
      layer: 'semantic',
      css: '--charcoal-color-container-primary-default',
      tailwind: { recommended: ['bg-container-primary'] },
    })
    expect(result.related).toMatchObject({
      hover: expect.any(Object),
      press: expect.any(Object),
    })
  })

  test('resolve --charcoal-color-text-default', () => {
    const result = parseStdout(
      run(['resolve', '--charcoal-color-text-default']),
    )
    expect(result).toMatchObject({
      ok: true,
      tailwind: { recommended: ['text-text'] },
    })
    expect(result.cssUsage).toContain('color: var(')
  })

  test('resolve bg-container-primary', () => {
    expect(parseStdout(run(['resolve', 'bg-container-primary']))).toMatchObject(
      {
        ok: true,
        figma: 'color/container/primary/default',
      },
    )
  })

  test('resolve border-width-ch-m', () => {
    expect(parseStdout(run(['resolve', 'border-width-ch-m']))).toMatchObject({
      ok: true,
      css: '--charcoal-border-width-m',
    })
  })

  test('resolve rounded-m', () => {
    expect(parseStdout(run(['resolve', 'rounded-m']))).toMatchObject({
      ok: true,
      css: '--charcoal-radius-m',
    })
  })

  test('resolve --charcoal-color-light-blue-50', () => {
    const result = parseStdout(
      run(['resolve', '--charcoal-color-light-blue-50']),
    )
    expect(result).toMatchObject({
      ok: true,
      layer: 'primitive',
    })
    expect(result.notes.join('')).toMatch(/プロダクト UI/)
  })

  test.each([
    ['text/secondary/default', 'color/text/secondary/default'],
    ['color/text/default', 'color/text/default'],
    ['text.line-height.heading.s', 'text/font-size/heading/s'],
  ])('resolve %s', (query, figma) => {
    expect(parseStdout(run(['resolve', query]))).toMatchObject({
      ok: true,
      figma,
    })
  })
})
