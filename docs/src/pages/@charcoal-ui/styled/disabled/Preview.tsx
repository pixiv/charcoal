import styled, { css } from 'styled-components'
import { theme } from '../../../../utils/theme'

export const Preview = () => {
  return (
    <div>
      <Ex>default</Ex>
      <Ex aria-disabled>aria-disabled</Ex>
    </div>
  )
}

const Ex = styled.div`
  ${theme((o) => [o.disabled, o.bg.background2])}
`
