import { config } from '../../'
import type { Config } from 'tailwindcss'

export const borderRadius = (config as Config).theme?.borderRadius ?? {}

export { BorderRadius } from './BorderRadius'
