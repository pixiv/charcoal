import { useTextField } from '@react-aria/textfield'
import { useVisuallyHidden } from '@react-aria/visually-hidden'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import FieldLabel, { FieldLabelProps } from '../FieldLabel'
import createTheme from '@pixiv-elements/styled'

const theme = createTheme(styled)

interface TextFieldBaseProps
  extends Pick<FieldLabelProps, 'label' | 'requiredText' | 'subLabel'> {
  readonly className?: string
  readonly defaultValue?: string
  readonly value?: string
  readonly onChange?: (value: string) => void
  readonly showCount?: boolean
  readonly showLabel?: boolean
  readonly placeholder?: string
  readonly assistiveText?: string
  readonly disabled?: boolean
  readonly required?: boolean
  readonly invalid?: boolean
  readonly maxLength?: number
  /**
   * tab-indexがｰ1かどうか
   */
  readonly excludeFromTabOrder?: boolean
}

export interface SingleLineTextFieldProps extends TextFieldBaseProps {
  readonly autoHeight?: never
  readonly multiline?: false
  readonly rows?: never
  readonly type?: string
}

export interface MultiLineTextFieldProps extends TextFieldBaseProps {
  readonly autoHeight?: boolean
  readonly multiline: true
  readonly rows?: number
  readonly type?: never
}

export type TextFieldProps = SingleLineTextFieldProps | MultiLineTextFieldProps
type TextFieldElement = HTMLInputElement & HTMLTextAreaElement

function mergeRefs<T>(...refs: React.Ref<T>[]): React.RefCallback<T> {
  return (value) => {
    for (const ref of refs) {
      if (typeof ref === 'function') {
        ref(value)
      } else if (ref !== null) {
        ;(ref as React.MutableRefObject<T | null>).current = value
      }
    }
  }
}

function countStringInCodePoints(string: string) {
  return [...string].length
}

const TextField = React.forwardRef<TextFieldElement, TextFieldProps>(
  function TextField(props, ref) {
    return props.multiline !== undefined && props.multiline ? (
      <MultiLineTextField ref={ref} {...props} />
    ) : (
      <SingleLineTextField ref={ref} {...props} />
    )
  }
)

export default TextField

const SingleLineTextField = React.forwardRef<
  HTMLInputElement,
  SingleLineTextFieldProps
