import { ReactNode, useState, useRef } from 'react'
import styled, { css } from 'styled-components'
import { disabledSelector } from '@charcoal-ui/utils'
import Icon from '../Icon'
import FieldLabel from '../FieldLabel'
import { DropdownPopover } from './DropdownPopover'
import { findPreviewRecursive } from './utils/findPreviewRecursive'
import MenuList, { MenuListChildren } from './MenuList'
import { focusVisibleFocusRingCss } from '@charcoal-ui/styled'
import { getValuesRecursive } from './MenuList/internals/getValuesRecursive'
import { useVisuallyHidden } from '@react-aria/visually-hidden'

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
}

const defaultRequiredText = '*必須'

export default function DropdownSelector(props: DropdownSelectorProps) {
  const triggerRef = useRef<HTMLButtonElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const preview = findPreviewRecursive(props.children, props.value)

  const propsArray = getValuesRecursive(props.children)

  const { visuallyHiddenProps } = useVisuallyHidden()

  return (
    <DropdownSelectorRoot aria-disabled={props.disabled}>
      {props.showLabel === true && (
        <DropdownFieldLabel
          label={props.label}
          required={props.required}
          requiredText={props.requiredText ?? defaultRequiredText}
          subLabel={props.subLabel}
        />
      )}
      <div {...visuallyHiddenProps} aria-hidden="true">
        <select name={props.name} value={props.value} tabIndex={-1}>
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
      <DropdownButton
        invalid={props.invalid}
        disabled={props.disabled}
        onClick={() => {
          if (props.disabled === true) return
          setIsOpen(true)
        }}
        ref={triggerRef}
        type="button"
        $active={isOpen}
      >
        <DropdownButtonText>
          {props.placeholder !== undefined && preview === undefined
            ? props.placeholder
            : preview}
        </DropdownButtonText>
        <DropdownButtonIcon name="16/Menu" />
      </DropdownButton>
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
              props.onChange(v)
              setIsOpen(false)
            }}
          >
            {props.children}
          </MenuList>
        </DropdownPopover>
      )}
      {props.assistiveText !== undefined && (
        <AssertiveText invalid={props.invalid}>
          {props.assistiveText}
        </AssertiveText>
      )}
    </DropdownSelectorRoot>
  )
}

const DropdownSelectorRoot = styled.div`
  display: inline-block;
  width: 100%;

  ${disabledSelector} {
    cursor: default;
    opacity: 0.32;
  }
`

const DropdownFieldLabel = styled(FieldLabel)`
  width: 100%;
  margin-bottom: 8px;
`

const DropdownButton = styled.button<{ invalid?: boolean; $active?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 40px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  cursor: pointer;
  gap: 4px;

  ${disabledSelector} {
    cursor: default;
  }

  padding-right: 8px;
  padding-left: 8px;
  background-color: var(--charcoal-surface3);
  border-radius: 4px;

  transition: 0.2s box-shadow, 0.2s background-color;

  &:not(:disabled):not([aria-disabled]),
  &[aria-disabled='false'] {
    ${focusVisibleFocusRingCss}
    ${({ $active }) =>
      $active === true
        ? css`
            background-color: var(--charcoal-surface3-press);
          `
        : css`
            &:hover {
              background-color: var(--charcoal-surface3-hover);
            }
            &:active {
              background-color: var(--charcoal-surface3-press);
            }
          `}
  }

  ${({ invalid }) =>
    invalid === true &&
    css`
      &:not(:disabled):not([aria-disabled]),
      &[aria-disabled='false'] {
        box-shadow: 0 0 0 4px rgba(255, 43, 0, 0.32);
      }
    `}
`

const DropdownButtonText = styled.span`
  text-align: left;
  font-size: 14px;
  line-height: 22px;
  display: flow-root;
  color: var(--charcoal-text2);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const DropdownButtonIcon = styled(Icon)`
  color: var(--charcoal-text2);
`

const AssertiveText = styled.div<{ invalid?: boolean }>`
  margin-top: 8px;
  font-size: 14px;
  color: var(--charcoal-text2);
  line-height: 22px;
  display: flow-root;
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

  ${({ invalid }) =>
    invalid === true &&
    css`
      color: var(--charcoal-assertive);
    `}
`
