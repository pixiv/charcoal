import styled, { css } from 'styled-components'
import { theme } from '../../../../utils/theme'

export const Preview = () => {
  return (
    <div>
      <Ex>
        <div css={css(theme((o) => o.bg.brand))}>o.padding.left(16).top(8)</div>
      </Ex>
    </div>
  )
}

const Ex = styled.div`
  ${theme((o) => [o.padding.left(16).top(8), o.bg.success])}
`
