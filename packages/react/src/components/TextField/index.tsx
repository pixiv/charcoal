import { useTextField } from '@react-aria/textfield'
import { useVisuallyHidden } from '@react-aria/visually-hidden'
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import * as React from 'react'
import styled, { css } from 'styled-components'
import FieldLabel, { FieldLabelProps } from '../FieldLabel'
import { countCodePointsInString, mergeRefs } from '../../_lib'
import { ReactAreaUseTextFieldCompat } from '../../_lib/compat'
import { useFocusWithClick } from './useFocusWithClick'

type DOMProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  // react-ariaのhookは、onChangeが`(v: string) => void`想定
  | 'onChange'

  // RDFa Attributeとかぶる
  // https://github.com/DefinitelyTyped/DefinitelyTyped/blob/58d57ca87ac7be0d306c0844dc254e90c150bd0d/types/react/index.d.ts#L1951
  | 'prefix'

  // ReactAreaUseTextFieldCompatに書いてあるような事情で、ここにあるイベントハンドラの型をゆるめる
  | keyof ReactAreaUseTextFieldCompat
>

export interface TextFieldProps
  extends Pick<FieldLabelProps, 'label' | 'requiredText' | 'subLabel'>,
    DOMProps,
    ReactAreaUseTextFieldCompat {
  readonly prefix?: ReactNode
  readonly suffix?: ReactNode

  // <input> 要素は number とか string[] もありうるが、今はこれしか想定してない
  readonly defaultValue?: string
  readonly value?: string
  readonly onChange?: (value: string) => void

  // react-ariaの型定義のせいでHTMLInputElementにできない
  readonly onKeyDown?: (event: React.KeyboardEvent<Element>) => void
  readonly onFocus?: (event: React.FocusEvent<Element>) => void
  readonly onBlur?: (event: React.FocusEvent<Element>) => void

  readonly showCount?: boolean
  readonly showLabel?: boolean
  readonly assistiveText?: string
  readonly invalid?: boolean
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  function SingleLineTextFieldInner({ onChange, ...props }, forwardRef) {
    const {
      className,
      showLabel = false,
      showCount = false,
      label,
      requiredText,
      subLabel,
      disabled = false,
      required,
      invalid = false,
      assistiveText,
      maxLength,
      prefix = null,
      suffix = null,
    } = props

    const { visuallyHiddenProps } = useVisuallyHidden()
    const ariaRef = useRef<HTMLInputElement>(null)
    const [count, setCount] = useState(
      countCodePointsInString(props.value ?? '')
    )

    const nonControlled = props.value === undefined
    const handleChange = useCallback(
      (value: string) => {
        const count = countCodePointsInString(value)
        if (maxLength !== undefined && count > maxLength) {
          return
        }
        if (nonControlled) {
          setCount(count)
        }
        onChange?.(value)
      },
      [maxLength, nonControlled, onChange]
    )

    useEffect(() => {
      setCount(countCodePointsInString(props.value ?? ''))
    }, [props.value])

    const { inputProps, labelProps, descriptionProps, errorMessageProps } =
      useTextField(
        {
          inputElementType: 'input',
          isDisabled: disabled,
          isRequired: required,
          validationState: invalid ? 'invalid' : 'valid',
          description: !invalid && assistiveText,
          errorMessage: invalid && assistiveText,
          onChange: handleChange,
          ...props,
        },
        ariaRef
      )

    const containerRef = useRef(null)

    useFocusWithClick(containerRef, ariaRef)

    return (
      <TextFieldRoot className={className} isDisabled={disabled}>
        <TextFieldLabel
          label={label}
          requiredText={requiredText}
          required={required}
          subLabel={subLabel}
          {...labelProps}
          {...(!showLabel ? visuallyHiddenProps : {})}
        />
        <StyledInputContainer
          ref={containerRef}
          invalid={invalid}
          aria-disabled={disabled === true ? true : undefined}
        >
          {prefix && <PrefixContainer>{prefix}</PrefixContainer>}
          <StyledInput
            ref={mergeRefs(forwardRef, ariaRef)}
            invalid={invalid}
            {...inputProps}
          />
          {(suffix || showCount) && (
            <SuffixContainer>
              {suffix}
              {showCount && (
                <SingleLineCounter>
                  {maxLength !== undefined ? `${count}/${maxLength}` : count}
                </SingleLineCounter>
              )}
            </SuffixContainer>
          )}
        </StyledInputContainer>
        {assistiveText != null && assistiveText.length !== 0 && (
          <AssistiveText
            invalid={invalid}
            {...(invalid ? errorMessageProps : descriptionProps)}
          >
            {assistiveText}
          </AssistiveText>
        )}
      </TextFieldRoot>
    )
  }
)

export default TextField

const TextFieldRoot = styled.div<{ isDisabled: boolean }>`
  display: flex;
  flex-direction: column;

  ${(p) => p.isDisabled && { opacity: p.theme.elementEffect.disabled.opacity }}
`

const TextFieldLabel = styled(FieldLabel)`
  margin-bottom: 8px;
`

const StyledInputContainer = styled.div<{
  invalid: boolean
}>`
  display: flex;
  height: 40px;
  transition: 0.2s background-color, 0.2s box-shadow;
  color: var(--charcoal-text2);
  background-color: var(--charcoal-surface3);
  border-radius: 4px;
  gap: 4px;
  padding: 0 8px;
  line-height: 22px;
  font-size: 14px;

  :not(:disabled):not([aria-disabled]):hover,
  [aria-disabled='false']:hover {
    background-color: var(--charcoal-surface3-hover);
  }

  :not(:disabled):not([aria-disabled]):active,
  [aria-disabled='false']:active {
    outline: none;
    box-shadow: 0 0 0 4px
      ${(p) => (p.invalid ? `rgba(255,43,0,0.32)` : `rgba(0, 150, 250, 0.32);`)};
  }

  :focus-within {
    outline: none;
    box-shadow: 0 0 0 4px
      ${(p) => (p.invalid ? `rgba(255,43,0,0.32)` : `rgba(0, 150, 250, 0.32);`)};
  }

  ${(p) =>
    p.invalid &&
    css`
      box-shadow: 0 0 0 4px rgba(255, 43, 0, 0.32);
    `}
`

const PrefixContainer = styled.div`
  display: flex;
  padding-left: 8px;
  align-items: center;
`

const SuffixContainer = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
`

const StyledInput = styled.input<{
  invalid: boolean
}>`
  display: flex;
  border: none;
  box-sizing: border-box;
  outline: none;
  font-family: inherit;

  /* Prevent zooming for iOS Safari */
  transform-origin: top left;
  transform: scale(0.875);
  min-width: calc(100% / 0.875);
  height: calc(100% / 0.875);
  font-size: calc(14px / 0.875);
  line-height: calc(22px / 0.875);
  padding-left: 0;
  padding-right: 0;
  border-radius: calc(4px / 0.875);

  /* Display box-shadow for iOS Safari */
  appearance: none;
  background: transparent;

  color: var(--charcoal-text2);
  &::placeholder {
    color: var(--charcoal-text3);
  }
`

const SingleLineCounter = styled.span`
  line-height: 22px;
  font-size: 14px;
  color: var(--charcoal-text3);
`

const AssistiveText = styled.p<{ invalid: boolean }>`
  font-size: 14px;
  line-height: 22px;
  margin-top: 4px;
  margin-bottom: -4px;
  color: ${(p) => `var(--charcoal-${p.invalid ? `assertive` : `text2`})`};
`
