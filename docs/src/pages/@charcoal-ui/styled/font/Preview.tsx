import styled, { css } from 'styled-components'
import { theme } from '../../../../utils/theme'

export const Preview = () => {
  return (
    <div>
      <Ex>text1</Ex>
      <Ex2>hover and press me</Ex2>
    </div>
  )
}

const Ex = styled.p`
  ${theme((o) => [o.font.text1])}
`

const Ex2 = styled.p`
  ${theme((o) => [o.font.text2.hover])}
`
