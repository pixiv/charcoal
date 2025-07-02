import { ReactNode } from 'react'
import Icon from '../Icon'

import './index.css'
import { useClassNames } from '../../_lib/useClassNames'

export type HintTextContext = 'page' | 'section'
export interface HintTextProps {
  children: ReactNode
  context: HintTextContext
  className?: string
}

export default function HintText({
  children,
  context,
  className,
}: HintTextProps) {
  const classNames = useClassNames('charcoal-hint-text', className)

  return (
    <div className={classNames} data-context={context}>
      <div className="charcoal-hint-text-icon">
        <Icon name="16/Info" />
      </div>
      <p className="charcoal-hint-text-message">{children}</p>
    </div>
  )
}
