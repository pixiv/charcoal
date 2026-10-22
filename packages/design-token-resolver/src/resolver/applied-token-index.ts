import cssVariables from '@charcoal-ui/theme/tokens/css-variables.json' with { type: 'json' }
import { createAppliedTokenIndex } from './flatten-css-variables'

export const appliedTokenIndex = createAppliedTokenIndex(cssVariables)
