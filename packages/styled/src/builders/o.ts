import { CharcoalAbstractTheme } from '@charcoal-ui/theme'
import { objectAssign } from '../util'
import border from './border'
import borderRadius from './borderRadius'
import colors from './colors'
import elementEffect from './elementEffect'
import outline from './outline'
import size from './size'
import spacing from './spacing'
import typography from './typography'

/**
 * `theme(o => [...])` の `o` の部分を構築する
 *
 * @param theme テーマオブジェクト
 * @param DO_NOTHING_IT_IS_JUST_CALLED_FOR_TYPE_INFERENCE 型推論のためだけに使う場合にランタイムコストをゼロにするフラグ
 */
export default function createO<T extends CharcoalAbstractTheme>(
  theme: {
    // factoryの第二引数に入れ込むものだけ明示的に型変数を展開しておくことで型の具象化を遅延する
    color: T['color']
    gradientColor: T['gradientColor']
    border: T['border']
    outline: T['outline']
  } & Omit<T, 'color' | 'gradientColor' | 'border' | 'outline'>,
  DO_NOTHING_IT_IS_JUST_CALLED_FOR_TYPE_INFERENCE = false
) {
  if (DO_NOTHING_IT_IS_JUST_CALLED_FOR_TYPE_INFERENCE) {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return {} as never
  }

  return objectAssign(
    colors(theme),
    typography(theme),
    spacing(theme),
    size(theme),
    elementEffect(theme),
    border(theme),
    borderRadius(theme),
    outline(theme)
  )
}
