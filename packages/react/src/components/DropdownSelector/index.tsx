import React, { Key, useMemo, useRef } from 'react'
import styled from 'styled-components'
import { Item, useSelectState } from 'react-stately'
import { disabledSelector } from '@charcoal-ui/utils'
import { useVisuallyHidden } from '@react-aria/visually-hidden'
import { useSelect, HiddenSelect } from '@react-aria/select'
import { useButton } from '@react-aria/button'
import { SelectProps } from '@react-types/select'
import Listbox, { ListboxProps } from './Listbox'
import Popover from './Popover'
import Icon from '../Icon'
import FieldLabel from '../FieldLabel'
import { theme } from '../../styled'

import type { CollectionBase } from '@react-types/shared'
import type { ReactNode } from 'react'

type LabelProps = {
  readonly showLabel?: boolean
  readonly label: string
  readonly subLabel?: ReactNode
  readonly requiredText?: string
}

type Empty = Record<string, unknown>
export type DropdownSelectorProps<T extends Empty = Empty> = LabelProps &
  Readonly<CollectionBase<T>> & {
    readonly id?: string
    readonly name?: string
    readonly autoComplete?: string
    readonly placeholder?: string
    readonly className?: string
    readonly disabled?: boolean
    readonly required?: boolean
    readonly invalid?: boolean
    readonly assertiveText?: string
    readonly value?: Key
    readonly defaultValue?: Key
    readonly open?: boolean
    readonly onOpenChange?: (isOpen?: boolean) => void
    readonly onChange?: (key: Key) => void
    readonly mode?: ListboxProps<T>['mode']
  }

const DropdownSelector = <T extends Record<string, unknown>>({
  open,
  className,
  label = '',
  requiredText = '',
  subLabel,
  assertiveText,
  autoComplete,
  invalid = false,
  disabled = false,
  required = false,
  showLabel = false,
  mode = 'default',
  ...props
}: DropdownSelectorProps<T>) => {
  const { visuallyHiddenProps } = useVisuallyHidden()
  const triggerRef = useRef<HTMLButtonElement>(null)
  const selectProps = useMemo<SelectProps<T>>(
    () => ({
      ...props,
      label,
      isOpen: open,
      isDisabled: disabled,
      isRequired: required,
      errorMessage: invalid && assertiveText,
      validationState: invalid ? 'invalid' : 'valid',
      onSelectionChange: props.onChange,
      selectedKey: props.value,
      defaultSelectedKey: props.defaultValue,
    }),
    [assertiveText, disabled, invalid, label, open, props, required]
  )
  const state = useSelectState<T>(selectProps)

  const {
    labelProps,
    triggerProps,
    valueProps,
    menuProps,
    errorMessageProps,
    descriptionProps,
  } = useSelect<T>(selectProps, state, triggerRef)

  const { buttonProps } = useButton(triggerProps, triggerRef)

  const hasAssertiveText =
    assertiveText !== undefined && assertiveText.length > 0

  return (
    <DropdownSelectorRoot aria-disabled={disabled} className={className}>
      <DropdownFieldLabel
        label={label}
        required={required}
        requiredText={requiredText}
        subLabel={subLabel}
        {...labelProps}
        {...(!showLabel ? visuallyHiddenProps : {})}
      />
      <HiddenSelect
        state={state}
        triggerRef={triggerRef}
        label={label}
        name={props.name}
        isDisabled={disabled}
        autoComplete={autoComplete}
      />
      <DropdownButtonWrapper>
        <DropdownButton {...buttonProps} ref={triggerRef} invalid={invalid}>
          <DropdownButtonText {...valueProps}>
            {/*
             * react-stately の useSelectState から取得される selectedItem の型が常に
             * Node<T> であるが runtime では null が帰ってくることがある
             */}
            {/* eslint-disable-next-line @typescript-eslint/strict-boolean-expressions,@typescript-eslint/no-unnecessary-condition*/}
            {state.selectedItem
              ? state.selectedItem.rendered
              : props.placeholder}
          </DropdownButtonText>

          <DropdownButtonIcon name="16/Menu" />
        </DropdownButton>
        {state.isOpen && (
          <DropdownPopover open={state.isOpen} onClose={() => state.close()}>
            <Listbox {...menuProps} state={state} mode={mode} />
          </DropdownPopover>
        )}
      </DropdownButtonWrapper>

      {hasAssertiveText && (
        <AssertiveText
          invalid={invalid}
          {...(invalid ? errorMessageProps : descriptionProps)}
        >
          {assertiveText}
        </AssertiveText>
      )}
    </DropdownSelectorRoot>
  )
}

export default DropdownSelector
export const DropdownSelectorItem = Item

const DropdownSelectorRoot = styled.div`
  position: relative;
  display: inline-block;

  ${disabledSelector} {
    cursor: default;
    ${theme((o) => o.disabled)}
  }
`

const DropdownFieldLabel = styled(FieldLabel)`
  width: 100%;

  ${theme((o) => o.margin.bottom(8))}
`

const DropdownButtonWrapper = styled.div`
  position: relative;
`

const DropdownButton = styled.button<{ invalid: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 40px;
  width: 288px;
  box-sizing: border-box;
  cursor: pointer;

  ${disabledSelector} {
    cursor: default;
  }

  ${({ invalid }) =>
    theme((o) => [
      o.border.default,
      o.padding.horizontal(8),
      o.outline.default.focus,
      o.bg.surface3,
      o.borderRadius(4),
      invalid && o.outline.assertive,
    ])}
`

const DropdownButtonText = styled.span`
  text-align: left;

  ${theme((o) => [o.typography(14), o.font.text2])}
`

const DropdownButtonIcon = styled(Icon)`
  ${theme((o) => [o.font.text2])}
`

const AssertiveText = styled.div<{ invalid: boolean }>`
  ${({ invalid }) =>
    theme((o) => [
      o.typography(14),
      o.margin.top(8),
      invalid ? o.font.assertive : o.font.text2,
    ])}
`

const DropdownPopover = styled(Popover)`
  position: absolute;
  width: 100%;

  top: 100%;
  margin-top: 2px;
`
