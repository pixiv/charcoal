import { forwardRef } from 'react'
import styled from 'styled-components'
import { unreachable } from '../../_lib'
import { theme } from '../../styled'
import Clickable, { ClickableElement, ClickableProps } from '../Clickable'

type Variant = 'Primary' | 'Default' | 'Overlay' | 'Danger' | 'Navigation'
type Size = 'S' | 'M'

interface StyledProps {
  /**
   * ボタンのスタイル
   */
  variant: Variant
  /**
   * ボタンのサイズ
   */
  size: Size
  /**
   * 幅を最大まで広げて描画
   */
  fullWidth: boolean
}

export type ButtonProps = Partial<StyledProps> & ClickableProps

const Button = forwardRef<ClickableElement, ButtonProps>(function Button(
  {
    children,
    variant = 'Default',
    size = 'M',
    fullWidth: fixed = false,
    disabled = false,
    ...rest
  },
  ref
) {
  return (
    <StyledButton
      {...rest}
      disabled={disabled}
      variant={variant}
      size={size}
      fullWidth={fixed}
      ref={ref}
    >
      {children}
    </StyledButton>
  )
})
export default Button

const StyledButton = styled(Clickable)
  .withConfig<StyledProps>({
    shouldForwardProp(prop) {
      // fixed は <button> 要素に渡ってはいけない
      return prop !== 'fullWidth'
    },
  })
  .attrs<StyledProps, ReturnType<typeof styledProps>>(styledProps)`
  width: ${(p) => (p.fullWidth ? 'stretch' : 'min-content')};
  display: inline-grid;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;

  ${(p) =>
    theme((o) => [
      o.font[p.font].hover.press,
      o.bg[p.background].hover.press,
      o.typography(14).bold.preserveHalfLeading,
      o.padding.horizontal(p.padding),
      o.disabled,
      o.borderRadius('oval'),
      o.outline.default.focus,
    ])}

  /* よく考えたらheight=32って定義が存在しないな... */
  height: ${(p) => p.height}px;
`

function styledProps(props: StyledProps) {
  return {
    ...props,
    ...variantToProps(props.variant),
    ...sizeToProps(props.size),
  }
}

function variantToProps(variant: Variant) {
  switch (variant) {
    case 'Overlay':
      return { font: 'text5', background: 'surface4' } as const
    case 'Default':
      return { font: 'text2', background: 'surface3' } as const
    case 'Primary':
      return { font: 'text5', background: 'brand' } as const
    case 'Navigation':
      return { font: 'text5', background: 'surface6' } as const
    case 'Danger':
      return { font: 'text5', background: 'assertive' } as const
    default:
      return unreachable(variant)
  }
}

function sizeToProps(size: Size) {
  switch (size) {
    case 'S':
      return {
        height: 32,
        padding: 16,
      } as const
    case 'M':
      return {
        height: 40,
        padding: 24,
      } as const
  }
}
