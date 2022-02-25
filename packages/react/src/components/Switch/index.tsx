import { useSwitch } from '@react-aria/switch'
import type { AriaSwitchProps } from '@react-types/switch'
import React, { useRef, useMemo } from 'react'
import { useToggleState } from 'react-stately'
import styled from 'styled-components'
import { theme } from '../../styled'
import { disabledSelector, px } from '@charcoal/utils'

export type SwitchProps = {
  name: string
  className?: string
  value?: string
  checked?: boolean
  disabled?: boolean
  onChange(checked: boolean): void
} & (
  | // children か label は片方が必須
  {
      children: React.ReactNode
    }
  | {
      label: string
    }
)

export default function SwitchCheckbox(props: SwitchProps) {
  const { disabled, className } = props

  const ariaSwitchProps: AriaSwitchProps = useMemo(
    () => ({
      ...props,

      // children がいない場合は aria-label をつけないといけない
      'aria-label': 'children' in props ? undefined : props.label,
      isDisabled: props.disabled,
      isSelected: props.checked,
    }),
    [props]
  )

  const state = useToggleState(ariaSwitchProps)
  const ref = useRef<HTMLInputElement>(null)
  const {
    inputProps: { className: _className, type: _type, ...rest },
  } = useSwitch(ariaSwitchProps, state, ref)

  return (
    <Label className={className} aria-disabled={disabled}>
      <SwitchInput {...rest} ref={ref} />
      {'children' in props ? (
        // eslint-disable-next-line react/destructuring-assignment
        <LabelInner>{props.children}</LabelInner>
      ) : undefined}
    </Label>
  )
}

const Label = styled.label`
  display: inline-grid;
  grid-template-columns: auto 1fr;
  gap: ${({ theme }) => px(theme.spacing[4])};
  cursor: pointer;
  outline: 0;

  ${theme((o) => o.disabled)}

  ${disabledSelector} {
    cursor: default;
  }
`

const LabelInner = styled.div`
  ${theme((o) => o.typography(14))}
`

const SwitchInput = styled.input.attrs({
  type: 'checkbox',
})`
  &[type='checkbox'] {
    appearance: none;
    display: inline-flex;
    position: relative;
    box-sizing: border-box;
    width: 28px;
    border: 2px solid transparent;
    transition: box-shadow 0.2s, background-color 0.2s;
    cursor: inherit;
    ${theme((o) => [
      o.borderRadius(16),
      o.height.px(16),
      o.bg.text4.hover.press,
      o.outline.default.focus,
    ])}

    &::after {
      content: '';
      position: absolute;
      display: block;
      top: 0;
      left: 0;
      width: 12px;
      height: 12px;
      transform: translateX(0);
      transition: transform 0.2s;
      ${theme((o) => [o.bg.text5.hover.press, o.borderRadius('oval')])}
    }

    &:checked {
      ${theme((o) => o.bg.brand.hover.press)}

      &::after {
        transform: translateX(12px);
      }
    }
  }
`
