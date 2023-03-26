import styled from 'styled-components'
import { theme } from '../../../../utils/theme'

export const Preview = () => {
  return (
    <>
      <Ex>o.border.default</Ex>
    </>
  )
}

const Ex = styled.p`
  ${theme((o) => [o.border.default, o.padding.vertical(4).horizontal(8)])}
`
