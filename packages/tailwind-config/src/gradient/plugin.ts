import plugin from 'tailwindcss/plugin'
import { camelToKebab } from '../util'
import { GradientMaterial } from '@charcoal-ui/foundation'
import { ThemeColorGradient } from '@charcoal-ui/theme'
import {
  applyEffectToGradient,
  flatMapObject,
  gradient,
  GradientDirection,
  mapKeys,
  mapObject,
} from '@charcoal-ui/utils'
import { Values } from '../types'
import { MergedEffect } from '../foundation'

const VAR_PREFIX = '--tailwind-gradient-'

export default function cssVariableColorPlugin(
  gradients: ThemeColorGradient,
  effects: MergedEffect,
  selectorOrMediaQuery: string
) {
  const utilities = getUtilities(gradients, effects)

  const classRules = mapObject(utilities, (name) => [
    `.bg-${name}`,
    { backgroundImage: `var(${VAR_PREFIX}${name})` },
  ])

  return plugin(({ addBase, addUtilities }) => {
    const css = mapKeys(utilities, (name) => `${VAR_PREFIX}${name}`)
    if (selectorOrMediaQuery.startsWith('@media')) {
      addBase({
        [selectorOrMediaQuery]: {
          ':root': css,
        },
      })
    } else {
      addBase({
        [selectorOrMediaQuery]: css,
      })
    }

    addUtilities(classRules, {
      // @ts-expect-error FIXME
      variants: ['responsive'],
    })
  })
}

const DIRECTIONS = {
  'to top': 'top',
  'to bottom': 'bottom',
  'to left': 'left',
  'to right': 'right',
} as const

/**
 * こういう感じのやつ。この時点では `--tailwind-gradient-` のような CSS 変数名になってない
 *
 * ```js
 * {
 *   'hoge1': 'linear-gradient(to top, ...)',
 *   ...
 * }
 * ```
 */
type Utilities = Record<string, LinearGradient>

type LinearGradient = `linear-gradient(${string})`

export function getUtilities(
  gradients: Record<string, GradientMaterial>,
  effect: MergedEffect
): Utilities {
  const effects = Object.entries(effect)
  const directions = Object.entries(DIRECTIONS) as [
    GradientDirection,
    Values<typeof DIRECTIONS>
  ][]

  return flatMapObject(gradients, (name, colors) =>
    directions.flatMap(([direction, className]) => {
      const toLinearGradient = (colors: GradientMaterial) => {
        const style = gradient(direction)(colors)

        if (!('backgroundImage' in style)) {
          throw new Error(
            `Could not generate linear-gradient() from ${name} ${direction} ${className}`
          )
        }

        // 本当は backgroundColor も同時に生成されるんだけど、使うにはそれ用の CSS 変数も一緒に作らないといけない
        // とりあえず background-image だけで動くのでこっちだけを利用する
        return style.backgroundImage as LinearGradient
      }

      return [
        // こういう感じのやつ
        // { 'hoge1': 'linear-gradient(to top, ...)' }
        [createUtilityName(name, className), toLinearGradient(colors)],

        // こういう感じのやつ
        // { 'hoge1--hover': 'linear-gradient(to top, ...)' }
        ...effects.map<[string, LinearGradient]>(([effectName, effect]) => [
          createUtilityName(name, className, effectName),
          toLinearGradient(applyEffectToGradient(effect)(colors)),
        ]),
      ]
    })
  )
}

function createUtilityName(
  gradientName: string,
  direction: Values<typeof DIRECTIONS>,
  suffix = ''
) {
  return [camelToKebab(gradientName), direction, suffix]
    .filter(Boolean)
    .join('-')
}
