import React, { useCallback, useContext } from 'react'
import styled from 'styled-components'
import warning from 'warning'
import { theme } from '../../styled'
import { px } from '@charcoal-ui/utils'

export type RadioProps = React.PropsWithChildren<{
  value: string
  disabled?: boolean
}>

export default function Radio({
  value,
  disabled = false,
  children,
}: RadioProps) {
  const {
    name,
    selected,
    disabled: isParentDisabled,
    readonly,
    invalid,
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
        checked={isSelected}
        invalid={invalid}
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
  invalid?: boolean
}>`
  /** Make prior to browser default style */
  &[type='radio'] {
    appearance: none;
    display: block;
    box-sizing: border-box;

    margin: 0;
    padding: 6px;

    width: 20px;
    height: 20px;

    ${({ invalid = false }) =>
      theme((o) => [
        o.borderRadius('oval'),
        o.bg.surface1.hover.press,
        invalid && o.outline.assertive,
      ])};

    &:not(:checked) {
      border-width: 2px;
      border-style: solid;
      border-color: ${({ theme }) => theme.color.text3};
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

    /* FIXME: o.outline.default.focus の transition に o.bg.brand の transition が打ち消されてしまう */
    transition: all 0.2s !important;
  }
`

const RadioLabel = styled.div`
  ${theme((o) => [o.typography(14), o.font.text2])}
`

export type RadioGroupProps = React.PropsWithChildren<{
  className?: string
  value?: string
  label: string
  name: string
  onChange(next: string): void
  disabled?: boolean
  readonly?: boolean
  invalid?: boolean
}>

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
  invalid: boolean
  onChange: (next: string) => void
}

const RadioGroupContext = React.createContext<RadioGroupContext>({
  name: undefined as never,
  selected: undefined,
  disabled: false,
  readonly: false,
  invalid: false,
  onChange() {
    throw new Error(
      'Cannot find onChange() handler. Perhaps you forgot to wrap with <RadioGroup> ?'
    )
  },
})

export function RadioGroup({
  className,
  value,
  label,
  name,
  onChange,
  disabled,
  readonly,
  invalid,
  children,
}: RadioGroupProps) {
  const handleChange = useCallback(
    (next: string) => {
      onChange(next)
    },
    [onChange]
  )

  return (
    <RadioGroupContext.Provider
      value={{
        name,
        selected: value,
        disabled: disabled ?? false,
        readonly: readonly ?? false,
        invalid: invalid ?? false,
        onChange: handleChange,
      }}
    >
      <StyledRadioGroup
        role="radiogroup"
        aria-orientation="vertical"
        aria-label={label}
        aria-invalid={invalid}
        className={className}
      >
        {children}
      </StyledRadioGroup>
    </RadioGroupContext.Provider>
  )
}
