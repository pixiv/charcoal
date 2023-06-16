import { boolean } from '@storybook/addon-knobs'
import * as React from 'react'
import styled, { css } from 'styled-components'
import { theme } from '../../styled'
import WithIcon from '.'
import { applyEffect } from '@charcoal-ui/utils'

export default {
  title: 'Sandbox/WithIcon',
  component: WithIcon,
}

export const Default = () => {
  const fit = boolean('fit', true)
  const bigger = boolean(
    'Icon height bigger than line-height (`fit` is effective)',
    false
  )
  const prefix = boolean('prefix', false)
  const show = boolean('show', true)
  return (
    <Container>
      <WithIcon
        icon={<TestInlineIcon lineHeight={bigger ? 32 : 22} />}
        show={show}
        prefix={prefix}
        fit={fit}
      >
        Menu
      </WithIcon>
    </Container>
  )
}

export const Performance = () => (
  <Container>
    <WithIcon
      icon={<TestInlineIcon lineHeight={22} />}
      show
      fit
      // Hard-coded width (ResizeObserver free and NO measuring cost)
      width={16}
    >
      Menu
    </WithIcon>
  </Container>
)

export const Naive = () => (
  // NO measuring cost
  <Container>
    <WithIcon icon={<TestInlineIcon lineHeight={22} />} show>
      Menu
    </WithIcon>
  </Container>
)

export const Prefix = () => (
  <Container>
    <WithIcon icon={<TestIcon />} show prefix fit>
      Selection
    </WithIcon>
  </Container>
)

function Container(props: { className?: string; children?: React.ReactNode }) {
  return (
    <div
      css={css`
        ${theme((o) => [o.font.text1, o.typography(14).preserveHalfLeading])}
        display: flex;
      `}
    >
      <div
        css={css`
          background-color: ${({ theme }) =>
            applyEffect(theme.color.brand, theme.elementEffect.disabled)};
        `}
        {...props}
      />
    </div>
  )
}

export const Hide = () => (
  <Container>
    <WithIcon icon={<TestIcon />} show={false} prefix>
      Selection
    </WithIcon>
  </Container>
)

export const Collapse = () => (
  <Container>
    <WithIcon icon={<TestIcon />} show="collapse" prefix>
      Selection
    </WithIcon>
  </Container>
)

export const LongText = () => (
  <Container
    css={`
      width: 200px;
    `}
  >
    <WithIcon icon={<TestIcon />}>
      Long Long Long Long Long Long Long Long Long Long Text
    </WithIcon>
  </Container>
)

export const LongTextOverflow = () => (
  <Container
    css={`
      width: 200px;
    `}
  >
    <WithIcon icon={<TestIcon />} fixed>
      Long Long Long Long Long Long Long Long Long Long Text
    </WithIcon>
  </Container>
)

const TestIcon = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background-color: currentColor;
`

const TestInlineIcon = styled.div<{ lineHeight: number }>`
  display: inline-flex;
  vertical-align: top;
  align-items: center;
  line-height: ${(p) => p.lineHeight}px;
  height: ${(p) => p.lineHeight}px;
  &::before {
    content: '';
    display: inline-block;
    height: 16px;
    width: 16px;
    background-color: currentColor;
  }
`
