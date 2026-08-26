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

  test.skip('resolve color/container/primary/default (Phase 2)', () => {
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

  test.skip('resolve --charcoal-color-text-default (Phase 2)', () => {
    const result = parseStdout(
      run(['resolve', '--charcoal-color-text-default']),
    )
    expect(result).toMatchObject({
      ok: true,
      tailwind: { recommended: ['text-text'] },
    })
    expect(result.cssUsage).toContain('color: var(')
  })

  test.skip('resolve bg-container-primary (Phase 2)', () => {
    expect(parseStdout(run(['resolve', 'bg-container-primary']))).toMatchObject(
      {
        ok: true,
        figma: 'color/container/primary/default',
      },
    )
  })

  test.skip('resolve border-width-ch-m (Phase 1+2)', () => {
    expect(parseStdout(run(['resolve', 'border-width-ch-m']))).toMatchObject({
      ok: true,
      css: '--charcoal-border-width-m',
    })
  })

  test.skip('resolve rounded-m (Phase 1+2)', () => {
    expect(parseStdout(run(['resolve', 'rounded-m']))).toMatchObject({
      ok: true,
      css: '--charcoal-radius-m',
    })
  })

  test.skip('resolve --charcoal-color-light-blue-50 (Phase 2)', () => {
    const result = parseStdout(
      run(['resolve', '--charcoal-color-light-blue-50']),
    )
    expect(result).toMatchObject({
      ok: true,
      layer: 'primitive',
    })
    expect(result.notes.join('')).toMatch(/プロダクト UI/)
  })
})
