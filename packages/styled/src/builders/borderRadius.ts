import { CharcoalAbstractTheme } from '@charcoal-ui/theme'
import { px } from '@charcoal-ui/utils'
import { Internal, internal } from './internal'

export const createBorderRadiusCss =
  <T extends CharcoalAbstractTheme>(theme: T) =>
  (size: keyof T['borderRadius']): Internal =>
    internal(() => ({
      borderRadius: px(theme.borderRadius[size]),
    }))
