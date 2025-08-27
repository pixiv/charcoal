import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgEvents = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M4 7a3 3 0 013-3h10a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7zm7 1h2a1 1 0 100-2h-2a1 1 0 100 2zm-5 2v7a1 1 0 001 1h10a1 1 0 001-1v-7H6z"
      fill="currentColor"
    />
  </svg>
)
export const IconEvents24 = forwardRef(SvgEvents)
export default IconEvents24
