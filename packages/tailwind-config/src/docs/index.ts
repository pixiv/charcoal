import { mapObject } from '../util'

export type TailwindPlugin = {
  handler: ({
    addBase,
    addUtilities,
  }: {
    addBase: unknown
    addUtilities: unknown
  }) => void
}

export type UtilityClasses = Record<string, Record<string, unknown>>

export const getUtilities = (plugin: TailwindPlugin) => {
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
