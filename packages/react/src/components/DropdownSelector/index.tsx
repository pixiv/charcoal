import React, { ReactNode, createContext, useRef } from 'react'
import styled from 'styled-components'
import { useOverlayTriggerState } from 'react-stately'
import { disabledSelector } from '@charcoal-ui/utils'
import Icon from '../Icon'
import FieldLabel from '../FieldLabel'
import { theme } from '../../styled'
import { DropdownPopover } from './DropdownPopover'

export const DropdownSelectorContext = createContext({
  value: '',
  setValue: (_v: string) => {
    // empty
  },
})

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
  children?: ReactNode
  onChange: (value: string) => void
}

export type DropdownSelectorOption = {
  label: string
  id: string
}

const defaultRequiredText = '*必須'

export default function DropdownSelector(props: DropdownSelectorProps) {
  const triggerRef = useRef<HTMLButtonElement>(null)
  const state = useOverlayTriggerState({})

  let preview: ReactNode | undefined
  const childArray = React.Children.toArray(props.children)
  for (let i = 0; i < childArray.length; i++) {
    const child = childArray[i]
    if (React.isValidElement(child) && 'value' in child.props) {
      const find = (child.props as { value: string }).value === props.value
      if (find && 'children' in child.props) {
        preview = (child.props as { children: ReactNode }).children
        break
      }
    }
  }

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
          state.open()
        }}
        ref={triggerRef}
      >
        <DropdownButtonText>
          {props.placeholder !== undefined && preview === undefined
            ? props.placeholder
            : preview}
        </DropdownButtonText>
        <DropdownButtonIcon name="16/Menu" />
      </DropdownButton>
      {state.isOpen && (
        <DropdownPopover
          state={state}
          triggerRef={triggerRef}
          value={props.value}
        >
          <ListboxRoot>
            <DropdownSelectorContext.Provider
              value={{
                value: props.value,
                setValue: (v) => {
                  props.onChange(v)
                  state.close()
                },
              }}
            >
              {props.children}
            </DropdownSelectorContext.Provider>
          </ListboxRoot>
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

const ListboxRoot = styled.ul`
  padding-left: 0;
  margin: 0;
  box-sizing: border-box;
  list-style: none;
  overflow: auto;
  max-height: inherit;

  ${theme((o) => [
    o.bg.background1,
    o.border.default,
    o.borderRadius(8),
    o.padding.vertical(8),
  ])}
`
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
