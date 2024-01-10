import { memo, forwardRef, useCallback, useContext } from 'react'
import * as React from 'react'
import styled, { css } from 'styled-components'
import warning from 'warning'

export type RadioProps = React.PropsWithChildren<{
  value: string
  disabled?: boolean
  className?: string
}>

const Radio = forwardRef<HTMLInputElement, RadioProps>(function RadioInner(
  { value, disabled = false, children, className },
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
    <RadioRoot aria-disabled={isDisabled || isReadonly} className={className}>
      <RadioInput
        name={name}
        value={value}
        checked={isSelected}
        invalid={invalid}
        onChange={handleChange}
        disabled={isDisabled || isReadonly}
        ref={ref}
      />
      {children != null && <RadioLabel>{children}</RadioLabel>}
    </RadioRoot>
  )
})

export default memo(Radio)

const RadioRoot = styled.label`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 4px;
  align-items: center;
  cursor: pointer;

  &:disabled,
  &[aria-disabled]:not([aria-disabled='false']) {
    opacity: 0.32;
  }
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
    cursor: pointer;
    border-radius: 999999px;
    background-color: var(--charcoal-surface1);
    transition: 0.2s background-color, 0.2s box-shadow;

    &:not(:disabled):not([aria-disabled]),
    &[aria-disabled='false'] {
      ${({ invalid = false }) =>
        invalid &&
        css`
          box-shadow: 0 0 0 4px rgba(255, 43, 0, 0.32);
        `}

      &:hover {
        background-color: var(--charcoal-surface1-hover);
      }
      &:active {
        background-color: var(--charcoal-surface1-press);
      }
      &:focus,
      &:active,
      &:focus-visible {
        outline: none;
        box-shadow: 0 0 0 4px rgba(0, 150, 250, 0.32);
      }
    }

    &:not(:checked) {
      border-width: 2px;
      border-style: solid;
      border-color: var(--charcoal-text3);
    }

    &:checked {
      background-color: var(--charcoal-brand);
      &::after {
        content: '';
        display: block;
        width: 8px;
        height: 8px;
        pointer-events: none;
        background-color: var(--charcoal-text5);
        border-radius: 999999px;
        transition: 0.2s background-color, 0.2s box-shadow;
      }

      &:not(:disabled):not([aria-disabled]),
      &[aria-disabled='false'] {
        &:hover {
          background-color: var(--charcoal-brand-hover);
          &::after {
            background-color: var(--charcoal-text5-hover);
          }
        }
        &:active {
          background-color: var(--charcoal-brand-press);
          &::after {
            background-color: var(--charcoal-text5-press);
          }
        }
      }
    }
  }
`

const RadioLabel = styled.div`
  font-size: 14px;
  line-height: 22px;
  display: flow-root;
  color: var(--charcoal-text2);

  &::before {
    display: block;
    width: 0;
    height: 0;
    content: '';
    margin-top: -4px;
  }
  &::after {
    display: block;
    width: 0;
    height: 0;
    content: '';
    margin-bottom: -4px;
  }
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
  grid-gap: 8px;
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
