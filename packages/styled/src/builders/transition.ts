import { dur } from '@charcoal-ui/utils'
import { isPresent } from '../util'
import { Internal, createInternal, Context } from '../internals'

/**
 * @deprecated Hardcoded fallback duration used by `transition()` and `colors.ts` when no
 * per-property duration is available from the theme. `CharcoalAbstractTheme.transition` already
 * models a `duration` per key, so once callers pass a theme-driven duration through instead of
 * relying on this constant, it can be removed.
 */
export const TRANSITION_DURATION = 0.2

/**
 * context の状態を元に transition を追加する。必ず一番最後に呼ぶ
 */
export default function transition(_theme: unknown): Internal {
  const duration = dur(TRANSITION_DURATION)
  const transition = (property: string[]) => ({
    transition: property.map((v) => `${duration} ${v}`).join(', '),
  })

  function toCSS({
    colorTransition = false,
    backgroundColorTransition = false,
    boxShadowTransition = false,
  }: Context) {
    return transition(
      [
        colorTransition ? 'color' : null,
        backgroundColorTransition ? 'background-color' : null,
        boxShadowTransition ? 'box-shadow' : null,
      ].filter(isPresent),
    )
  }

  return createInternal({ toCSS })
}
