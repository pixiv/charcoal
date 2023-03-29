import styled from 'styled-components'
import { theme } from '../../../../utils/theme'

export const Preview = () => {
  return (
    <>
      <Ex>brand</Ex>
      <Ex2>hover or press me</Ex2>
    </>
  )
}
const Ex = styled.p`
  ${theme((o) => [o.bg.brand, o.font.text5, o.width.px(104), o.height.px(104)])}
`

const Ex2 = styled.p`
  ${theme((o) => [
    o.bg.success.hover.press,
    o.font.text5,
    o.width.px(104),
    o.height.px(104),
  ])}
`
