import { useCallback, useContext } from 'react'
import * as React from 'react'
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

    margin: 0;
    padding: 6px;

    width: 20px;
    height: 20px;

    cursor: pointer;

    ${({ hasError = false }) =>
      theme((o) => [
        o.borderRadius('oval'),
        o.bg.surface1.hover.press,
        hasError && o.outline.assertive,
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
  hasError?: boolean
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
  value,
  label,
  name,
  onChange,
  disabled,
  readonly,
  hasError,
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
