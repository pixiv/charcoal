import { config } from '@charcoal-ui/tailwind-config'
import { EffectType } from '@charcoal-ui/theme'
import { mapObject } from '@charcoal-ui/utils'

export type TailwindPlugin = {
  handler: ({
    addBase,
    addUtilities,
  }: {
    addBase: unknown
    addUtilities: unknown
  }) => void
}

type UtilityClasses = Record<string, Record<string, unknown>>

const getUtilities = (plugin: TailwindPlugin) => {
  let utilities: UtilityClasses = {}

  plugin.handler({
    addBase: () => {
      /**
       * We don't need these base styles as they gonna be
       * applied to the `:root` element by Tailwind automatically
       */
    },
    addUtilities: (args: UtilityClasses) => {
      utilities = { ...utilities, ...args }
    },
  })

  return mapObject(utilities, (key, value) => [
    key.startsWith('.') ? key.slice(1) : key,
    value,
  ])
}

/**
 * TODO:
 * Seek for some better way to find the plugin we need here
 * from `config.plugins` array
 */
const gradientPlugin: TailwindPlugin = config.plugins
  ? (config.plugins[2] as unknown as TailwindPlugin)
  : { handler: () => void {} }

export const utilityClasses = getUtilities(gradientPlugin)

export const directions = ['top', 'bottom', 'right', 'left'] as const
type Direction = (typeof directions)[number]

export const effectTypes: { [type in EffectType]: null } = {
  hover: null,
  press: null,
  disabled: null,
}

export const getUniqueGradientNames = (utilityClasses: string[]): string[] => {
  return Array.from(
    new Set(
      utilityClasses
        .map((className) => {
          /**
           * like `['bg', 'surface5', 'bottom', 'disabled']`
           */
          const classNameParts = className.split('-')

          /**
           * like `bottom`
           */
          const directionInClassName = directions.find((direction) =>
            classNameParts.includes(direction)
          )
          if (!directionInClassName) return null

          /**
           * like `['bg', 'surface5']`
           */
          const classNameWithoutModifiers = classNameParts.slice(
            0,
            classNameParts.indexOf(directionInClassName)
          )

          /**
           * like `bg-surface5`
           */
          return classNameWithoutModifiers.join('-')
        })
        .filter((value): value is string => typeof value === 'string')
    ).values()
  )
}
