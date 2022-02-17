import React from 'react'
import styled from 'styled-components'
import IconBase from './Base'

const size = 16

export default function InfoIcon() {
  const path = (
    <>
      <path
        d="M8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183
           0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16Z"
      />
      <Path
        d="M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629
           4.68629 2 8 2C11.3137 2 14 4.68629 14 8ZM8 6.25C8.69036 6.25 9.25 5.69036
           9.25 5C9.25 4.30964 8.69036 3.75 8 3.75C7.30964 3.75 6.75 4.30964 6.75
           5C6.75 5.69036 7.30964 6.25 8 6.25ZM7 7.75V11.25C7 11.8023 7.44772 12.25
           8 12.25C8.55228 12.25 9 11.8023 9 11.25V7.75C9 7.19772 8.55228 6.75 8
           6.75C7.44772 6.75 7 7.19772 7 7.75Z"
      />
    </>
  )
  return <IconBase viewBoxSize={size} size={size} currentColor path={path} />
}

const Path = styled.path`
  fill: ${({ theme }) => theme.color.surface1};
  fill-rule: evenodd;
`
