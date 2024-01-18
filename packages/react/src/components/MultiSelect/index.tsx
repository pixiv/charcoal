import { ChangeEvent, useCallback, useContext, forwardRef, memo } from 'react'
import * as React from 'react'
import styled, { css } from 'styled-components'
import warning from 'warning'
import { px } from '@charcoal-ui/utils'

import { MultiSelectGroupContext } from './context'

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
    ref
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
      `"name" is not Provided for <MultiSelect>. Perhaps you forgot to wrap with <MultiSelectGroup> ?`
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
      [onChange, parentOnChange, value]
    )

    return (
      <MultiSelectRoot aria-disabled={isDisabled} className={className}>
        <MultiSelectInput
          {...{
            name,
            value,
            invalid,
          }}
          checked={isSelected}
          disabled={isDisabled}
          onChange={handleChange}
          overlay={variant === 'overlay'}
          aria-invalid={invalid}
          ref={ref}
        />
        <MultiSelectInputOverlay
          overlay={variant === 'overlay'}
          invalid={invalid}
          aria-hidden={true}
        >
          <pixiv-icon name="24/Check" unsafe-non-guideline-scale={16 / 24} />
        </MultiSelectInputOverlay>
        {Boolean(children) && <MultiSelectLabel>{children}</MultiSelectLabel>}
      </MultiSelectRoot>
    )
  }
)

export default memo(MultiSelect)

const MultiSelectRoot = styled.label`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  position: relative;
  cursor: pointer;
  gap: ${({ theme }) => px(theme.spacing[4])};
  &:disabled,
  &[aria-disabled]:not([aria-disabled='false']) {
    opacity: 0.32;
    cursor: default;
  }
`

const MultiSelectLabel = styled.div`
  display: flex;
  align-items: center;
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

const MultiSelectInput = styled.input.attrs({ type: 'checkbox' })<{
  invalid: boolean
  overlay: boolean
}>`
  &[type='checkbox'] {
    appearance: none;
    display: block;
    width: 20px;
    height: 20px;
    margin: 0;
    background-color: var(--charcoal-text3);
    border-radius: 999999px;
    transition: 0.2s background-color, 0.2s box-shadow;

    &:checked {
      background-color: var(--charcoal-brand);
      &:hover {
        &:not(:disabled):not([aria-disabled]),
        &[aria-disabled='false'] {
          background-color: var(--charcoal-brand-hover);
        }
      }

      &:active {
        &:not(:disabled):not([aria-disabled]),
        &[aria-disabled='false'] {
          background-color: var(--charcoal-brand-press);
        }
      }
    }

    &:hover {
      &:not(:disabled):not([aria-disabled]),
      &[aria-disabled='false'] {
        background-color: var(--charcoal-text3-hover);
      }
    }

    &:active {
      &:not(:disabled):not([aria-disabled]),
      &[aria-disabled='false'] {
        background-color: var(--charcoal-text3-press);
      }
    }

    ${({ invalid, overlay }) =>
      invalid &&
      !overlay &&
      css`
        &:not(:disabled):not([aria-disabled]),
        &[aria-disabled='false'] {
          box-shadow: 0 0 0 4px rgba(255, 43, 0, 0.32);
        }
      `}
    ${({ overlay }) =>
      overlay &&
      css`
        background-color: var(--charcoal-surface4);
      `}
  }
`

const MultiSelectInputOverlay = styled.div<{
  overlay: boolean
  invalid: boolean
}>`
  position: absolute;
  top: -2px;
  left: -2px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 999999px;
  color: var(--charcoal-text5);
  transition: 0.2s box-shadow;
  ${({ invalid, overlay }) =>
    invalid &&
    overlay &&
    css`
      &:not(:disabled):not([aria-disabled]),
      &[aria-disabled='false'] {
        box-shadow: 0 0 0 4px rgba(255, 43, 0, 0.32);
      }
    `}

  ${({ overlay }) =>
    overlay &&
    css`
      border-color: var(--charcoal-text5);
      border-width: 2px;
      border-style: solid;
    `}
`

export type MultiSelectGroupProps = React.PropsWithChildren<{
  className?: string
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
    [onChange, selected]
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
      <div className={className} aria-label={label} data-testid="SelectGroup">
        {children}
      </div>
    </MultiSelectGroupContext.Provider>
  )
}
