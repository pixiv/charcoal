import React, { ChangeEvent, forwardRef, memo, useCallback, useContext } from 'react'
import styled, { css } from 'styled-components'
import warning from 'warning'
import { theme } from '../../styled'
import { disabledSelector, px } from '@charcoal-ui/utils'

import { MultiSelectGroupContext } from './context'

export type MultiSelectProps = React.PropsWithChildren<{
  value: string
  forceChecked?: boolean
  disabled?: boolean
  variant?: 'default' | 'overlay'
  className?: string
  onChange?: (payload: { value: string; selected: boolean }) => void
}>

const MultiSelect = forwardRef<HTMLInputElement, MultiSelectProps>(function MultiSelectInner({
  value,
  forceChecked = false,
  disabled = false,
  onChange,
  variant = 'default',
  className,
  children,
}, ref) {
  const {
    name,
    selected,
    disabled: parentDisabled,
    readonly,
    hasError,
    onChange: parentOnChange,
  } = useContext(MultiSelectGroupContext)

  warning(
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    name !== undefined,
    `"name" is not Provided for <MultiSelect>. Perhaps you forgot to wrap with <MultiSelectGroup> ?`
  )

  const isSelected = selected.includes(value) || forceChecked
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
    <MultiSelectRoot aria-disabled={isDisabled} className={className} >
      <MultiSelectInput
        {...{
          name,
          value,
          hasError,
        }}
        checked={isSelected}
        disabled={isDisabled}
        onChange={handleChange}
        overlay={variant === 'overlay'}
        aria-invalid={hasError}
        ref={ref}
      />
      <MultiSelectInputOverlay
        overlay={variant === 'overlay'}
        hasError={hasError}
        aria-hidden={true}
      >
        <pixiv-icon name="24/Check" unsafe-non-guideline-scale={16 / 24} />
      </MultiSelectInputOverlay>
      {Boolean(children) && <MultiSelectLabel>{children}</MultiSelectLabel>}
    </MultiSelectRoot>
  )
})

export default memo(MultiSelect)

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
  hasError: boolean
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

    ${({ hasError, overlay }) =>
      theme((o) => [
        o.bg.text3.hover.press,
        o.borderRadius('oval'),
        hasError && !overlay && o.outline.assertive,
        overlay && o.bg.surface4,
      ])};
  }
`

const MultiSelectInputOverlay = styled.div<{
  overlay: boolean
  hasError: boolean
}>`
  position: absolute;
  top: -2px;
  left: -2px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ hasError, overlay }) =>
    theme((o) => [
      o.width.px(24),
      o.height.px(24),
      o.borderRadius('oval'),
      o.font.text5,
      hasError && overlay && o.outline.assertive,
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
  ariaLabel: string
  selected: string[]
  onChange: (selected: string[]) => void
  disabled?: boolean
  readonly?: boolean
  hasError?: boolean
}>

export function MultiSelectGroup({
  className,
  name,
  ariaLabel,
  selected,
  onChange,
  disabled = false,
  readonly = false,
  hasError = false,
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
        hasError,
        onChange: handleChange,
      }}
    >
      <div
        className={className}
        aria-label={ariaLabel}
        data-testid="SelectGroup"
      >
        {children}
      </div>
    </MultiSelectGroupContext.Provider>
  )
}