>(function SingleLineTextFieldInner({ onChange, ...props }, forwardRef) {
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
  } = props

  const { visuallyHiddenProps } = useVisuallyHidden()
  const ariaRef = useRef<HTMLInputElement>(null)
  const [count, setCount] = useState(countStringInCodePoints(props.value ?? ''))

  const handleChange = useCallback(
    (value: string) => {
      const count = countStringInCodePoints(value)
      if (maxLength !== undefined && count > maxLength) {
        return
      }
      setCount(count)
      onChange?.(value)
    },
    [maxLength, onChange]
  )

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
      <StyledInputContainer>
        <StyledInput
          ref={mergeRefs(forwardRef, ariaRef)}
          invalid={invalid}
          {...inputProps}
        />
        {showCount && maxLength && (
          <SingleLineCounter>
            {count}/{maxLength}
          </SingleLineCounter>
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
})

const MultiLineTextField = React.forwardRef<
  HTMLTextAreaElement,
  MultiLineTextFieldProps
>(function MultiLineTextFieldInner({ onChange, ...props }, forwardRef) {
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
    assistiveText,
    maxLength,
    autoHeight = false,
    rows: initialRows = 4,
  } = props

  const { visuallyHiddenProps } = useVisuallyHidden()
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const ariaRef = useRef<HTMLTextAreaElement>(null)
  const [count, setCount] = useState(countStringInCodePoints(props.value ?? ''))
  const [rows, setRows] = useState(initialRows)

  const syncHeight = useCallback(
    (textarea: HTMLTextAreaElement) => {
      const rows = `${textarea.value}\n`.match(/\n/gu)?.length ?? 1
      if (initialRows <= rows) {
        setRows(rows)
      }
    },
    [initialRows]
  )

  const handleChange = useCallback(
    (value: string) => {
      const count = countStringInCodePoints(value)
      if (maxLength !== undefined && count > maxLength) {
        return
      }
      setCount(count)
      if (autoHeight && textareaRef.current !== null) {
        syncHeight(textareaRef.current)
      }
      onChange?.(value)
    },
    [autoHeight, maxLength, onChange, syncHeight]
  )

  const { inputProps, labelProps, descriptionProps, errorMessageProps } =
    useTextField(
      {
        inputElementType: 'textarea',
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

  useEffect(() => {
    if (autoHeight && textareaRef.current !== null) {
      syncHeight(textareaRef.current)
    }
  }, [autoHeight, syncHeight])

  return (
    <TextFieldRoot className={className} isDisabled={disabled}>
      <TextFieldLabel
        label={label}
        requiredText={requiredText}
        required={required}
        subLabel={subLabel}
        {...labelProps}
        {...(showLabel ? visuallyHiddenProps : {})}
      />
      <StyledTextareaContainer rows={rows}>
        <StyledTextarea
          ref={mergeRefs(textareaRef, forwardRef, ariaRef)}
          invalid={invalid}
          rows={rows}
          {...inputProps}
        />
        {showCount && <MultiLineCounter>{count}</MultiLineCounter>}
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
})

const TextFieldRoot = styled.div<{ isDisabled: boolean }>`
  display: flex;
  flex-direction: column;

  ${(p) => p.isDisabled && { opacity: p.theme.elementEffect.disabled.opacity }}
`

const TextFieldLabel = styled(FieldLabel)`
  ${theme((o) => o.margin.bottom(8))}
`

const StyledInputContainer = styled.div`
  height: 40px;
  display: grid;
  position: relative;
`

const StyledInput = styled.input<{ invalid: boolean }>`
  border: none;
  box-sizing: border-box;
  outline: none;

  /* Prevent zooming for iOS Safari */
  transform-origin: top left;
  transform: scale(0.875);
  width: calc(100% / 0.875);
  height: calc(40px / 0.875);
  font-size: calc(14px / 0.875);
  line-height: calc(22px / 0.875);
  padding: calc(9px / 0.875) calc(8px / 0.875);
  border-radius: calc(4px / 0.875);

  /* Display box-shadow for iOS Safari */
  appearance: none;

  ${(p) =>
    theme((o) => [
      o.bg.surface3.hover,
      o.outline.default.focus,
      p.invalid && o.outline.assertive,
      o.font.text2,
    ])}

  &::placeholder {
    ${theme((o) => o.font.text3)}
  }
`

const StyledTextareaContainer = styled.div<{ rows: number }>`
  display: grid;
  position: relative;

  ${({ rows }) => css`
    max-height: calc(22px * ${rows} + 18px);
  `};
`

const StyledTextarea = styled.textarea<{ invalid: boolean }>`
  border: none;
  box-sizing: border-box;
  outline: none;
  resize: none;

  /* Prevent zooming for iOS Safari */
  transform-origin: top left;
  transform: scale(0.875);
  width: calc(100% / 0.875);
  font-size: calc(14px / 0.875);
  line-height: calc(22px / 0.875);
  padding: calc(9px / 0.875) calc(8px / 0.875);
  border-radius: calc(4px / 0.875);

  ${({ rows }) => css`
    height: calc(22px / 0.875 * ${rows} + 18px / 0.875);
  `};

  /* Display box-shadow for iOS Safari */
  appearance: none;

  ${(p) =>
    theme((o) => [
      o.bg.surface3.hover,
      o.outline.default.focus,
      p.invalid && o.outline.assertive,
      o.font.text2,
    ])}

  &::placeholder {
    ${theme((o) => o.font.text3)}
  }

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`

const SingleLineCounter = styled.span`
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);

  ${theme((o) => [o.typography(14).preserveHalfLeading, o.font.text3])}
`

const MultiLineCounter = styled.span`
  position: absolute;
  bottom: 9px;
  right: 8px;

  ${theme((o) => [o.typography(14).preserveHalfLeading, o.font.text3])}
`

const AssistiveText = styled.p<{ invalid: boolean }>`
  ${(p) =>
    theme((o) => [
      o.typography(14),
      o.margin.top(8),
      o.margin.bottom(0),
      o.font[p.invalid ? 'assertive' : 'text1'],
    ])}
`
