import { Material, Theme } from '@pixiv-elements/theme'

export type TailwindVersion = 'v1' | 'v2' | 'v3'

export interface ThemeMap {
  ':root': Theme
  [mediaQuery: `@media (${string})`]: Theme
  [selector: string]: Theme
}

export type Values<T extends object> = T[keyof T]

export type Definition = {
  [mediaQuery: `@media${string}`]: { ':root': CSSVariables }
  [selector: string]: CSSVariables
}

export type CSSVariableName = `--tailwind-${string}`

/**
 * こういう感じのやつ
 *
 * ```js
 * {
 *   '--tailwind-color-hoge1': '#ffffff',
 *   '--tailwind-color-hoge1--hover': '#eeeeee',
 *   '--tailwind-color-hoge1--press': '#dddddd',
 *   ...
 * }
 * ```
 */
export type CSSVariables = Record<CSSVariableName, Material>
