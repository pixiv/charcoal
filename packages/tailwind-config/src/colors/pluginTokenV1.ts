import {
  applyEffect,
  customPropertyToken,
  filterObject,
  flatMapObject,
  mapObject,
} from '@charcoal-ui/utils'
import { ThemeMap } from '../types'
import {
  CharcoalAbstractTheme,
  EffectType,
  Key,
  CharcoalTheme as Theme,
} from '@charcoal-ui/theme'

export function defineCssVariablesV1(themeMap: ThemeMap) {
  // @ts-expect-error FIXME
  return mapObject(themeMap, (key, theme) => {
    if (key.startsWith('@media')) {
      return [
        key,
        {
          ':root': defineColorVariableCSS(theme),
        },
      ]
    } else {
      return [key, defineColorVariableCSS(theme)]
    }
  })
}

export const defineColorVariableCSS = (theme: Theme) => {
  const borders = mapObject(theme.border, (name, { color }) => [
    // REVIEW: もしtheme.colorにたまたまborder-〇〇で始まる色名がいたら被りうる
    withPrefixes('border', name),
    color,
  ])

  const colors = defineThemeVariables({ ...theme.color, ...borders })({ theme })
  return colors
}

/**
 * Check whether a value is non-null and non-undefined
 *
 * @param value nullable
 */
export const isPresent = <T>(value: T): value is NonNullable<T> => value != null

/**
 * 子孫要素で使われるカラーテーマの CSS Variables を上書きする
 *
 * @params colorParams - 上書きしたい色の定義（ `theme.color` の一部だけ書けば良い ）
 * @params effectParams - effect の定義を上書きしたい場合は渡す（必須ではない）
 *
 * @example
 * ```tsx
 * const LocalTheme = styled.div`
 *   ${defineThemeVariables({ text1: '#ff0000' })}
 *   // `text1` is now defined as red
 *   ${theme((o) => [o.font.text1])}
 * `
 * ```
 */
export function defineThemeVariables(
  colorParams: Partial<CharcoalAbstractTheme['color']>,
  effectParams?: Partial<CharcoalAbstractTheme['effect']>
) {
  return function toCssObject(props: {
    theme: Pick<CharcoalAbstractTheme, 'effect'>
  }) {
    const colors = filterObject(colorParams, isPresent)

    // flatMapObject の中で毎回 Object.entries を呼ぶのは無駄なので外で呼ぶ
    const effects = Object.entries({
      ...props.theme.effect,
      ...effectParams,
    })

    return flatMapObject(colors, (colorKey, color) => [
      [customPropertyToken(colorKey), color],

      ...effects.map<[string, string]>(([effectKey, effect]) => [
        customPropertyToken(colorKey, [effectKey]),
        applyEffect(color, [effect]),
      ]),
    ])
  }
}

export function isSupportedEffect(effect: Key): effect is EffectType {
  return ['hover', 'press', 'disabled'].includes(effect as string)
}

export const variable = (value: string) => `var(${value})`

export function withPrefixes(...parts: string[]) {
  return parts.join('-')
}
