import { ChangeEvent, useCallback, useContext, forwardRef, memo } from 'react'
import * as React from 'react'
import warning from 'warning'

import { MultiSelectGroupContext } from './context'
import Icon from '../Icon'
import { useClassNames } from '../../_lib/useClassNames'
import './index.css'

export type MultiSelectProps = React.PropsWithChildren<{
  value: string
  disabled?: boolean
  variant?: 'default' | 'overlay'
  className?: string
  onChange?: (payload: { value: string; selected: boolean }) => void
}>

const MultiSelect = forwardRef<HTMLInputElement, MultiSelectProps>(
  function MultiSelectInner(
    {
      value,
      disabled = false,
      onChange,
      variant = 'default',
      className,
      children,
    },
    ref,
  ) {
    const {
      name,
      selected,
      disabled: parentDisabled,
      readonly,
      invalid,
      onChange: parentOnChange,
    } = useContext(MultiSelectGroupContext)

    warning(
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      name !== undefined,
      `"name" is not Provided for <MultiSelect>. Perhaps you forgot to wrap with <MultiSelectGroup> ?`,
    )

    const isSelected = selected.includes(value)
    const isDisabled = disabled || parentDisabled || readonly

    const handleChange = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        if (!(event.currentTarget instanceof HTMLInputElement)) {
          return
        }
        if (onChange) onChange({ value, selected: event.currentTarget.checked })
        parentOnChange({ value, selected: event.currentTarget.checked })
      },
      [onChange, parentOnChange, value],
    )
    const classNames = useClassNames('charcoal-multi-select', className)
    return (
      <label aria-disabled={isDisabled} className={classNames}>
        <input
          className="charcoal-multi-select-input"
          name={name}
          value={value}
          type="checkbox"
          checked={isSelected}
          disabled={isDisabled}
          onChange={handleChange}
          data-overlay={variant === 'overlay'}
          aria-invalid={invalid}
          ref={ref}
        />
        <div
          className="charcoal-multi-select-overlay"
          data-overlay={variant === 'overlay'}
          aria-invalid={invalid}
          aria-hidden
        >
          <Icon name="24/Check" unsafe-non-guideline-scale={16 / 24} />
        </div>
        {Boolean(children) && (
          <div className="charcoal-multi-select-label">{children}</div>
        )}
      </label>
    )
  },
)

export default memo(MultiSelect)

export type MultiSelectGroupProps = React.PropsWithChildren<{
  className?: string
  style?: React.CSSProperties
  name: string
  label: string
  selected: string[]
  onChange: (selected: string[]) => void
  disabled?: boolean
  readonly?: boolean
  invalid?: boolean
}>

export function MultiSelectGroup({
  className,
  style,
  name,
  label,
  selected,
  onChange,
  disabled = false,
  readonly = false,
  invalid = false,
  children,
}: MultiSelectGroupProps) {
  const handleChange = useCallback(
    (payload: { value: string; selected: boolean }) => {
      const index = selected.indexOf(payload.value)

      if (payload.selected) {
        if (index < 0) {
          onChange([...selected, payload.value])
        }
      } else {
        if (index >= 0) {
          onChange([...selected.slice(0, index), ...selected.slice(index + 1)])
        }
      }
    },
    [onChange, selected],
  )

  return (
    <MultiSelectGroupContext.Provider
      value={{
        name,
        selected: Array.from(new Set(selected)),
        disabled,
        readonly,
        invalid,
        onChange: handleChange,
      }}
    >
      <div
        className={className}
        style={style}
        aria-label={label}
        data-testid="SelectGroup"
      >
        {children}
      </div>
    </MultiSelectGroupContext.Provider>
  )
}
