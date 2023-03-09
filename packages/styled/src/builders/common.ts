import { dur } from '@charcoal-ui/utils'
import { Internal, internal } from '../internal'
import { isPresent } from '../util'
import { TRANSITION_DURATION } from './transition'

export const commonSpec = (_theme: unknown): Internal => {
  const duration = dur(TRANSITION_DURATION)
  const transition = (property: string[]) => ({
    transition: property.map((v) => `${duration} ${v}`).join(', '),
  })
  return internal(
    ({
      colorTransition = false,
      backgroundColorTransition = false,
      boxShadowTransition = false,
    }) =>
      transition(
        [
          colorTransition ? 'color' : null,
          backgroundColorTransition ? 'background-color' : null,
          boxShadowTransition ? 'box-shadow' : null,
        ].filter(isPresent)
      )
  )
}
