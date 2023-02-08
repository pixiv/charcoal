import React, { forwardRef, memo, useMemo } from 'react'
import styled, { css } from 'styled-components'
import { useCheckbox } from '@react-aria/checkbox'
import { useObjectRef } from '@react-aria/utils'
import { useToggleState } from 'react-stately'
import { disabledSelector, px } from '@charcoal-ui/utils'
import { theme } from '../../styled'

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

  readonly checked?: boolean
  readonly defaultChecked?: boolean
  readonly disabled?: boolean
  readonly readonly?: boolean

  readonly onClick?: () => void
  readonly onChange?: (isSelected: boolean) => void
  readonly onBlur?: () => void
  readonly onFocus?: () => void
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  function CheckboxInner(props, ref) {
    const ariaCheckboxProps = useMemo<AriaCheckboxProps>(
      () => ({
        ...props,
        isSelected: props.checked,
        defaultSelected: props.defaultChecked,
        // children がいない場合は aria-label をつけないといけない
        'aria-label': 'children' in props ? undefined : props.label,
        isDisabled: props.disabled,
      }),
      [props]
    )
    const state = useToggleState(ariaCheckboxProps)
    const objectRef = useObjectRef(ref)

    const { inputProps } = useCheckbox(ariaCheckboxProps, state, objectRef)
    const isDisabled = (props.disabled ?? false) || (props.readonly ?? false)

    return (
      <InputRoot aria-disabled={isDisabled}>
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

  gap: ${({ theme }) => px(theme.spacing[4])};
  ${theme((o) => [o.disabled])}
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

    &:checked {
      ${theme((o) => o.bg.brand.hover.press)}
    }
    &:not(:checked) {
      border-width: 2px;
      border-style: solid;
      border-color: ${({ theme }) => theme.color.text4};
    }
    ${theme((o) => [o.outline.default.focus, o.borderRadius(4)])}
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

  ${theme((o) => [o.width.px(24), o.height.px(24), o.font.text5])}

  ${({ checked }) => checked !== true && hiddenCss};
`

const InputLabel = styled.div`
  ${theme((o) => [o.font.text2])}

  font-size: 14px;
  line-height: 20px;
`
