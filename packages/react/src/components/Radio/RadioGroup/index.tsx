import './index.css'

import { forwardRef, useCallback, useMemo } from 'react'
import * as React from 'react'
import { useClassNames } from '../../../_lib/useClassNames'
import { RadioGroupContext } from '../RadioGroupContext'

export type RadioGroupProps<Value extends string = string> =
  React.PropsWithChildren<{
    className?: string
    value?: Value
    /**
     * aria-label of RadioGroup
     */
    label?: string
    name: string
    onChange(next: Value): void
    disabled?: boolean
    readonly?: boolean
    invalid?: boolean
    ref?: React.Ref<HTMLDivElement>
    'aria-labelledby'?: React.ComponentProps<'div'>['aria-labelledby']
    'aria-orientation'?: React.ComponentProps<'div'>['aria-orientation']
  }>

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps<string>>(
  function RadioGroupInner(
    {
      value,
      label,
      name,
      onChange,
      disabled,
      readonly,
      invalid,
      children,
      ...props
    },
    ref
  ) {
    const classNames = useClassNames('charcoal-radio-group', props.className)

    const handleChange = useCallback(
      (next: string) => {
        onChange(next)
      },
      [onChange]
    )

    const contextValue = useMemo(
      () => ({
        name,
        selected: value,
        disabled: disabled ?? false,
        readonly: readonly ?? false,
        invalid: invalid ?? false,
        onChange: handleChange,
      }),
      [disabled, handleChange, invalid, name, readonly, value]
    )

    return (
      <RadioGroupContext.Provider value={contextValue}>
        <div
          role="radiogroup"
          aria-disabled={disabled}
          aria-invalid={invalid}
          aria-label={label}
          aria-labelledby={props['aria-labelledby']}
          aria-orientation={props['aria-orientation']}
          className={classNames}
          ref={ref}
        >
          {children}
        </div>
      </RadioGroupContext.Provider>
    )
  }
) as <Value extends string>(props: RadioGroupProps<Value>) => JSX.Element
