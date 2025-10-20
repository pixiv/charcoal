import * as React from 'react'
import styled, { css } from 'styled-components'
import { theme } from '../../styled'
import InfoIcon from '../icons/InfoIcon'
import { maxWidth } from '@charcoal-ui/utils'

type Context = 'page' | 'section'
interface Props {
  children: React.ReactNode
  context: Context
  className?: string
}

/**
 * @deprecated use HintText from @charcoal-ui/react
 */
export default function HintText({ children, context, className }: Props) {
  return (
    <Container
      className={className}
      {...styledProps({ children, context, className })}
    >
      <IconWrap>
        <InfoIcon />
      </IconWrap>
      <Text>{children}</Text>
    </Container>
  )
}

const Container = styled.div<ReturnType<typeof styledProps>>`
  ${(p) =>
    theme((o) => [
      o.bg.surface3,
      o.borderRadius(8),
      o.padding.vertical(p.default.vertical),
      o.padding.horizontal(p.default.horizontal),
    ])}

  @media ${({ theme: t }) => maxWidth(t.breakpoint.screen1)} {
    ${(p) =>
      theme((o) => [
        o.padding.vertical(p.screen1.vertical),
        o.padding.horizontal(p.screen1.horizontal),
      ])}
  }

  display: flex;
  align-items: flex-start;
  ${(p) =>
    p.context === 'page' &&
    css`
      justify-content: center;
    `}
`

const IconWrap = styled.div`
  display: flex;
  align-items: center;
  color: ${(p) => p.theme.color.text4};
  height: 22px;
  margin: -4px 4px -4px 0;
`

const Text = styled.p`
  ${theme((o) => [o.font.text2, o.typography(14)])}
  margin: 0;
  min-width: 0;
  overflow-wrap: break-word;
`

function styledProps(props: Props) {
  return { ...props, ...contextToProps(props.context) }
}

function contextToProps(context: Context) {
  switch (context) {
    case 'page':
      return {
        default: {
          horizontal: 40,
          vertical: 24,
        },
        screen1: {
          horizontal: 16,
          vertical: 16,
        },
      } as const
    case 'section':
      return {
        default: {
          horizontal: 16,
          vertical: 16,
        },
        screen1: {
          horizontal: 16,
          vertical: 16,
        },
      } as const
  }
}
