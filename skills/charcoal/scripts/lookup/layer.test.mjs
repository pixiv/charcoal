import { describe, expect, test } from 'vitest'
import { detectLayer, getCategory, getGroup } from './layer.mjs'

describe('detectLayer', () => {
  test.each([
    ['color/container/primary/default', 'semantic'],
    ['color.text.default', 'semantic'],
    ['color/icon/default', 'semantic'],
    ['color/border/default', 'semantic'],
    ['color/background/default', 'semantic'],
    ['space/layout/40', 'semantic'],
    ['radius/m', 'semantic'],
    ['border-width/m', 'semantic'],
    ['text/font-size/body', 'semantic'],
    ['text/font-weight/bold', 'semantic'],
    ['color/light/blue/50', 'primitive'],
    ['color/Light/Emerald/50', 'primitive'],
    ['color/dark/blue/40', 'primitive'],
    ['--charcoal-color-light-blue-50', 'unknown'],
  ])('%s → %s', (tokenPath, layer) => {
    expect(detectLayer(tokenPath)).toBe(layer)
  })
})

describe('getGroup / getCategory', () => {
  test('reads color group from the second segment', () => {
    expect(getCategory('color/container/primary/default')).toBe('color')
    expect(getGroup('color/container/primary/default')).toBe('container')
  })

  test('uses the first segment for non-color tokens', () => {
    expect(getCategory('radius/m')).toBe('radius')
    expect(getGroup('radius/m')).toBe('radius')
  })
})
