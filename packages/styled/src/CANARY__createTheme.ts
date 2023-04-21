import { CharcoalAbstractTheme } from '@charcoal-ui/theme'
import { CSSObject } from 'styled-components'
import createO from './builders/o'
import transition from './builders/transition'
import { Internal, toCSSObjects } from './internals'
import { ThemeMap } from './TokenInjector'
import { ArrayOrSingle, isPresent, wrapArray } from './util'

type Blank = null | undefined | false

const nonBlank = <T>(value: T): value is T extends Blank ? never : T =>
  isPresent(value) && (value as unknown) !== false

export function CANARY__createTheme<T extends CharcoalAbstractTheme>(
  themeMap: ThemeMap<T>
) {
  type Builder = ReturnType<typeof createO<T>>
  type SpecFunction = (o: Builder) => ArrayOrSingle<Internal | Blank>

  const defaultTheme = themeMap[':root']
  if (!isPresent(defaultTheme)) {
    throw new Error(':root does not exist')
  }

  const commonResult = [transition(defaultTheme)]
  const o = createO<T>(defaultTheme)

  const theme = (specFn: SpecFunction): ArrayOrSingle<CSSObject> => {
    const internals = [
      // ユーザーが定義したルール
      ...wrapArray(specFn(o)),

      // 必ず挿入される共通のルール
      ...commonResult,
    ].filter(nonBlank)

    const css = toCSSObjects(internals)

    return css
  }

  return theme
}
