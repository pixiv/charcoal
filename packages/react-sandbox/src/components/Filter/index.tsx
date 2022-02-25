import React from 'react'
import styled, { css } from 'styled-components'
import { useComponentAbstraction, LinkProps } from '@charcoal/react'
import { maxWidth } from '@charcoal/utils'

interface Props<T extends HTMLElement> {
  active?: boolean
  hover?: boolean
  reactive?: boolean
  children: React.ReactNode
  onClick?: React.MouseEventHandler<T>
}

interface FilterIconButtonProps extends Props<HTMLButtonElement> {
  width?: number
  height?: number
}

export const FilterButton = React.forwardRef(function FilterButton(
  {
    onClick,
    children,
    active = false,
    hover,
    reactive = false,
  }: Props<HTMLButtonElement>,
  ref: React.Ref<HTMLButtonElement>
) {
  return (
    <ButtonLike
      active={active}
      reactive={reactive}
      hover={hover}
      onClick={active && !reactive ? undefined : onClick}
      ref={ref}
    >
      {children}
    </ButtonLike>
  )
})

export const FilterIconButton = React.forwardRef(function FilterIconButton(
  {
    onClick,
    children,
    active = false,
    hover,
    reactive = false,
    width,
    height,
  }: FilterIconButtonProps,
  ref: React.Ref<HTMLButtonElement>
) {
  return (
    <StyledButtonLike
      active={active}
      reactive={reactive}
      hover={hover}
      onClick={active && !reactive ? undefined : onClick}
      ref={ref}
      buttonWidth={width}
      buttonHeight={height}
    >
      {children}
    </StyledButtonLike>
  )
})

export const FilterLink = React.forwardRef(function FilterLink(
  {
    onClick,
    children,
    active = false,
    hover,
    reactive = false,
    ...props
  }: Props<HTMLAnchorElement> & LinkProps,
  ref: React.Ref<HTMLAnchorElement>
) {
  const { Link } = useComponentAbstraction()
  if (active && !reactive) {
    return (
      <PlainElement active hover={hover} ref={ref}>
        {children}
      </PlainElement>
    )
  } else {
    return (
      <Link {...props} onClick={onClick}>
        <PlainElement
          active={active}
          reactive={reactive}
          hover={hover}
          ref={ref}
        >
          {children}
        </PlainElement>
      </Link>
    )
  }
})

interface ButtonCssProps {
  active?: boolean
  hover?: boolean
  reactive?: boolean
}

const buttonCss = css`
  display: block;
  outline: none;
  border: none;
  padding: 9px 24px;
  font-size: 14px;
  line-height: 22px;
  font-weight: bold;
  border-radius: /* absurd radius, but ensures rounded corners */ 2000px;
  transition: color 0.2s;
  color: ${({ theme }) => theme.color.text3};
  cursor: pointer;
  user-select: none;
  background-color: transparent;

  &:hover {
    color: ${({ theme }) => theme.color.text2};
  }

  ${({ hover = false }: ButtonCssProps) =>
    hover &&
    css`
      color: ${({ theme }) => theme.color.text2};
    `}

  ${({ active = false }: ButtonCssProps) =>
    active &&
    css`
      background-color: ${({ theme }) => theme.color.surface3};
      color: ${({ theme }) => theme.color.text2};
    `}

  ${({ active = false, reactive = false }) =>
    active &&
    !reactive &&
    css`
      cursor: default;
    `}

  @media ${({ theme }) => maxWidth(theme.breakpoint.screen1)} {
    padding: 5px 16px;
  }
`

const padding0Css = css`
  padding: 0;

  @media ${({ theme }) => maxWidth(theme.breakpoint.screen1)} {
    padding: 0;
  }
`

const ButtonLike = styled.button`
  ${buttonCss}
`

const PlainElement = styled.span`
  ${buttonCss}
`

const StyledButtonLike = styled(ButtonLike)<{
  buttonWidth: number | undefined
  buttonHeight: number | undefined
}>`
  ${padding0Css};
  ${(p) => p.buttonWidth !== undefined && `width: ${p.buttonWidth}px;`}
  ${(p) => p.buttonHeight !== undefined && `height: ${p.buttonHeight}px;`}
`

const Filter = styled.div`
  display: flex;
`

export default Filter
