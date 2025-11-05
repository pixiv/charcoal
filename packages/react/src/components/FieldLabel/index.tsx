import * as React from 'react'
import { useClassNames } from '../../_lib/useClassNames'

import './index.css'

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
    ref,
  ) {
    const classNames = useClassNames('charcoal-field-label-root', className)
    return (
      <div style={style} className={classNames}>
        <label ref={ref} className="charcoal-field-label" {...labelProps}>
          {label}
        </label>
        {required && (
          <div className="charcoal-field-label-required-text">
            {requiredText}
          </div>
        )}
        <div className="charcoal-field-label-sub-label">
          <span>{subLabel}</span>
        </div>
      </div>
    )
  },
)

export default FieldLabel
