import { useSwitch } from '@react-aria/switch'
import type { AriaSwitchProps } from '@react-types/switch'
import { useMemo, memo, forwardRef } from 'react'
import * as React from 'react'
import { useToggleState } from 'react-stately'
import styled from 'styled-components'
import { useObjectRef } from '@react-aria/utils'
import { focusVisibleFocusRingCss } from '@charcoal-ui/styled'

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

const SwitchCheckbox = forwardRef<HTMLInputElement, SwitchProps>(
  function SwitchCheckboxInner(props, external) {
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
    const ref = useObjectRef<HTMLInputElement>(external)
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
)

export default memo(SwitchCheckbox)

const Label = styled.label`
  display: inline-grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  cursor: pointer;
  outline: 0;

  &:disabled,
  &[aria-disabled]:not([aria-disabled='false']) {
    opacity: 0.32;
    cursor: default;
  }
`

const LabelInner = styled.div`
  font-size: 14px;
  line-height: 22px;
  color: var(--charcoal-text2);
  margin-left: 4px;
`

const SwitchInput = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  display: inline-flex;
  position: relative;
  box-sizing: border-box;
  width: 28px;
  border: 2px solid transparent;

  transition-property: background-color, box-shadow;
  transition-duration: 0.2s;
  cursor: inherit;

  outline: none;
  border-radius: 16px;
  height: 16px;
  margin: 0;
  background-color: var(--charcoal-text4);
  :hover {
    background-color: var(--charcoal-text4-hover);
  }
  :active {
    background-color: var(--charcoal-text4-press);
  }
  ${focusVisibleFocusRingCss}

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
    border-radius: 1024px;
    background-color: var(--charcoal-text5);
    :hover {
      background-color: var(--charcoal-text5-hover);
    }
    :active {
      background-color: var(--charcoal-text5-press);
    }
  }

  &:checked {
    background-color: var(--charcoal-brand);
    :hover {
      background-color: var(--charcoal-brand-hover);
    }
    :active {
      background-color: var(--charcoal-brand-press);
    }
    &::after {
      transform: translateX(12px);
      transition: transform 0.2s;
    }
  }
`
