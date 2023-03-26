import { EffectType } from '@charcoal-ui/theme'
import { config } from '../../'
import { TailwindPlugin, getUtilities } from '../'

export { Gradients } from './Gradients'

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
export type Direction = (typeof directions)[number]

export type { EffectType }
export const effectTypes: { [type in EffectType]: null } = {
  hover: null,
  press: null,
  disabled: null,
}
