import React, { useCallback, useContext, useState } from 'react'
import styled from 'styled-components'
import warning from 'warning'
import { theme } from '../../styled'
import { px } from '@charcoal-ui/utils'

export type RadioProps = React.PropsWithChildren<{
  value: string
  forceChecked?: boolean
  disabled?: boolean
}>

export default function Radio({
  value,
  forceChecked = false,
  disabled = false,
  children,
}: RadioProps) {
  const {
    name,
    selected,
    disabled: isParentDisabled,
    readonly,
    hasError,
    onChange,
  } = useContext(RadioGroupContext)

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
    <RadioRoot aria-disabled={isDisabled || isReadonly}>
      <RadioInput
        name={name}
        value={value}
        checked={forceChecked || isSelected}
        hasError={hasError}
        onChange={handleChange}
        disabled={isDisabled || isReadonly}
      />
      {children != null && <RadioLabel>{children}</RadioLabel>}
    </RadioRoot>
  )
}

const RadioRoot = styled.label`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: ${({ theme }) => px(theme.spacing[4])};
  align-items: center;
  cursor: pointer;

  ${theme((o) => [o.disabled])}
`

export const RadioInput = styled.input.attrs({ type: 'radio' })<{
  hasError?: boolean
}>`
  /** Make prior to browser default style */
  &[type='radio'] {
    appearance: none;
    display: block;
    box-sizing: border-box;

    padding: 6px;

    width: 20px;
    height: 20px;

    ${({ hasError = false }) =>
      theme((o) => [
        o.borderRadius('oval'),
        o.bg.text5.hover.press,
        hasError && o.outline.assertive,
      ])};

    &:not(:checked) {
      border-width: 2px;
      border-style: solid;
      border-color: ${({ theme }) => theme.color.text4};
    }

    &:checked {
      ${theme((o) => o.bg.brand.hover.press)}

      &::after {
        content: '';
        display: block;
        width: 8px;
        height: 8px;
        pointer-events: none;

        ${theme((o) => [o.bg.text5.hover.press, o.borderRadius('oval')])}
      }
    }

    ${theme((o) => o.outline.default.focus)}
  }
`

const RadioLabel = styled.div`
  ${theme((o) => [o.typography(14)])}
`

export type RadioGroupBaseProps = React.PropsWithChildren<{
  className?: string
  label: string
  name: string
  onChange(next: string): void
  disabled?: boolean
  readonly?: boolean
  hasError?: boolean
}>

export interface ControlledRadioGroupProps extends RadioGroupBaseProps {
  value?: string
  defaultValue?: never
}

export interface UncontrolledRadioGroupProps extends RadioGroupBaseProps {
  value?: never
  defaultValue?: string
}

export type RadioGroupProps =
  | ControlledRadioGroupProps
  | UncontrolledRadioGroupProps

// TODO: use (or polyfill) flex gap
const StyledRadioGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${({ theme }) => px(theme.spacing[8])};
`

interface RadioGroupContext {
  name: string
  selected?: string
  disabled: boolean
  readonly: boolean
  hasError: boolean
  onChange: (next: string) => void
}

const RadioGroupContext = React.createContext<RadioGroupContext>({
  name: undefined as never,
  selected: undefined,
  disabled: false,
  readonly: false,
  hasError: false,
  onChange() {
    throw new Error(
      'Cannot find onChange() handler. Perhaps you forgot to wrap with <RadioGroup> ?'
    )
  },
})

export function RadioGroup({
  className,
  label,
  name,
  onChange,
  disabled,
  readonly,
  hasError,
  children,
  value,
  defaultValue,
}: RadioGroupProps) {
  const [selected, setSelected] = useState(defaultValue)

  const handleChange = useCallback(
    (next: string) => {
      setSelected(next)
      onChange(next)
    },
    [onChange]
  )

  return (
    <RadioGroupContext.Provider
      value={{
        name,
        selected: value ?? selected,
        disabled: disabled ?? false,
        readonly: readonly ?? false,
        hasError: hasError ?? false,
        onChange: handleChange,
      }}
    >
      <StyledRadioGroup
        role="radiogroup"
        aria-orientation="vertical"
        aria-label={label}
        aria-invalid={hasError}
        className={className}
      >
        {children}
      </StyledRadioGroup>
    </RadioGroupContext.Provider>
  )
}
