import { ReactNode, useState, useRef } from 'react'
import styled from 'styled-components'
import { disabledSelector } from '@charcoal-ui/utils'
import Icon from '../Icon'
import FieldLabel from '../FieldLabel'
import { theme } from '../../styled'
import { DropdownPopover } from './DropdownPopover'
import { findPreviewRecursive } from './utils/findPreviewRecursive'
import MenuList, { MenuListChildren } from './MenuList'

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
  children: MenuListChildren
  onChange: (value: string) => void
}

const defaultRequiredText = '*必須'

export default function DropdownSelector(props: DropdownSelectorProps) {
  const triggerRef = useRef<HTMLButtonElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const preview = findPreviewRecursive(props.children, props.value)

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
      <DropdownButton
        invalid={props.invalid}
        disabled={props.disabled}
        onClick={() => {
          if (props.disabled === true) return
          setIsOpen(true)
        }}
        ref={triggerRef}
        type="button"
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
    ${theme((o) => o.disabled)}
  }
`

const DropdownFieldLabel = styled(FieldLabel)`
  width: 100%;

  ${theme((o) => o.margin.bottom(8))}
`

const DropdownButton = styled.button<{ invalid?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 40px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  cursor: pointer;

  ${disabledSelector} {
    cursor: default;
  }

  ${({ invalid }) =>
    theme((o) => [
      o.padding.horizontal(8),
      o.outline.default.focus,
      o.bg.surface3,
      o.borderRadius(4),
      invalid === true && o.outline.assertive,
    ])}
`

const DropdownButtonText = styled.span`
  text-align: left;

  ${theme((o) => [o.typography(14), o.font.text2])}
`

const DropdownButtonIcon = styled(Icon)`
  ${theme((o) => [o.font.text2])}
`

const AssertiveText = styled.div<{ invalid?: boolean }>`
  ${({ invalid }) =>
    theme((o) => [
      o.typography(14),
      o.margin.top(8),
      invalid === true ? o.font.assertive : o.font.text2,
    ])}
`
