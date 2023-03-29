import styled from 'styled-components'
import { theme } from '../../../../utils/theme'

export const Preview = () => {
  return (
    <>
      <Ex>o.width.px(168)</Ex>
      <Ex2>o.width.column(4)</Ex2>
    </>
  )
}

const Ex = styled.p`
  ${theme((o) => [o.width.px(168), o.bg.brand])}
`
const Ex2 = styled.p`
  ${theme((o) => [o.width.column(4), o.bg.brand])}
`
