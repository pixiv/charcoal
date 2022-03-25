import { defineCssVariables } from './plugin'
import { dark, light } from '@charcoal-ui/theme'

describe('colors/plugin/defineCssVariables', () => {
  const DARK = '@media(prefers-color-scheme: dark)'
  const LIGHT = 'html[data-theme="light"]'

  const cssVariables = defineCssVariables({
    [DARK]: dark,
    [LIGHT]: light,
  })

  it('has css variables for dark theme', () => {
    expect(cssVariables).toHaveProperty(DARK)
    expect(cssVariables[DARK]).toHaveProperty(':root')
  })

  it('has css variables for light theme', () => {
    // NOTICE: jest の .toHaveProperty() は次のような記法が許される。
    // `.toHaveProperty('hoge.fuga[0].bar')
    // ので、"[]" を含むセレクタをそのままテストするときには使うことができない…
    // https://jestjs.io/ja/docs/expect#tohavepropertykeypath-value
    expect(cssVariables[LIGHT]).toBeDefined()

    expect(cssVariables[LIGHT]).not.toHaveProperty(':root')
  })
})
