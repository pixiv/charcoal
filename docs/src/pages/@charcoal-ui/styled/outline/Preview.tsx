import styled from 'styled-components'
import { theme } from '../../../../utils/theme'

export const Preview = () => {
  return (
    <div>
      <Ex>o.border.default</Ex>
      <Ex2>o.border.default</Ex2>
      <Ex3 tabIndex={-1}>focus</Ex3>
    </div>
  )
}

const Ex = styled.p`
  ${theme((o) => [o.outline.default])}
`

const Ex2 = styled.p`
  ${theme((o) => [o.outline.assertive])}
`

const Ex3 = styled.p`
  ${theme((o) => [o.outline.default.focus])}
`
