import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgUndo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.342 5.592a1.19 1.19 0 00-1.684-1.684l-4 4a1.19 1.19 0 000 1.684l4 4a1.19 1.19 0 101.684-1.684L6.434 10H15a4 4 0 010 8h-4a1.25 1.25 0 000 2.5h4a6.5 6.5 0 000-13H6.434l1.908-1.908z"
      fill="currentColor"
    />
  </svg>
)
export const IconUndoSolid = forwardRef(SvgUndo)
export default IconUndoSolid
