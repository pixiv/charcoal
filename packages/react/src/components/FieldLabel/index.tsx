import React from 'react'
import styled from 'styled-components'
import createTheme from '@charcoal-ui/styled'

export interface FieldLabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  readonly className?: string
  readonly label: string
  readonly subLabel?: React.ReactNode
  readonly required?: boolean
  // TODO: 翻訳用のContextで注入する
  readonly requiredText?: string
}

const FieldLabel = React.forwardRef<HTMLLabelElement, FieldLabelProps>(
  function FieldLabel(
    {
      style,
      className,
      label,
      required = false,
      requiredText,
      subLabel,
      ...labelProps
    },
    ref
  ) {
    return (
      <FieldLabelWrapper style={style} className={className}>
        <Label ref={ref} {...labelProps}>
          {label}
        </Label>
        {required && <RequiredText>{requiredText}</RequiredText>}
        <SubLabelClickable>
          <span>{subLabel}</span>
        </SubLabelClickable>
      </FieldLabelWrapper>
    )
  }
)

export default FieldLabel

const theme = createTheme(styled)

const Label = styled.label`
  ${theme((o) => [o.typography(14).bold, o.font.text1])}
`

const RequiredText = styled.span`
  ${theme((o) => [o.typography(14), o.font.text3])}
`

const SubLabelClickable = styled.div`
  ${theme((o) => [
    o.typography(14),
    o.font.text3.hover.press,
    o.outline.default.focus,
  ])}
`

const FieldLabelWrapper = styled.div`
  display: inline-flex;
  align-items: center;

  > ${RequiredText} {
    ${theme((o) => o.margin.left(4))}
  }

  > ${SubLabelClickable} {
    ${theme((o) => o.margin.left('auto'))}
  }
`
