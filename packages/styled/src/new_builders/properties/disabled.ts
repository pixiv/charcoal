import { InternalResult } from '../type'
import { css } from 'styled-components'

const disabledCss = css`
  :disabled {
    opacity: 0.32;
  }
`

export const disabledChain = {
  getResult: () => {
    return [disabledCss]
  },
} as unknown as InternalResult
