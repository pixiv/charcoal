import { _resolveTokenV2ClassNames } from '@charcoal-ui/tailwind-config/token-v2'

const result = _resolveTokenV2ClassNames({
  canonicalPath: 'color/container/primary/default',
  property: 'background-color',
})

if (result.status === 'resolved') {
  const [candidate] = result.candidates
  const className: string | undefined = candidate?.className
  void className
}
