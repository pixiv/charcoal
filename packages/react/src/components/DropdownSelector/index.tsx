import './index.css'

import React, { ReactNode, useState, useRef, useMemo, useCallback } from 'react'
import Icon from '../Icon'
import FieldLabel from '../FieldLabel'
import { DropdownPopover } from './DropdownPopover'
import { findPreviewRecursive } from './utils/findPreviewRecursive'
import MenuList, { MenuListChildren } from './MenuList'
import { getValuesRecursive } from './MenuList/internals/getValuesRecursive'
import { useVisuallyHidden } from '@react-aria/visually-hidden'
import { AssistiveText } from '../TextField/AssistiveText'
import { useClassNames } from '../../_lib/useClassNames'
import { useId } from '@react-aria/utils'

export type DropdownSelectorProps = {
  label: string
  value: string
  disabled?: boolean
  placeholder?: string
  showLabel?: boolean
  invalid?: boolean
  assistiveText?: string
  required?: boolean
  requiredText?: string
  subLabel?: ReactNode
  /**
   * the name of hidden `<select />`
   */
  name?: string
  children: MenuListChildren
  onChange: (value: string) => void
  className?: string
}

export default function DropdownSelector({
  onChange,
  showLabel = false,
  ...props
}: DropdownSelectorProps) {
  const triggerRef = useRef<HTMLButtonElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const preview = findPreviewRecursive(props.children, props.value)

  const isPlaceholder = useMemo(
    () => props.placeholder !== undefined && preview === undefined,
    [preview, props.placeholder]
  )

  const propsArray = getValuesRecursive(props.children)

  const { visuallyHiddenProps } = useVisuallyHidden()

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      onChange(e.target.value)
    },
    [onChange]
  )

  const labelId = useId()
  const describedbyId = useId()

  const classNames = useClassNames(
    'charcoal-dropdown-selector-root',
    props.className
  )

  return (
    <div className={classNames} aria-disabled={props.disabled}>
      <FieldLabel
        id={labelId}
        label={props.label}
        required={props.required}
        requiredText={props.requiredText}
        subLabel={props.subLabel}
        {...(!showLabel ? visuallyHiddenProps : {})}
      />
      <div {...visuallyHiddenProps} aria-hidden="true">
        <select
          name={props.name}
          value={props.value}
          onChange={handleChange}
          tabIndex={-1}
        >
          {propsArray.map((itemProps) => {
            return (
              <option
                key={itemProps.value}
                value={itemProps.value}
                disabled={itemProps.disabled}
              >
                {itemProps.value}
              </option>
            )
          })}
        </select>
      </div>
      <button
        className="charcoal-dropdown-selector-button"
        aria-labelledby={labelId}
        aria-invalid={props.invalid}
        aria-describedby={
          props.assistiveText !== undefined ? describedbyId : undefined
        }
        disabled={props.disabled}
        onClick={() => {
          if (props.disabled === true) return
          setIsOpen(true)
        }}
        ref={triggerRef}
        type="button"
        data-active={isOpen}
      >
        <span
          className="charcoal-ui-dropdown-selector-text"
          data-placeholder={isPlaceholder}
        >
          {isPlaceholder ? props.placeholder : preview}
        </span>
        <Icon className="charcoal-ui-dropdown-selector-icon" name="16/Menu" />
      </button>
      {isOpen && (
        <DropdownPopover
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          triggerRef={triggerRef}
          value={props.value}
        >
          <MenuList
            value={props.value}
            onChange={(v) => {
              onChange(v)
              setIsOpen(false)
            }}
          >
            {props.children}
          </MenuList>
        </DropdownPopover>
      )}
      {props.assistiveText !== undefined && (
        <AssistiveText data-invalid={props.invalid === true} id={describedbyId}>
          {props.assistiveText}
        </AssistiveText>
      )}
    </div>
  )
}
