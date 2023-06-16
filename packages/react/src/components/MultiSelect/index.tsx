import { ChangeEvent, useCallback, useContext } from 'react'
import * as React from 'react'
import styled, { css } from 'styled-components'
import warning from 'warning'
import { theme } from '../../styled'
import { disabledSelector, px } from '@charcoal-ui/utils'

import { MultiSelectGroupContext } from './context'

export type MultiSelectProps = React.PropsWithChildren<{
  value: string
  disabled?: boolean
  variant?: 'default' | 'overlay'
  onChange?: (payload: { value: string; selected: boolean }) => void
}>

export default function MultiSelect({
  value,
  disabled = false,
  onChange,
  variant = 'default',
  children,
}: MultiSelectProps) {
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
    <MultiSelectRoot aria-disabled={isDisabled}>
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

const MultiSelectRoot = styled.label`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  position: relative;
  cursor: pointer;
  ${disabledSelector} {
    cursor: default;
  }
  gap: ${({ theme }) => px(theme.spacing[4])};
  ${theme((o) => o.disabled)}
`

const MultiSelectLabel = styled.div`
  display: flex;
  align-items: center;
  ${theme((o) => [o.typography(14), o.font.text2])}
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

    &:checked {
      ${theme((o) => o.bg.brand.hover.press)}
    }

    ${({ invalid, overlay }) =>
      theme((o) => [
        o.bg.text3.hover.press,
        o.borderRadius('oval'),
        invalid && !overlay && o.outline.assertive,
        overlay && o.bg.surface4,
      ])};
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

  ${({ invalid, overlay }) =>
    theme((o) => [
      o.width.px(24),
      o.height.px(24),
      o.borderRadius('oval'),
      o.font.text5,
      invalid && overlay && o.outline.assertive,
    ])}

  ${({ overlay }) =>
    overlay &&
    css`
      border-color: ${({ theme }) => theme.color.text5};
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
