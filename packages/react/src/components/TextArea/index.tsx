import { useTextField } from '@react-aria/textfield'
import { useVisuallyHidden } from '@react-aria/visually-hidden'
import { forwardRef, useCallback, useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import FieldLabel, { FieldLabelProps } from '../FieldLabel'
import { countCodePointsInString, mergeRefs } from '../../_lib'
import { ReactAreaUseTextFieldCompat } from '../../_lib/compat'
import { AssistiveText } from '../TextField'
import { useFocusWithClick } from '../TextField/useFocusWithClick'
import { mergeProps } from '@react-aria/utils'

type DOMProps = Omit<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  // react-ariaのhookは、onChangeが`(v: string) => void`想定
  | 'onChange'
  // ReactAreaUseTextFieldCompatに書いてあるような事情で、ここにあるイベントハンドラの型をゆるめる
  | keyof ReactAreaUseTextFieldCompat
>

export interface TextAreaProps
  extends Pick<FieldLabelProps, 'label' | 'requiredText' | 'subLabel'>,
    DOMProps,
    ReactAreaUseTextFieldCompat {
  readonly autoHeight?: boolean
  readonly rows?: number

  // <input> 要素は number とか string[] もありうるが、今はこれしか想定してない
  readonly defaultValue?: string
  readonly value?: string
  readonly onChange?: (value: string) => void

  // react-ariaの型定義のせいでHTMLTextAreaElementにできない
  readonly onKeyDown?: (event: React.KeyboardEvent<Element>) => void
  readonly onFocus?: (event: React.FocusEvent<Element>) => void
  readonly onBlur?: (event: React.FocusEvent<Element>) => void

  readonly showCount?: boolean
  readonly showLabel?: boolean
  readonly assistiveText?: string
  readonly invalid?: boolean
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  function TextAreaInner({ onChange, ...props }, forwardRef) {
    const {
      className,
      showCount = false,
      showLabel = false,
      label,
      requiredText,
      subLabel,
      disabled = false,
      required,
      invalid = false,
      readOnly = false,
      assistiveText,
      maxLength,
      autoHeight = false,
      rows: initialRows = 4,
      ...restProps
    } = props

    const { visuallyHiddenProps } = useVisuallyHidden()
    const textareaRef = useRef<HTMLTextAreaElement>(null)
    const ariaRef = useRef<HTMLTextAreaElement>(null)
    const [count, setCount] = useState(
      countCodePointsInString(props.value ?? '')
    )
    const [rows, setRows] = useState(initialRows)

    const syncHeight = useCallback(
      (textarea: HTMLTextAreaElement) => {
        const rows = (`${textarea.value}\n`.match(/\n/gu)?.length ?? 0) || 1
        setRows(initialRows <= rows ? rows : initialRows)
      },
      [initialRows]
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
        if (autoHeight && textareaRef.current !== null) {
          syncHeight(textareaRef.current)
        }
        onChange?.(value)
      },
      [autoHeight, maxLength, nonControlled, onChange, syncHeight]
    )

    useEffect(() => {
      setCount(countCodePointsInString(props.value ?? ''))
    }, [props.value])

    const {
      inputProps: ariaInputProps,
      labelProps,
      descriptionProps,
      errorMessageProps,
    } = useTextField(
      {
        inputElementType: 'textarea',
        isDisabled: disabled,
        isRequired: required,
        isReadOnly: readOnly,
        validationState: invalid ? 'invalid' : 'valid',
        description: !invalid && assistiveText,
        errorMessage: invalid && assistiveText,
        onChange: handleChange,
        ...props,
      },
      ariaRef
    )

    useEffect(() => {
      if (autoHeight && textareaRef.current !== null) {
        syncHeight(textareaRef.current)
      }
    }, [autoHeight, syncHeight])

    const containerRef = useRef(null)

    useFocusWithClick(containerRef, ariaRef)

    const inputProps = mergeProps(restProps, ariaInputProps)

    return (
      <TextFieldRoot className={className} isDisabled={disabled}>
        <FieldLabel
          label={label}
          requiredText={requiredText}
          required={required}
          subLabel={subLabel}
          {...labelProps}
          {...(!showLabel ? visuallyHiddenProps : {})}
        />
        <StyledTextareaContainer
          ref={containerRef}
          invalid={invalid}
          rows={showCount ? rows + 1 : rows}
          aria-disabled={disabled === true ? 'true' : undefined}
        >
          <StyledTextarea
            ref={mergeRefs(textareaRef, forwardRef, ariaRef)}
            rows={rows}
            noBottomPadding={showCount}
            {...inputProps}
          />
          {showCount && (
            <MultiLineCounter>
              {maxLength !== undefined ? `${count}/${maxLength}` : count}
            </MultiLineCounter>
          )}
        </StyledTextareaContainer>
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

export default TextArea

const TextFieldRoot = styled.div<{ isDisabled: boolean }>`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 4px;

  ${(p) => p.isDisabled && { opacity: p.theme.elementEffect.disabled.opacity }}
`

const StyledTextareaContainer = styled.div<{ rows: number; invalid: boolean }>`
  position: relative;
  overflow: hidden;

  color: var(--charcoal-text2);
  background-color: var(--charcoal-surface3);
  border-radius: 4px;
  transition: 0.2s background-color, 0.2s box-shadow;

  ${({ rows }) => css`
    height: calc(22px * ${rows} + 18px);
  `};

  :not([aria-disabled]):hover,
  [aria-disabled='false']:hover {
    background-color: var(--charcoal-surface3-hover);
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

const StyledTextarea = styled.textarea<{ noBottomPadding: boolean }>`
  border: none;
  outline: none;
  resize: none;
  font-family: inherit;
  color: inherit;
  box-sizing: border-box;

  /* Prevent zooming for iOS Safari */
  transform-origin: top left;
  transform: scale(0.875);
  width: calc(100% / 0.875);
  font-size: calc(14px / 0.875);
  line-height: calc(22px / 0.875);
  padding: calc(9px / 0.875) calc(8px / 0.875)
    ${(p) => (p.noBottomPadding ? 0 : '')};

  ${({ rows = 1, noBottomPadding }) => css`
    height: calc(22px / 0.875 * ${rows} + ${noBottomPadding ? 9 : 20}px);
  `};

  /* Display box-shadow for iOS Safari */
  appearance: none;

  background: none;

  &::placeholder {
    color: var(--charcoal-text3);
  }
`

const MultiLineCounter = styled.span`
  position: absolute;
  bottom: 9px;
  right: 8px;

  line-height: 22px;
  font-size: 14px;
  color: var(--charcoal-text3);
`
