import React from 'react'
import type { NextPage } from 'next'
import styled from 'styled-components'
import { createTheme, useTheme } from '@charcoal-ui/styled'
const theme = createTheme(styled)

const Home: NextPage = () => {
  const [theme, setTheme, system] = useTheme()

  return (
    <div>
      <Switch>
        <div aria-current={theme === 'light'} onClick={() => setTheme('light')}>
          light
        </div>
        <div aria-current={theme === 'dark'} onClick={() => setTheme('dark')}>
          dark
        </div>
        <div aria-current={system} onClick={() => setTheme(undefined)}>
          system
        </div>
      </Switch>
      <StyledDiv>{'Using theme.color.xxx (may flashing)'}</StyledDiv>
      <StyledWithThemeDiv>{'Using theme(o => ...)'}</StyledWithThemeDiv>
    </div>
  )
}

const Switch = styled.div`
  display: flex;
  gap: 4px;
  ${theme((o) => o.font.text2)}

  > * {
    cursor: pointer;
  }

  > *[aria-current='true'] {
    ${theme((o) => [o.bg.brand, o.font.text5])}
  }
`

const StyledDiv = styled.div`
  color: ${({ theme }) => theme.color.text2};
  background-color: ${({ theme }) => theme.color.background2};
`

const StyledWithThemeDiv = styled.div`
  ${theme((o) => [o.font.text2, o.bg.background2])}
`

export default Home
