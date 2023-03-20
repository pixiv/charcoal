import styled from 'styled-components'
import { theme } from '../../../../utils/theme'

export const Preview = () => {
  return (
    <>
      <Ex>o.height.px(104)</Ex>
    </>
  )
}

const Ex = styled.p`
  ${theme((o) => [o.height.px(104), o.bg.brand])}
`

