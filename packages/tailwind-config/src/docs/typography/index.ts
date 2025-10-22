import { config } from '../../'
import { TailwindPlugin, getUtilities } from '../'

export { Sizes } from './Sizes'
export { HalfLeading } from './HalfLeading'

/**
 * TODO:
 * Seek for some better way to find the plugin we need here
 * from `config.plugins` array
 */
const typographyPlugin: TailwindPlugin = config.plugins
  ? (config.plugins[0] as unknown as TailwindPlugin)
  : { handler: () => void {} }

export const utilityClasses = getUtilities(typographyPlugin)

type SizeClassValue = Readonly<{
  'font-size': string
  'line-height': string
}>
export const sizeClasses: Record<string, SizeClassValue> = Object.fromEntries(
  Object.entries(utilityClasses).filter(
    ([className]) => className !== 'preserve-half-leading',
  ),
) as Record<string, SizeClassValue>
