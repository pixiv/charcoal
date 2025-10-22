import { dur } from '@charcoal-ui/utils'
import { isPresent } from '../util'
import { Internal, createInternal, Context } from '../internals'

// TODO: deprecate
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
