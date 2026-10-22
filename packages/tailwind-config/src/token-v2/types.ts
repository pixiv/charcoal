export type TokenV2TailwindThemeKey =
  | 'colors'
  | 'borderColor'
  | 'borderWidth'
  | 'borderRadius'
  | 'fontSize'
  | 'fontWeight'
  | 'spacing'
  | 'gap'
  | 'width'

export type TokenV2TailwindBinding = {
  canonicalPath: string
  themeKey: TokenV2TailwindThemeKey
  modifier: string
  value: string | [string, { lineHeight: string }]
}

export type TokenV2TokenTree = {
  [key: string]: string | TokenV2TokenTree
}

export type TokenV2CssVariables = {
  color: TokenV2TokenTree
  space: TokenV2TokenTree
  'border-width': TokenV2TokenTree
  radius: TokenV2TokenTree
  'paragraph-width': TokenV2TokenTree
  text: {
    'font-size': TokenV2TokenTree
    'line-height': TokenV2TokenTree
    'font-weight': TokenV2TokenTree
  }
}
