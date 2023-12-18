import { config } from '@charcoal-ui/tailwind-config'
import { mapObject } from '@charcoal-ui/utils'

type TailwindPlugin = {
  handler: ({
    addBase,
    addUtilities,
  }: {
    addBase: unknown
    addUtilities: unknown
  }) => void
}
type UtilityClasses = Record<string, Record<string, unknown>>

/**
 * TODO:
 * Seek for some better way to find the plugin we need here
 * from `config.plugins` array
 */
const typographyPlugin: TailwindPlugin = config.plugins
  ? (config.plugins[0] as unknown as TailwindPlugin)
  : { handler: () => void {} }

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

export const utilityClasses = getUtilities(typographyPlugin)

type SizeClassValue = Readonly<{
  'font-size': string
  'line-height': string
}>
export const sizeClasses: Record<string, SizeClassValue> = Object.fromEntries(
  Object.entries(utilityClasses).filter(
    ([className]) => className !== 'preserve-half-leading'
  )
) as Record<string, SizeClassValue>
