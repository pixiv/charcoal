import { useVisuallyHidden } from '@react-aria/visually-hidden'
import { forwardRef, useCallback, useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import FieldLabel from '../FieldLabel'
import { countCodePointsInString, mergeRefs } from '../../_lib'
import { AssistiveText } from '../TextField'
import { useFocusWithClick } from '../TextField/useFocusWithClick'
import { useId } from '@react-aria/utils'

export type TextAreaProps = {
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
  autoHeight?: boolean

  getCount?: (value: string) => number
} & Omit<React.ComponentPropsWithoutRef<'textarea'>, 'onChange'>

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  function TextAreaInner(
    {
      onChange,
      className,
      value,
      showCount = false,
      showLabel = false,
      label = '',
      requiredText,
      subLabel,
      disabled = false,
      required,
      assistiveText,
      maxLength,
      autoHeight = false,
      rows: initialRows = 4,
      getCount = countCodePointsInString,
      ...props
    },
    forwardRef
  ) {
    const { visuallyHiddenProps } = useVisuallyHidden()
    const textareaRef = useRef<HTMLTextAreaElement>(null)
    const textAreaRef = useRef<HTMLTextAreaElement>(null)
    const [count, setCount] = useState(getCount(value ?? ''))
    const [rows, setRows] = useState(initialRows)

    const syncHeight = useCallback(
      (textarea: HTMLTextAreaElement) => {
        const rows = (`${textarea.value}\n`.match(/\n/gu)?.length ?? 0) || 1
        setRows(initialRows <= rows ? rows : initialRows)
      },
      [initialRows]
    )

    const nonControlled = value === undefined
    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value
        const count = getCount(value)
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
      [autoHeight, getCount, maxLength, nonControlled, onChange, syncHeight]
    )

    useEffect(() => {
      setCount(getCount(value ?? ''))
    }, [getCount, value])

    useEffect(() => {
      if (autoHeight && textareaRef.current !== null) {
        syncHeight(textareaRef.current)
      }
    }, [autoHeight, syncHeight])

    const containerRef = useRef(null)

    useFocusWithClick(containerRef, textAreaRef)

    const textAreaId = useId(props.id)
    const describedbyId = useId()
    const labelledbyId = useId()

    const showAssistiveText =
      assistiveText != null && assistiveText.length !== 0

    return (
      <TextFieldRoot className={className} isDisabled={disabled}>
        <FieldLabel
          htmlFor={textAreaId}
          id={labelledbyId}
          label={label}
          required={required}
          requiredText={requiredText}
          subLabel={subLabel}
          {...(!showLabel ? visuallyHiddenProps : {})}
        />
        <StyledTextareaContainer
          aria-disabled={disabled === true ? 'true' : undefined}
          invalid={props.invalid === true}
          ref={containerRef}
          rows={showCount ? rows + 1 : rows}
        >
          <StyledTextarea
            aria-describedby={showAssistiveText ? describedbyId : undefined}
            aria-invalid={props.invalid}
            aria-labelledby={labelledbyId}
            id={textAreaId}
            maxLength={maxLength}
            noBottomPadding={showCount}
            onChange={handleChange}
            ref={mergeRefs(forwardRef, textAreaRef)}
            rows={rows}
            value={value}
            {...props}
          />
          {showCount && (
            <MultiLineCounter>
              {maxLength !== undefined ? `${count}/${maxLength}` : count}
            </MultiLineCounter>
          )}
        </StyledTextareaContainer>
        {showAssistiveText && (
          <AssistiveText invalid={props.invalid === true} id={describedbyId}>
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
