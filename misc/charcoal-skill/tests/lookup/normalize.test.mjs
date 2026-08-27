import { describe, expect, test } from 'vitest'
import {
  classifyQuery,
  isHexQuery,
  isTokenV1Query,
  stripCollectionAndMode,
} from '../../../../skills/charcoal/scripts/lookup/normalize.mjs'

describe('classifyQuery', () => {
  test.each([
    [
      'color/container/primary/default',
      { kind: 'figma', normalized: 'color/container/primary/default' },
    ],
    [
      'container/primary/default',
      { kind: 'figma', normalized: 'container/primary/default' },
    ],
    [
      'color.container.primary.default',
      { kind: 'figma', normalized: 'color/container/primary/default' },
    ],
    [
      '--charcoal-color-container-primary-default',
      {
        kind: 'css',
        normalized: '--charcoal-color-container-primary-default',
      },
    ],
    [
      'charcoal-color-container-primary-default',
      {
        kind: 'css',
        normalized: '--charcoal-color-container-primary-default',
      },
    ],
    [
      'bg-container-primary',
      { kind: 'tw', normalized: 'bg-container-primary' },
    ],
    ['text-text', { kind: 'tw', normalized: 'text-text' }],
    ['rounded-m', { kind: 'tw', normalized: 'rounded-m' }],
    ['border-width-ch-m', { kind: 'tw', normalized: 'border-width-ch-m' }],
    ['font-ch-bold', { kind: 'tw', normalized: 'font-ch-bold' }],
    [
      'container-primary-default',
      { kind: 'slug', normalized: 'container-primary-default' },
    ],
    [
      'text/secondary/default',
      { kind: 'figma', normalized: 'text/secondary/default' },
    ],
    [
      'text.line-height.heading.s',
      { kind: 'figma', normalized: 'text/line-height/heading/s' },
    ],
  ])('%s', (query, expected) => {
    expect(classifyQuery(query)).toMatchObject({ query, ...expected })
  })

  test('strips Color Space and pixiv mode prefixes', () => {
    expect(classifyQuery('Color Space/color/light/blue/50')).toMatchObject({
      kind: 'figma',
      normalized: 'color/light/blue/50',
    })
    expect(
      classifyQuery('pixiv/light/color/container/primary/default'),
    ).toMatchObject({
      kind: 'figma',
      normalized: 'color/container/primary/default',
    })
  })

  test('rejects hex and rgb without indexing', () => {
    expect(isHexQuery('#0096FA')).toBe(true)
    expect(isHexQuery('rgb(0, 150, 250)')).toBe(true)
    expect(classifyQuery('#0096FA')).toMatchObject({
      kind: 'hex',
      reason: 'hex',
    })
    expect(classifyQuery('rgba(0, 150, 250, 1)')).toMatchObject({
      kind: 'hex',
      reason: 'hex',
    })
  })

  test('rejects Token 1.0 shaped names without a conversion table', () => {
    expect(isTokenV1Query('--charcoal-text2')).toBe(true)
    expect(isTokenV1Query('background1')).toBe(true)
    expect(isTokenV1Query('theme.color.background1')).toBe(true)
    expect(isTokenV1Query('--charcoal-color-text-default')).toBe(false)
    expect(classifyQuery('--charcoal-text2')).toMatchObject({
      kind: 'token_v1',
      reason: 'token_v1',
    })
  })
})

describe('stripCollectionAndMode', () => {
  test('leaves token names that only share a prefix fragment', () => {
    expect(stripCollectionAndMode('color/container/primary/default')).toBe(
      'color/container/primary/default',
    )
  })
})
