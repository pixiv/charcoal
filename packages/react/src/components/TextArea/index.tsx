import { useTextField } from '@react-aria/textfield'
import { useVisuallyHidden } from '@react-aria/visually-hidden'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import FieldLabel, { FieldLabelProps } from '../FieldLabel'
import { createTheme } from '@charcoal-ui/styled'
import { countCodePointsInString, mergeRefs } from '../../_lib'

const theme = createTheme(styled)

export interface TextAreaProps
  extends Pick<FieldLabelProps, 'label' | 'requiredText' | 'subLabel'> {
  readonly autoHeight?: boolean
  readonly rows?: number
  readonly className?: string
  readonly defaultValue?: string
  readonly value?: string
  readonly onChange?: (value: string) => void
  readonly onKeyDown?: (event: React.KeyboardEvent<Element>) => void
  readonly onFocus?: (event: React.FocusEvent<Element>) => void
  readonly onBlur?: (event: React.FocusEvent<Element>) => void
  readonly showCount?: boolean
  readonly showLabel?: boolean
  readonly placeholder?: string
  readonly assistiveText?: string
  readonly disabled?: boolean
  readonly required?: boolean
  readonly invalid?: boolean
  readonly maxLength?: number
  readonly autoFocus?: boolean
  /**
   * tab-indexがｰ1かどうか
   */
  readonly excludeFromTabOrder?: boolean
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
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
      assistiveText,
      maxLength,
      autoHeight = false,
      rows: initialRows = 4,
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
          {...(!showLabel ? visuallyHiddenProps : {})}
        />
        <StyledTextareaContainer
          invalid={invalid}
          rows={showCount ? rows + 1 : rows}
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
  display: flex;
  flex-direction: column;

  ${(p) => p.isDisabled && { opacity: p.theme.elementEffect.disabled.opacity }}
`

const TextFieldLabel = styled(FieldLabel)`
  ${theme((o) => o.margin.bottom(8))}
`

const StyledTextareaContainer = styled.div<{ rows: number; invalid: boolean }>`
  position: relative;
  overflow: hidden;
  padding: 0 8px;

  ${(p) =>
    theme((o) => [
      o.bg.surface3.hover,
      p.invalid && o.outline.assertive,
      o.font.text2,
      o.borderRadius(4),
    ])}

  &:focus-within {
    ${(p) =>
      theme((o) => (p.invalid ? o.outline.assertive : o.outline.default))}
  }

  ${({ rows }) => css`
    height: calc(22px * ${rows} + 18px);
  `};
`

const StyledTextarea = styled.textarea<{ noBottomPadding: boolean }>`
  border: none;
  outline: none;
  resize: none;
  font-family: inherit;
  color: inherit;

  /* Prevent zooming for iOS Safari */
  transform-origin: top left;
  transform: scale(0.875);
  width: calc(100% / 0.875);
  font-size: calc(14px / 0.875);
  line-height: calc(22px / 0.875);
  padding: calc(9px / 0.875) 0 ${(p) => (p.noBottomPadding ? 0 : '')};

  ${({ rows = 1 }) => css`
    height: calc(22px / 0.875 * ${rows});
  `};

  /* Display box-shadow for iOS Safari */
  appearance: none;

  background: none;

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
