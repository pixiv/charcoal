import * as React from 'react'
import styled from 'styled-components'
import {
  LinkProps,
  useComponentAbstraction,
} from '../../core/ComponentAbstraction'
import { disabledSelector } from '@charcoal-ui/utils'

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
    const isLink = 'to' in props
    const as = isLink ? Link : 'button'
    const ariaDisabled = isLink && props.disabled === true ? true : undefined
    let rest = props
    if (isLink) {
      const { disabled, ..._rest } = props
      rest = _rest
    }
    return (
      <StyledClickableDiv
        {...rest}
        ref={ref}
        as={as}
        aria-disabled={ariaDisabled}
      />
    )
  }
)
export default Clickable

const StyledClickableDiv = styled.div`
  cursor: pointer;

  ${disabledSelector} {
    cursor: default;
  }

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
`
