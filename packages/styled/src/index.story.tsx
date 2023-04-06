import React from 'react'
import styled, { CSSProp, DefaultTheme, ThemeProvider } from 'styled-components'
import { createTheme, ThemeProp, defineThemeVariables } from '.'
import { disabledSelector } from '@charcoal-ui/utils'
import { MyTheme, myTheme } from './storyHelper'

export default {
  title: 'styled',
}

declare module 'react' {
  interface Attributes {
    css?: CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>
  }
}

declare module 'styled-components' {
  export interface DefaultTheme extends MyTheme {}
}

const theme = createTheme<DefaultTheme>()

export const Example = () => (
  <ThemeProvider theme={myTheme}>
    <Container>
      <Normal>Sample</Normal>
      <LeftTopPadding>Left Top Padding</LeftTopPadding>
      <NestedWrap>
        <Nested>Nested</Nested>
      </NestedWrap>
      <Multiline>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem dolores,
        recusandae quidem mollitia eum non vel architecto possimus repudiandae
        quis molestias neque facilis rem dolorum voluptatem impedit nemo
        praesentium voluptas.
      </Multiline>
      <MultilineOverflow>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem dolores,
        recusandae quidem mollitia eum non vel architecto possimus repudiandae
        quis molestias neque facilis rem dolorum voluptatem impedit nemo
        praesentium voluptas.
      </MultilineOverflow>
      <WithEffects>With effects</WithEffects>
      <WithoutHalfLeading>Without half-leading</WithoutHalfLeading>
      <WithoutHalfLeadingNoOptimization>
        Without half-leading (No optimization)
      </WithoutHalfLeadingNoOptimization>
      <WithHalfLeading>With half-leading</WithHalfLeading>
      <FixedSizeBox>Fixed size box</FixedSizeBox>
      <InputContainer>
        <Button>Button</Button>
        <Button disabled>Disabled</Button>
      </InputContainer>
      <InputContainer>
        <TextField value="text field" />
        <TextField value="disabled" disabled />
        <TextField value="invalid" assertive />
      </InputContainer>
      <BorderedBox>Border</BorderedBox>
      <GradientBox>Gradient</GradientBox>
      <WarningGradientBox>Gradient (Warning)</WarningGradientBox>
      <TailwindLike />
      <FixBox>
        <FullBox>Full width</FullBox>
      </FixBox>
      <LocalTheme>This is actually text1 !</LocalTheme>
    </Container>
  </ThemeProvider>
)

export const TailwindLike = () => (
  <div
    css={`
      display: flex;
    `}
  >
    <div
      css={theme((o) => [
        o.bg.mycolor.hover.press,
        o.font.text5.hover.press,
        o.typography(14).bold,
        o.padding.all(16),
        o.borderRadius(8),
      ])}
    >
      Tailwind like
    </div>
  </div>
)

const Container = styled.div``

const LeftTopPadding = styled.div`
  /* 配列で複数のスタイルを返すこともできます */
  ${theme((o) => [
    o.bg.surface3,
    o.font.text4,
    o.typography(32).monospace,
    o.margin.vertical(24),
    o.padding.left(64).top(64),
  ])}
`

const Normal = styled.div`
  ${theme((o) => [
    o.bg.surface2,
    o.font.text2,
    o.typography(20).bold,
    o.padding.all(40),
    o.margin.vertical(24),
  ])}
`

const NestedWrap = styled.div`
  ${theme((o) => [o.bg.surface2, o.padding.all(40)])}
`

const Nested = styled.div`
  ${theme((o) => [
    o.bg.surface4,
    o.font.text5,
    o.typography(20).bold,
    o.height.px(40),
  ])};
`

const Multiline = styled.div`
  ${theme((o) => [
    o.bg.surface3,
    o.font.text1,
    o.typography(16),
    o.width.column(4),
    o.margin.vertical(24),
  ])}
`

const MultilineOverflow = styled(Multiline)`
  ${theme((o) => o.height.px(64))}
`

