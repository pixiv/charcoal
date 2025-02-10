/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { config } from '../../'
import type { Config } from 'tailwindcss'

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
export const borderRadius = (config as Config).theme?.borderRadius ?? {}

export { BorderRadius } from './BorderRadius'
