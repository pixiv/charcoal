import { ModalContext } from '.'
import { useContext } from 'react'

import './ModalPlumbing.css'
import { createDivComponent } from '../../_lib/createDivComponent'

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
