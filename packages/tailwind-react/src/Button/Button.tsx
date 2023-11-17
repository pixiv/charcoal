import classNames from 'classnames'
import { ForwardedRef, createElement, forwardRef } from 'react'

export type CustomJSXElement =
  | keyof JSX.IntrinsicElements
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  | React.JSXElementConstructor<any>

export type ButtonProps<T extends CustomJSXElement = 'button'> = {
  children?: React.ReactNode
  as?: T
  variant?: Variant
  size?: Size
  fullWidth?: boolean
} & Omit<React.ComponentProps<T>, 'children'>

type Variant = 'Primary' | 'Default' | 'Overlay' | 'Danger' | 'Navigation'
type Size = 'S' | 'M'

export const Button: <T extends CustomJSXElement = 'button'>(
  props: ButtonProps<T>
) => JSX.Element | null = forwardRef(function Button<
  T extends CustomJSXElement
>(
  {
    className,
    variant = 'Default',
    size = 'M',
    fullWidth,
    as: Component = 'button' as T,
    ...rest
  }: ButtonProps<T>,
  ref: ForwardedRef<ButtonProps<T>>
) {
  return createElement(Component, {
    ...rest,
    ref,
    className: classNames(
      'rounded-full flex cursor-pointer justify-center items-center border-0 font-[sans-serif] text-[14px] font-bold leading-[22px] transition-[box-shadow,background-color,color] duration-[0.2s] focus:shadow-focus disabled:opacity-[0.32] disabled:pointer-events-none',
      variant === 'Primary'
        ? 'bg-brand text-text5 active:bg-brand-press active:text-text5-press hover:bg-brand-hover hover:text-text5-hover'
        : variant === 'Overlay'
        ? 'bg-surface4 text-text5 active:bg-surface4-press active:text-text5-press hover:bg-surface4-hover hover:text-text5-hover'
        : variant === 'Navigation'
        ? 'bg-surface6 text-text5 active:bg-surface6-press active:text-text5-press hover:bg-surface6-hover hover:text-text5-hover'
        : variant === 'Danger'
        ? 'bg-assertive text-text5 active:bg-assertive-press active:text-text5-press hover:bg-assertive-hover hover:text-text5-hover'
        : 'bg-surface3 text-text2 active:bg-surface3-press active:text-text2-press hover:bg-surface3-hover hover:text-text2-hover',
      size === 'S' ? 'h-[32px] px-[16px]' : 'h-[40px] px-[24px]',
      fullWidth === true ? 'w-full' : 'w-fit',
      className
    ),
  })
})
