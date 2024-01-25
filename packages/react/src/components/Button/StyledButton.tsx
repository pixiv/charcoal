import styled, { css } from 'styled-components'
import { variantToFont } from './lib/variantToFont'
import { variantToBackground } from './lib/variantToBackground'
import type { Size } from '.'

const horizontalPaddingSmall = css`
  padding-right: 16px;
  padding-left: 16px;
`

const horizontalPaddingMedium = css`
  padding-right: 24px;
  padding-left: 24px;
`

type StyledButtonProps = {
  $fullWidth: boolean
  $size: Size
  $background: ReturnType<typeof variantToBackground>
  $color: ReturnType<typeof variantToFont>
}

export const StyledButton = styled.button<StyledButtonProps>`
  appearance: none;
  background: transparent;
  padding: 0;
  border-style: none;
  outline: none;
  color: inherit;
  text-rendering: inherit;
  letter-spacing: inherit;
  word-spacing: inherit;
  text-decoration: none;

  &:focus {
    outline: none;
  }

  width: ${(p) => (p.$fullWidth ? 'stretch' : 'min-content')};
  display: inline-grid;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  border-radius: 999999px;
  font-size: 14px;
  line-height: 22px;
  font-weight: bold;

  ${(p) => (p.$size === 'M' ? horizontalPaddingMedium : horizontalPaddingSmall)}
  color: var(--charcoal-${(p) => p.$color});
  background-color: var(--charcoal-${(p) => p.$background});
  transition: 0.2s color, 0.2s background-color, 0.2s box-shadow;

  &:not(:disabled):not([aria-disabled]),
  &[aria-disabled='false'] {
    &:active,
    &:focus,
    &:focus-visible {
      outline: none;
      box-shadow: 0 0 0 4px rgba(0, 150, 250, 0.32);
    }

    &:hover {
      color: var(--charcoal-${(p) => p.$color}-hover);
      background-color: var(--charcoal-${(p) => p.$background}-hover);
    }
    &:active {
      color: var(--charcoal-${(p) => p.$color}-press);
      background-color: var(--charcoal-${(p) => p.$background}-press);
    }
  }

  &:disabled,
  &[aria-disabled]:not([aria-disabled='false']) {
    cursor: default;
    opacity: 0.32;
  }
  height: ${(p) => (p.$size === 'M' ? 40 : 32)}px;
`
