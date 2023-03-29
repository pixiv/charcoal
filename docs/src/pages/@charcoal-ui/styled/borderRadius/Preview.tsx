import styled from 'styled-components'
import { theme } from '../../../../utils/theme'

export const Preview = () => {
  return (
    <>
      <Ex>o.borderRadius</Ex>
      <Ex2>o.borderRadius</Ex2>
    </>
  )
}

const Ex = styled.p`
  ${theme((o) => [
    o.borderRadius(4),
    o.bg.brand,
    o.padding.vertical(4).horizontal(8),
  ])}
`

const Ex2 = styled.p`
  ${theme((o) => [
    o.borderRadius('oval'),
    o.bg.brand,
    o.padding.vertical(4).horizontal(8),
  ])}
`
