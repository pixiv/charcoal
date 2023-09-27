import { forwardRef, memo, useMemo } from 'react'
import * as React from 'react'
import styled, { css } from 'styled-components'
import { useCheckbox } from '@react-aria/checkbox'
import { useObjectRef } from '@react-aria/utils'
import { useToggleState } from 'react-stately'
import { disabledSelector } from '@charcoal-ui/utils'

import type { AriaCheckboxProps } from '@react-types/checkbox'
import Icon from '../Icon'

type CheckboxLabelProps =
  | {
      children: React.ReactNode
    }
  | {
      label: string
    }

export type CheckboxProps = CheckboxLabelProps & {
  readonly id?: string
  readonly name?: string
  readonly className?: string

  readonly checked?: boolean
  readonly defaultChecked?: boolean
  readonly disabled?: boolean
  readonly readonly?: boolean
  readonly invalid?: boolean

  readonly onClick?: () => void
  readonly onChange?: (isSelected: boolean) => void
  readonly onBlur?: () => void
  readonly onFocus?: () => void
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  function CheckboxInner({ invalid = false, ...props }, ref) {
    const ariaCheckboxProps = useMemo<AriaCheckboxProps>(
      () => ({
        ...props,
        isInValid: invalid,
        isSelected: props.checked,
        defaultSelected: props.defaultChecked,
        validationState: invalid ? 'invalid' : 'valid',
        // children がいない場合は aria-label をつけないといけない
        'aria-label': 'children' in props ? undefined : props.label,
        isDisabled: props.disabled,
      }),
      [invalid, props]
    )
    const state = useToggleState(ariaCheckboxProps)
    const objectRef = useObjectRef(ref)

    const { inputProps } = useCheckbox(ariaCheckboxProps, state, objectRef)
    const isDisabled = (props.disabled ?? false) || (props.readonly ?? false)

    return (
      <InputRoot aria-disabled={isDisabled} className={props.className}>
        <CheckboxRoot>
          <CheckboxInput type="checkbox" {...inputProps} />
          <CheckboxInputOverlay aria-hidden={true} checked={inputProps.checked}>
            <Icon name="24/Check" unsafeNonGuidelineScale={2 / 3} />
          </CheckboxInputOverlay>
        </CheckboxRoot>

        {'children' in props && <InputLabel>{props.children}</InputLabel>}
      </InputRoot>
    )
  }
)

export default memo(Checkbox)

const hiddenCss = css`
  visibility: hidden;
`

const InputRoot = styled.label`
  position: relative;
  display: flex;

  cursor: pointer;
  ${disabledSelector} {
    cursor: default;
  }

  gap: 4px;
  &:disabled,
  &[aria-disabled]:not([aria-disabled='false']) {
    opacity: 0.32;
  }
`

const CheckboxRoot = styled.div`
  position: relative;
`

const CheckboxInput = styled.input`
  &[type='checkbox'] {
    appearance: none;
    display: block;
    cursor: pointer;
    margin: 0;
    width: 20px;
    height: 20px;
    border-radius: 4px;
    transition: 0.2s box-shadow, 0.2s background-color;

    &:checked {
      background-color: var(--charcoal-brand);

      &:not(:disabled):not([aria-disabled]),
      &[aria-disabled='false'] {
        &:hover {
          background-color: var(--charcoal-brand-hover);
        }
        &:active {
          background-color: var(--charcoal-brand-press);
        }
      }
    }

    &:not(:disabled):not([aria-disabled]),
    &[aria-disabled='false'] {
      &:focus,
      &:active {
        outline: none;
        box-shadow: 0 0 0 4px rgba(0, 150, 250, 0.32);
        &:not(:focus-visible) {
          outline: none;
        }
      }
      &:focus-visible {
        outline: none;
        box-shadow: 0 0 0 4px rgba(0, 150, 250, 0.32);
      }
      &[aria-invalid='true'] {
        box-shadow: 0 0 0 4px rgba(255, 43, 0, 0.32);
      }
    }

    &:not(:checked) {
      border-width: 2px;
      border-style: solid;
      border-color: var(--charcoal-text4);
    }
  }
`

const CheckboxInputOverlay = styled.div<{ checked?: boolean }>`
  position: absolute;
  top: -2px;
  left: -2px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  color: var(--charcoal-text5);

  ${({ checked }) => checked !== true && hiddenCss};
`

const InputLabel = styled.div`
  color: var(--charcoal-text2);
  font-size: 14px;
  /** checkbox の height が 20px なのでcheckbox と text が揃っているように見せるために行ボックスの高さを 20px にしている */
  line-height: 20px;
`
