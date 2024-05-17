import { ModalContext } from '.'
import { forwardRef, useContext } from 'react'
import { useClassNames } from '../../_lib/useClassNames'

import './ModalPlumbing.css'

export function ModalHeader() {
  const modalCtx = useContext(ModalContext)
  return (
    <div
      className="charcoal-modal-header-root"
      data-bottom-sheet={modalCtx.bottomSheet}
    >
      <div className="charcoal-modal-header-title">{modalCtx.title}</div>
    </div>
  )
}

export const ModalAlign = createDivComponent('charcoal-modal-align')

export const ModalBody = createDivComponent('charcoal-modal-body')

export const ModalButtons = createDivComponent('charcoal-modal-buttons')

function createDivComponent(mainClassName: string) {
  return forwardRef<HTMLDivElement, React.ComponentPropsWithRef<'div'>>(
    function ModalBody({ className, ...props }, ref) {
      const classNames = useClassNames(mainClassName, className)
      return <div className={classNames} ref={ref} {...props} />
    }
  )
}
