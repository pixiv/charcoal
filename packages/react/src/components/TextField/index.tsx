import { useTextField } from '@react-aria/textfield'
import { useVisuallyHidden } from '@react-aria/visually-hidden'
import React, {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import styled from 'styled-components'
import FieldLabel, { FieldLabelProps } from '../FieldLabel'
import { createTheme } from '@charcoal-ui/styled'
import { countCodePointsInString, mergeRefs } from '../../_lib'

const theme = createTheme(styled)

export interface TextFieldProps
  extends Pick<FieldLabelProps, 'label' | 'requiredText' | 'subLabel'> {
  readonly type?: string
  readonly prefix?: ReactNode
  readonly suffix?: ReactNode
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
    const prefixRef = useRef<HTMLSpanElement>(null)
    const suffixRef = useRef<HTMLSpanElement>(null)
    const [count, setCount] = useState(
      countCodePointsInString(props.value ?? '')
    )
    const [prefixWidth, setPrefixWidth] = useState(0)
    const [suffixWidth, setSuffixWidth] = useState(0)

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

    useEffect(() => {
      const prefixObserver = new ResizeObserver((entries) => {
        setPrefixWidth(entries[0].contentRect.width)
      })
      const suffixObserver = new ResizeObserver((entries) => {
        setSuffixWidth(entries[0].contentRect.width)
      })

      if (prefixRef.current !== null) {
        prefixObserver.observe(prefixRef.current)
      }
      if (suffixRef.current !== null) {
        suffixObserver.observe(suffixRef.current)
      }

      return () => {
        suffixObserver.disconnect()
        prefixObserver.disconnect()
      }
    }, [])

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
          <PrefixContainer ref={prefixRef}>
            <Affix>{prefix}</Affix>
          </PrefixContainer>
          <StyledInput
            ref={mergeRefs(forwardRef, ariaRef)}
            invalid={invalid}
            extraLeftPadding={prefixWidth}
            extraRightPadding={suffixWidth}
            {...inputProps}
          />
          <SuffixContainer ref={suffixRef}>
            <Affix>{suffix}</Affix>
            {showCount && (
              <SingleLineCounter>
                {maxLength !== undefined ? `${count}/${maxLength}` : count}
              </SingleLineCounter>
            )}
          </SuffixContainer>
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
  ${theme((o) => o.margin.bottom(8))}
`

const StyledInputContainer = styled.div`
  height: 40px;
  display: grid;
  position: relative;
`

const PrefixContainer = styled.span`
  position: absolute;
  top: 50%;
  left: 8px;
  transform: translateY(-50%);
  z-index: 1;
`

const SuffixContainer = styled.span`
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);

  display: flex;
  gap: 8px;
`

const Affix = styled.span`
  user-select: none;

  ${theme((o) => [o.typography(14).preserveHalfLeading, o.font.text2])}
`

const StyledInput = styled.input<{
  invalid: boolean
  extraLeftPadding: number
  extraRightPadding: number
}>`
  border: none;
  box-sizing: border-box;
  outline: none;
  font-family: inherit;

  /* Prevent zooming for iOS Safari */
  transform-origin: top left;
  transform: scale(0.875);
  width: calc(100% / 0.875);
  height: calc(100% / 0.875);
  font-size: calc(14px / 0.875);
  line-height: calc(22px / 0.875);
  padding-left: calc((8px + ${(p) => p.extraLeftPadding}px) / 0.875);
  padding-right: calc((8px + ${(p) => p.extraRightPadding}px) / 0.875);
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

const SingleLineCounter = styled.span`
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
