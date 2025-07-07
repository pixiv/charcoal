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
      d="M8.28 4.78a.75.75 0 00-1.06-1.06l-4.5 4.5a.75.75 0 000 1.06l4.5 4.5a.75.75 0 001.06-1.06L5.06 9.5H15a4.5 4.5 0 110 9h-4a.75.75 0 000 1.5h4a6 6 0 000-12H5.06l3.22-3.22z"
      fill="currentColor"
    />
  </svg>
)
export const IconUndo = forwardRef(SvgUndo)
export default IconUndo
