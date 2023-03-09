import { CharcoalAbstractTheme as Theme } from '@charcoal-ui/theme'
import { GradientDirection } from '@charcoal-ui/utils'
import { borderDirections, createBorderCss } from './builders/border'
import { createBorderRadiusCss } from './builders/borderRadius'
import { createColorCss } from './builders/color'
import { createElementEffectCss } from './builders/elementEffect'
import { createGradientColorCss } from './builders/gradientColor'
import { createOutlineColorCss, outlineType } from './builders/outline'
import {
  createFixedPxCss,
  createFixedColumnCss,
  createFixedRelativeCss,
  fixedProperties,
} from './builders/size'
import {
  createSpacingCss,
  spacingDirections,
  spacingProperties,
} from './builders/spacing'
import { createTypographyCss } from './builders/typography'
import {
  constFactory,
  factory,
  modifiedArgumentedFactory,
  modifiedFactory,
} from './lib'
import { objectAssign, objectKeys } from './util'

/**
 * `theme(o => [...])` の `o` の部分を構築する
 *
 * @param theme テーマオブジェクト
 * @param isPhantom 型推論のためだけに使う場合にランタイムコストをゼロにするフラグ
 */
export function builder<T extends Theme>(
  theme: {
    // factoryの第二引数に入れ込むものだけ明示的に型変数を展開しておくことで型の具象化を遅延する
    color: T['color']
    gradientColor: T['gradientColor']
    border: T['border']
    outline: T['outline']
  } & Omit<T, 'color' | 'gradientColor' | 'border' | 'outline'>,
  isPhantom = false
) {
  if (isPhantom) {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return {} as never
  }
  const colors = objectKeys(theme.color)
  const effects = objectKeys(theme.effect)

  // 色
  const gradientColors = objectKeys(theme.gradientColor)
  const colorCss = createColorCss(theme)
  const gradientColorCss = createGradientColorCss(theme)
  const colorObject = constFactory(
    {},
    {
      bg: objectAssign(
        factory({}, colors, (color) =>
          modifiedFactory(effects, (modifiers) =>
            colorCss('bg', color, modifiers)
          )
        ),
        factory(
          {},
          gradientColors,
          (color) => (direction: GradientDirection) =>
            modifiedFactory(effects, (modifiers) =>
              gradientColorCss(color, modifiers, direction)
            )
        )
      ),
      font: factory({}, colors, (color) =>
        modifiedFactory(effects, (modifiers) =>
          colorCss('font', color, modifiers)
        )
      ),
    }
  )

  // タイポグラフィ
  const typographyModifiers = [
    // TODO
    'monospace',
    'bold',
    'preserveHalfLeading',
  ] as const
  const typographyCss = createTypographyCss(theme)
  const typographyObject = factory(
    {},
    ['typography'] as const,
    (_) => (size: keyof T['typography']['size']) =>
      modifiedFactory(typographyModifiers, (modifiers) =>
        typographyCss(size, {
          preserveHalfLeading: modifiers.includes('preserveHalfLeading'),
          monospace: modifiers.includes('monospace'),
          bold: modifiers.includes('bold'),
        })
      )
  )

  // スペーシング
  const spacingCss = createSpacingCss(theme)
  const spacingObject = factory({}, spacingProperties, (spacingProperty) =>
    modifiedArgumentedFactory(
      spacingDirections,
      (modifiers) => spacingCss(spacingProperty, modifiers),
      {} as keyof T['spacing'] | 'auto' // 推論のためのメタタイプ
    )
  )

  // 大きさ
  const fixedPxCss = createFixedPxCss(theme)
  const fixedColumnCss = createFixedColumnCss(theme)
  const fixedRelativeCss = createFixedRelativeCss(theme)
  const fixedObject = factory({}, fixedProperties, (property) =>
    constFactory(
      {},
      {
        px: (size: keyof T['spacing'] | 'auto') => fixedPxCss(property, size),
        column: (span: number) => fixedColumnCss(property, span),
        auto: fixedRelativeCss(property, 'auto'),
        full: fixedRelativeCss(property, '100%'),
      }
    )
  )

  // 要素へのエフェクト (etc: 透過)
  const elementEffectCss = createElementEffectCss(theme)
  const elementEffectObject = modifiedFactory(
    objectKeys(theme.elementEffect),
    (modifiers) => elementEffectCss(modifiers)
  )

  // ボーダー
  const borderCss = createBorderCss(theme)
  const borderObject = constFactory(
    {},
    {
      border: factory({}, objectKeys(theme.border), (variant) =>
        modifiedFactory(borderDirections, (modifiers) =>
          borderCss(variant, modifiers)
        )
      ),
    }
  )

  // 角丸
  const borderRadiusCss = createBorderRadiusCss(theme)
  const borderRadiusObject = constFactory(
    {},
    {
      borderRadius: (radius: keyof T['borderRadius']) =>
        borderRadiusCss(radius),
    }
  )

  // アウトライン
  const outlineCss = createOutlineColorCss(theme)
  const outlineObject = constFactory(
    {},
    {
      outline: factory({}, objectKeys(theme.outline), (variant) =>
        modifiedFactory(outlineType, (modifiers) =>
          outlineCss(variant, modifiers)
        )
      ),
    }
  )

  return objectAssign(
    colorObject,
    typographyObject,
    spacingObject,
    fixedObject,
    elementEffectObject,
    borderObject,
    borderRadiusObject,
    outlineObject
  )
}
