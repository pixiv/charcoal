import { useVisuallyHidden } from '@react-aria/visually-hidden'
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import * as React from 'react'
import styled, { css } from 'styled-components'
import FieldLabel from '../FieldLabel'
import { countCodePointsInString } from '../../_lib'
import { useFocusWithClick } from './useFocusWithClick'
import { mergeRefs, useId } from '@react-aria/utils'

export type TextFieldProps = {
  prefix?: ReactNode
  suffix?: ReactNode

  value?: string
  onChange?: (value: string) => void

  showCount?: boolean
  showLabel?: boolean
  assistiveText?: string
  invalid?: boolean

  label?: string
  requiredText?: string
  disabled?: boolean
  subLabel?: React.ReactNode
  htmlPrefix?: string

  getCount?: (value: string) => number
} & Omit<React.ComponentPropsWithoutRef<'input'>, 'prefix' | 'onChange'>

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  function SingleLineTextFieldInner(
    {
      assistiveText,
      className,
      disabled = false,
      label = '',
      maxLength,
      onChange,
      prefix = null,
      required,
      requiredText,
      showCount = false,
      showLabel = false,
      subLabel,
      suffix = null,
      type = 'text',
      value,
      getCount = countCodePointsInString,
      ...props
    },
    forwardRef
  ) {
    const inputRef = useRef<HTMLInputElement>(null)

    const { visuallyHiddenProps } = useVisuallyHidden()

    const [count, setCount] = useState(getCount(value ?? ''))

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        const count = getCount(value)
        if (maxLength !== undefined && count > maxLength) {
          return
        }
        setCount(count)
        onChange?.(value)
      },
      [getCount, maxLength, onChange]
    )

    useEffect(() => {
      setCount(getCount(value ?? ''))
    }, [getCount, value])

    const containerRef = useRef(null)

    useFocusWithClick(containerRef, inputRef)

    const inputId = useId(props.id)
    const describedbyId = useId()
    const labelledbyId = useId()

    const showAssistiveText =
      assistiveText != null && assistiveText.length !== 0

    return (
      <TextFieldRoot className={className} isDisabled={disabled}>
        <TextFieldLabel
          htmlFor={inputId}
          id={labelledbyId}
          label={label}
          required={required}
          requiredText={requiredText}
          subLabel={subLabel}
          {...(!showLabel ? visuallyHiddenProps : {})}
        />
        <StyledInputContainer
          aria-disabled={disabled === true ? true : undefined}
          hasPrefix={prefix != null}
          hasSuffix={suffix != null || showCount}
          invalid={props.invalid === true}
          ref={containerRef}
        >
          {prefix && <PrefixContainer>{prefix}</PrefixContainer>}
          <StyledInput
            aria-describedby={showAssistiveText ? describedbyId : undefined}
            aria-invalid={props.invalid}
            aria-labelledby={labelledbyId}
            id={inputId}
            invalid={props.invalid === true}
            maxLength={maxLength}
            onChange={handleChange}
            prefix={props.htmlPrefix}
            ref={mergeRefs(forwardRef, inputRef)}
            type={type}
            value={value}
            {...props}
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
        {showAssistiveText && (
          <AssistiveText invalid={props.invalid === true} id={describedbyId}>
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

export const TextFieldLabel = styled(FieldLabel)`
  margin-bottom: 8px;
`

const StyledInputContainer = styled.div<{
  invalid: boolean
  hasPrefix: boolean
  hasSuffix: boolean
}>`
  display: grid;
  grid-template-columns: ${(p) =>
    [p.hasPrefix && 'auto', '1fr', p.hasSuffix && 'auto']
      .filter(Boolean)
      .join(' ')};
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

export const AssistiveText = styled.p<{ invalid: boolean }>`
  font-size: 14px;
  line-height: 22px;
  margin-top: 4px;
  margin-bottom: -4px;
  color: ${(p) => `var(--charcoal-${p.invalid ? `assertive` : `text2`})`};
`
