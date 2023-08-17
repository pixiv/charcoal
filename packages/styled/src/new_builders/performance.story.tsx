import { light } from '@charcoal-ui/theme'
import { myTheme } from '../storyHelper'
import { createTheme_experimental } from './createTheme2'
import styled, { ThemeProvider } from 'styled-components'
import { createTheme } from '..'

export default {
  title: 'performance',
}

export const Test1_Old = (props: { n: number }) => {
  return (
    <ThemeProvider theme={myTheme}>
      {Array.from({ length: props.n }).map((_, i) => {
        return <DivOld key={i} />
      })}
      <Div2Old />
    </ThemeProvider>
  )
}
export const Test1_New = (props: { n: number }) => {
  return (
    <ThemeProvider theme={myTheme}>
      {Array.from({ length: props.n }).map((_, i) => {
        return <DivNew key={i} />
      })}
      <Div2New />
    </ThemeProvider>
  )
}

const themeNew = createTheme_experimental(light)
const themeOld = createTheme()
const DivNew = styled.div`
  ${themeNew((o) => {
    return [
      o.bg.surface3,
      o.font.text4,
      o.typography(32).monospace,
      o.margin.vertical(24),
      o.padding.left(64).top(64),
    ]
  })}
`
const DivOld = styled.div`
  ${themeOld((o) => {
    return [
      o.bg.surface3,
      o.font.text4,
      o.typography(32).monospace,
      o.margin.vertical(24),
      o.padding.left(64).top(64),
    ]
  })}
`
const Div2New = styled.div`
  ${themeNew((o) => [
    o.bg.surface4.hover.press,
    o.font.text5.hover.press,
    o.typography(20).bold,
    o.margin.top(64).bottom(24),
    o.padding.all(64),
  ])}
`
const Div2Old = styled.div`
  ${themeOld((o) => [
    o.bg.surface4.hover.press,
    o.font.text5.hover.press,
    o.typography(20).bold,
    o.margin.top(64).bottom(24),
    o.padding.all(64),
  ])}
`
