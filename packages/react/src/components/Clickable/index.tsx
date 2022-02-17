import React from 'react'
import styled, { css } from 'styled-components'
import {
  LinkProps,
  useComponentAbstraction,
} from '../../core/ComponentAbstraction'
import { disabledSelector } from '@pixiv-elements/utils'

interface BaseProps {
  /**
   * クリックの無効化
   */
  disabled?: boolean
}

interface LinkBaseProps {
  /**
   * リンクのURL。指定するとbuttonタグではなくaタグとして描画される
   */
  to: string
}

export type ClickableProps =
  | (BaseProps & Omit<React.ComponentPropsWithoutRef<'button'>, 'disabled'>)
  | (BaseProps & LinkBaseProps & Omit<LinkProps, 'to'>)
export type ClickableElement = HTMLButtonElement & HTMLAnchorElement

const Clickable = React.forwardRef<ClickableElement, ClickableProps>(
  function Clickable(props, ref) {
    const { Link } = useComponentAbstraction()
    if ('to' in props) {
      const { onClick, disabled = false, ...rest } = props
      return (
        <A<typeof Link>
          {...rest}
          as={disabled ? undefined : Link}
          onClick={disabled ? undefined : onClick}
          aria-disabled={disabled}
          ref={ref}
        />
      )
    } else {
      return <Button {...props} ref={ref} />
    }
  }
)
export default Clickable

const clickableCss = css`
  /* Clickable style */
  cursor: pointer;

  ${disabledSelector} {
    cursor: default;
  }
`

const Button = styled.button`
  /* Reset button appearance */
  appearance: none;
  background: transparent;
  padding: 0;
  border-style: none;
  outline: none;
  color: inherit;
  text-rendering: inherit;
  letter-spacing: inherit;
  word-spacing: inherit;

  &:focus {
    outline: none;
  }

  /* Change the font styles in all browsers. */
  font: inherit;

  /* Remove the margin in Firefox and Safari. */
  margin: 0;

  /* Show the overflow in Edge. */
  overflow: visible;

  /* Remove the inheritance of text transform in Firefox. */
  text-transform: none;

  /* Remove the inner border and padding in Firefox. */
  &::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  ${clickableCss}
`

const A = styled.span`
  /* Reset a-tag appearance */
  color: inherit;

  &:focus {
    outline: none;
  }

  .text {
    top: calc(1em + 2em);
  }

  ${clickableCss}
`
