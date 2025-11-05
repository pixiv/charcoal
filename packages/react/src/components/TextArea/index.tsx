import './index.css'

import { useVisuallyHidden } from '@react-aria/visually-hidden'
import { forwardRef, useCallback, useEffect, useRef, useState } from 'react'
import FieldLabel from '../FieldLabel'
import { countCodePointsInString, mergeRefs } from '../../_lib'
import { useFocusWithClick } from '../TextField/useFocusWithClick'
import { useId } from '@react-aria/utils'
import { AssistiveText } from '../TextField/AssistiveText'
import { useClassNames } from '../../_lib/useClassNames'

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
      invalid,
      getCount = countCodePointsInString,
      ...props
    },
    forwardRef,
  ) {
    const { visuallyHiddenProps } = useVisuallyHidden()
    const textareaRef = useRef<HTMLTextAreaElement>(null)
    const [count, setCount] = useState(getCount(value ?? ''))
    const [rows, setRows] = useState(initialRows)

    const syncHeight = useCallback(
      (textarea: HTMLTextAreaElement) => {
        const rows = (`${textarea.value}\n`.match(/\n/gu)?.length ?? 0) || 1
        setRows(initialRows <= rows ? rows : initialRows)
      },
      [initialRows],
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
      [autoHeight, getCount, maxLength, nonControlled, onChange, syncHeight],
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

    useFocusWithClick(containerRef, textareaRef)

    const textAreaId = useId(props.id)
    const describedbyId = useId()
    const labelledbyId = useId()

    const classNames = useClassNames('charcoal-text-area-root', className)

    const showAssistiveText =
      assistiveText != null && assistiveText.length !== 0

    return (
      <div className={classNames} aria-disabled={disabled}>
        <FieldLabel
          htmlFor={textAreaId}
          id={labelledbyId}
          label={label}
          required={required}
          requiredText={requiredText}
          subLabel={subLabel}
          {...(!showLabel ? visuallyHiddenProps : {})}
        />
        <div
          className="charcoal-text-area-container"
          aria-disabled={disabled === true ? 'true' : undefined}
          aria-invalid={invalid === true}
          ref={containerRef}
          style={{
            '--charcoal-text-area-rows': `${showCount ? rows + 1 : rows}`,
          }}
        >
          <textarea
            className="charcoal-text-area-textarea"
            aria-describedby={showAssistiveText ? describedbyId : undefined}
            aria-invalid={invalid}
            aria-labelledby={labelledbyId}
            id={textAreaId}
            maxLength={maxLength}
            data-no-bottom-padding={showCount}
            onChange={handleChange}
            ref={mergeRefs(forwardRef, textareaRef)}
            rows={rows}
            value={value}
            disabled={disabled}
            {...props}
          />
          {showCount && (
            <span className="charcoal-text-area-counter">
              {maxLength !== undefined ? `${count}/${maxLength}` : count}
            </span>
          )}
        </div>
        {showAssistiveText && (
          <AssistiveText data-invalid={invalid === true} id={describedbyId}>
            {assistiveText}
          </AssistiveText>
        )}
      </div>
    )
  },
)

export default TextArea
