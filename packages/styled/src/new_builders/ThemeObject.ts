import { ColorStyleTheme } from '@charcoal-ui/theme'
import { TypographyChain } from './properties/typography'
import {
  ColorChain,
  HoverPressEffect,
  ColorChainSecondProps,
} from './properties/colors'
import { InternalResult } from './type'
import { SizeChain } from './properties/size'
import { SpacingChain } from './properties/spacing'
import { OutlineChain } from './properties/outline'
import { BorderChain } from './properties/border'

/**
 * ライブラリの外から呼ぶためのオブジェクトの型
 */
export type ThemeObject<T extends ColorStyleTheme> = {
  bg: ColorChain<'', T, HoverPressEffect> & {
    callToAction: (t: 'to right') => ColorChainSecondProps<'', HoverPressEffect>
  }
  font: ColorChain<'', T, HoverPressEffect>
  margin: SpacingChain
  padding: SpacingChain
  disabled: InternalResult
  typography: (n: number) => TypographyChain<''> & InternalResult
  width: SizeChain
  height: SizeChain
  borderRadius: (n: number | 'oval') => InternalResult
  outline: OutlineChain
  border: BorderChain
}
