import styled, { css } from 'styled-components'
import Clickable from '../Clickable'
import { variantToFont } from './lib/variantToFont'
import { variantToBackground } from './lib/variantToBackground'
import type { Size } from '.'
import { focusVisibleFocusRingCss } from '@charcoal-ui/styled'

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
  $isActive: boolean
}

export const StyledButton = styled(Clickable)<StyledButtonProps>`
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
    ${focusVisibleFocusRingCss}

    ${({ $isActive: $active, $color, $background }) =>
      $active
        ? css`
            color: var(--charcoal-${$color}-press);
            background-color: var(--charcoal-${$background}-press);
          `
        : css`
            &:hover {
              color: var(--charcoal-${$color}-hover);
              background-color: var(--charcoal-${$background}-hover);
            }
            &:active {
              color: var(--charcoal-${$color}-press);
              background-color: var(--charcoal-${$background}-press);
            }
          `}
  }

  &:disabled,
  &[aria-disabled]:not([aria-disabled='false']) {
    opacity: 0.32;
  }
  height: ${(p) => (p.$size === 'M' ? 40 : 32)}px;
`
