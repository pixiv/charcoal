import styled, { css } from 'styled-components'
import { theme } from '../../../../utils/theme'

export const Preview = () => {
  return (
    <div css={css(theme((o) => o.bg.brand))}>
      <Ex>o.margin.left(16).top(8)</Ex>
    </div>
  )
}

const Ex = styled.div`
  ${theme((o) => [o.margin.left(16).top(8), o.bg.success])}
`
