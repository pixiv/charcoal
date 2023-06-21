import { useSwitch } from '@react-aria/switch'
import type { AriaSwitchProps } from '@react-types/switch'
import { useRef, useMemo } from 'react'
import * as React from 'react'
import { useToggleState } from 'react-stately'
import styled from 'styled-components'
import { theme } from '../../styled'
import { disabledSelector } from '@charcoal-ui/utils'

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
  align-items: center;
  cursor: pointer;
  outline: 0;

  ${theme((o) => o.disabled)}

  :active > input {
    box-shadow: 0 0 0 4px rgba(0, 150, 250, 0.32);
  }

  ${disabledSelector} {
    cursor: default;
  }
`

const LabelInner = styled.div`
  ${theme((o) => [
    o.typography(14).preserveHalfLeading,
    o.font.text2,
    o.margin.left(4),
  ])}
`

const SwitchInput = styled.input.attrs({
  type: 'checkbox',
})`
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
  :focus {
    box-shadow: 0 0 0 4px rgba(0, 150, 250, 0.32);
  }

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
