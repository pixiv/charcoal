import React, { forwardRef, memo } from 'react'
import styled, { css } from 'styled-components'
import { disabledSelector } from '@charcoal-ui/utils'

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
    const isDisabled = (props.disabled ?? false) || (props.readonly ?? false)
    return (
      <InputRoot aria-disabled={isDisabled}>
        <CheckboxRoot>
          <CheckboxInput
            type="checkbox"
            aria-label={'label' in props ? props.label : undefined}
            ref={ref}
            checked={props.checked ?? false}
            disabled={props.disabled}
            readOnly={props.readonly}
          />
          <CheckboxInputOverlay
            aria-hidden={true}
            checked={props.checked ?? false}
          >
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
    opacity: ${({ theme }) => theme.elementEffect.disabled.opacity};
  }

  gap: 4px;
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

    transition: 0.2s box-shadow;

    &:checked {
      background: ${({ theme }) => theme.color.brand};
    }
    &:not(:checked) {
      border-width: 2px;
      border-style: solid;
      border-color: ${({ theme }) => theme.color.text4};
    }
    border-radius: 4px;

    :focus {
      box-shadow: 0 0 0 ${({ theme }) => theme.outline.default.weight}px
        ${({ theme }) => theme.outline.default.color};
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
  color: ${({ theme }) => theme.color.text5};

  ${({ checked }) => checked !== true && hiddenCss};
`

const InputLabel = styled.div`
  color: ${({ theme }) => theme.color.text2};

  font-size: 14px;
  /** checkbox の height が 20px なのでcheckbox と text が揃っているように見せるために行ボックスの高さを 20px にしている */
  line-height: 20px;
`
