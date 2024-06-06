import { memo, forwardRef, useCallback, useContext, useMemo } from 'react'
import * as React from 'react'
import warning from 'warning'
import { useClassNames } from '../../_lib/useClassNames'

import './index.css'

export type RadioProps = React.PropsWithChildren<{
  value: string
  disabled?: boolean
  className?: string
}>

const Radio = forwardRef<HTMLInputElement, RadioProps>(function RadioInner(
  { value, disabled = false, children, ...props },
  ref
) {
  const {
    name,
    selected,
    disabled: isParentDisabled,
    readonly,
    invalid,
    onChange,
  } = useContext(RadioGroupContext)

  const classNames = useClassNames('charcoal-radio__label', props.className)

  warning(
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    name !== undefined,
    `"name" is not Provided for <Radio>. Perhaps you forgot to wrap with <RadioGroup> ?`
  )

  const isSelected = value === selected
  const isDisabled = disabled || isParentDisabled
  const isReadonly = readonly && !isSelected

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.currentTarget.value)
    },
    [onChange]
  )

  return (
    <label aria-disabled={isDisabled || isReadonly} className={classNames}>
      <input
        type="radio"
        className="charcoal-radio__input"
        name={name}
        value={value}
        checked={isSelected}
        aria-invalid={invalid}
        onChange={handleChange}
        disabled={isDisabled || isReadonly}
        ref={ref}
      />
      {children != null && (
        <div className="charcoal-radio__label_div">{children}</div>
      )}
    </label>
  )
})

export default memo(Radio)

export type RadioGroupProps<Value extends string = string> =
  React.PropsWithChildren<{
    className?: string
    value?: Value
    /**
     * aria-label of RadioGroup
     */
    label: string
    name: string
    onChange(next: Value): void
    disabled?: boolean
    readonly?: boolean
    invalid?: boolean
    ref?: React.Ref<HTMLDivElement>
  }>

interface RadioGroupContext {
  name: string
  label: string
  selected?: string
  disabled: boolean
  readonly: boolean
  invalid: boolean
  onChange: (next: string) => void
}

const RadioGroupContext = React.createContext<RadioGroupContext>({
  name: undefined as never,
  selected: undefined,
  disabled: false,
  readonly: false,
  invalid: false,
  label: '',
  onChange() {
    throw new Error(
      'Cannot find onChange() handler. Perhaps you forgot to wrap with <RadioGroup> ?'
    )
  },
})

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
        label,
        selected: value,
        disabled: disabled ?? false,
        readonly: readonly ?? false,
        invalid: invalid ?? false,
        onChange: handleChange,
      }),
      [disabled, handleChange, invalid, label, name, readonly, value]
    )

    return (
      <RadioGroupContext.Provider value={contextValue}>
        <div
          role="radiogroup"
          aria-invalid={invalid}
          aria-disabled={disabled}
          aria-label={label}
          className={classNames}
          ref={ref}
        >
          {children}
        </div>
      </RadioGroupContext.Provider>
    )
  }
) as <Value extends string>(props: RadioGroupProps<Value>) => JSX.Element
