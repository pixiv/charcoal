import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgClose = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M8.414 5.586a2 2 0 10-2.828 2.828L9.172 12l-3.586 3.586a2 2 0 102.828 2.828L12 14.828l3.586 3.586a2 2 0 102.828-2.828L14.828 12l3.586-3.586a2 2 0 10-2.828-2.828L12 9.172 8.414 5.586z"
      fill="currentColor"
    />
  </svg>
)
export const IconClose24 = forwardRef(SvgClose)
export default IconClose24
