import './index.css'

import { useVisuallyHidden } from '@react-aria/visually-hidden'
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import * as React from 'react'
import FieldLabel from '../FieldLabel'
import { countCodePointsInString } from '../../_lib'
import { useFocusWithClick } from './useFocusWithClick'
import { mergeRefs, useId } from '@react-aria/utils'
import { AssistiveText } from './AssistiveText'
import { useClassNames } from '../../_lib/useClassNames'

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
  rdfaPrefix?: string

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
      invalid,
      value,
      getCount = countCodePointsInString,
      ...props
    },
    forwardRef,
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
      [getCount, maxLength, onChange],
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

    const classNames = useClassNames('charcoal-text-field-root', className)

    return (
      <div className={classNames} aria-disabled={disabled}>
        <FieldLabel
          htmlFor={inputId}
          id={labelledbyId}
          label={label}
          required={required}
          requiredText={requiredText}
          subLabel={subLabel}
          {...(!showLabel ? visuallyHiddenProps : {})}
        />
        <div
          className="charcoal-text-field-container"
          aria-disabled={disabled === true ? true : undefined}
          data-invalid={invalid === true}
          ref={containerRef}
        >
          {prefix && <div className="charcoal-text-field-prefix">{prefix}</div>}
          <input
            className="charcoal-text-field-input"
            aria-describedby={showAssistiveText ? describedbyId : undefined}
            aria-invalid={invalid}
            aria-labelledby={labelledbyId}
            id={inputId}
            data-invalid={invalid === true}
            maxLength={maxLength}
            onChange={handleChange}
            disabled={disabled}
            ref={mergeRefs(forwardRef, inputRef)}
            type={type}
            value={value}
            {...props}
          />
          {(suffix || showCount) && (
            <div className="charcoal-text-field-suffix">
              {suffix}
              {showCount && (
                <span className="charcoal-text-field-line-counter">
                  {maxLength !== undefined ? `${count}/${maxLength}` : count}
                </span>
              )}
            </div>
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

export default TextField
