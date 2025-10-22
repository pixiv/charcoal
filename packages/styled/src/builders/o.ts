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
 */
export default function createO<T extends CharcoalAbstractTheme>(
  theme: {
    // factoryの第二引数に入れ込むものだけ明示的に型変数を展開しておくことで型の具象化を遅延する
    color: T['color']
    gradientColor: T['gradientColor']
    border: T['border']
    outline: T['outline']
  } & Omit<T, 'color' | 'gradientColor' | 'border' | 'outline'>,
) {
  return objectAssign(
    colors(theme),
    typography(theme),
    spacing(theme),
    size(theme),
    elementEffect(theme),
    border(theme),
    borderRadius(theme),
    outline(theme),
  )
}
