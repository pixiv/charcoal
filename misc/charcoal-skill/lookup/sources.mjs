/**
 * generate.ts が読む正本。lookup は変換ロジックをコピーせず data/index.json だけを読む。
 *
 * Agent 入口: skills/charcoal/scripts/resolve.mjs
 * 生成物: skills/charcoal/data/index.json（手書きしない）
 */
export const sources = {
  mappingApi: 'packages/tailwind-config/src/tokenV2Mappings.ts',
  mappingFunction: 'getTokenV2TailwindClassMappings',
  themeEntries: 'packages/tailwind-config/src/tokenV2Theme.ts',
  themeEntriesFunction: 'buildTokenV2ThemeEntries',
  cssTokenObject: 'packages/theme/src/token-object/index.ts',
  cssTokenObjectFunction: 'createCSSTokenObject',
  semanticThemeJson: 'packages/theme/src/json/pixiv-light.json',
  semanticDarkThemeJson: 'packages/theme/src/json/pixiv-dark.json',
  primitiveThemeJson: 'packages/theme/src/json/base.json',
  indexOutput: 'skills/charcoal/data/index.json',
  agentEntry: 'skills/charcoal/scripts/resolve.mjs',
}

/**
 * semantic: mapping API の行。primitive は mapping に足さない。
 * primitive と TW 未収録の CSS 変数は theme JSON から generate が載せる。
 * alias 逆引きは pixiv-light.json と pixiv-dark.json の `{color.light/...}` /
 * `{color.dark/...}` 参照を統合する。
 */
export const indexLayers = {
  semanticFrom: 'mappingApi',
  primitiveFrom: 'primitiveThemeJson',
  aliasReverseFrom: ['semanticThemeJson', 'semanticDarkThemeJson'],
}