const WithEffects = styled.div`
  ${theme((o) => [
    o.bg.surface4.hover.press,
    o.font.text5.hover.press,
    o.typography(20).bold,
    o.margin.top(64).bottom(24),
    o.padding.all(64),
  ])}
`

const WithoutHalfLeadingNoOptimization = styled.div`
  ${theme((o) => [o.bg.surface3, o.typography(16).bold, o.margin.vertical(24)])}
  ${theme((o) => [o.padding.all(24)])}
`

const WithoutHalfLeading = styled.div`
  ${theme((o) => [
    o.bg.surface3,
    o.typography(16).bold,
    o.padding.all(24),
    o.margin.vertical(24),
  ])}
`

const WithHalfLeading = styled.div`
  ${theme((o) => [
    o.bg.surface3,
    o.typography(16).bold.preserveHalfLeading,
    o.padding.all(24),
    o.margin.vertical(24),
  ])}
`

const FixedSizeBox = styled.div`
  ${theme((o) => [
    o.bg.surface3,
    o.font.text2,
    o.typography(20).bold,
    o.width.column(3),
    o.height.px(64),
    o.margin.vertical(24),
  ])}
`

const InputContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  gap: 16px;

  ${theme((o) => o.margin.vertical(24))}
`

const Button = styled.button`
  font: inherit;
  appearance: none;
  border-style: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  ${theme((o) => [
    o.bg.brand.hover.press,
    o.font.text5.hover.press,
    o.typography(14).bold,
    o.height.px(40),
    o.padding.horizontal(24),
    o.disabled,
    o.borderRadius('oval'),
    o.outline.default.focus,
  ])}

  ${disabledSelector} {
    cursor: unset;
  }
`

const TextField = styled.input.attrs({ type: 'text' })<{ assertive?: boolean }>`
  font: inherit;
  appearance: none;
  border-style: none;

  &:focus {
    outline: none;
  }

  ${(p) =>
    theme((o) => [
      o.height.px(40),
      o.width.column(2),
      o.padding.horizontal(8).vertical(0),
      o.borderRadius(4),
      o.bg.surface3.hover,
      o.font.text2,
      o.typography(14).preserveHalfLeading,
      o.disabled,
      o.outline.default.focus,
      p.assertive !== undefined && p.assertive && o.outline.assertive,
    ])}
`

const BorderedBox = styled.div`
  ${theme((o) => [
    o.bg.background1,
    o.font.text2,
    o.typography(14),
    o.width.column(4),
    o.margin.vertical(40),
    o.padding.all(24),
    o.border.default,
    o.borderRadius(8),
  ])}
`

const GradientBox = styled.div`
  ${theme((o) => [
    o.bg.callToAction('to right').hover.press,
    o.font.text5.hover.press,
    o.width.column(2),
    o.padding.all(40),
    o.margin.vertical(24),
    o.typography(20).bold,
    o.borderRadius(8),
  ])}

  text-align: center;
`

const WarningGradientBox = styled.div`
  ${theme((o) => [
    o.bg.callToAction('to right').hover.press,
    o.font.text5.hover.press,
    o.width.column(2),
    o.margin.vertical(24),
    o.typography(20).bold,
    o.borderRadius(8),
  ])}
  /* 'padding'と'typography'を同時に指定しない場合にはtransitionが使えない */
  ${theme((o) => [o.padding.all(40)])}

  text-align: center;
`

const FixBox = styled.div`
  ${theme((o) => [o.width.column(3), o.margin.vertical(24)])}
`

const FullBox = styled.div`
  display: inline-block;

  ${theme((o) => [
    o.width.full,
    o.bg.surface4,
    o.font.text5,
    o.padding.all(16),
  ])}
`

const LocalTheme = styled.div`
  ${defineThemeVariables({ text1: '#ffff00' })}

  ${theme((o) => [o.bg.surface4, o.font.text1])}
`
