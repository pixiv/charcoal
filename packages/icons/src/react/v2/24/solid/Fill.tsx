import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M10.134 1.866a1.25 1.25 0 10-1.768 1.768l.616.616-5.995 5.995a4.25 4.25 0 000 6.01l3.758 3.758a4.25 4.25 0 006.01 0l6.172-6.172a2.25 2.25 0 000-3.182l-6.293-6.293-1-1-.884-.884-.616-.616zm.732 4.268l-.116-.116-5.995 5.995A1.75 1.75 0 004.411 14h10.821l1.75-1.75-6.116-6.116zM19.25 21.25a2 2 0 002-2c0-1.105-2-3.75-2-3.75s-2 2.645-2 3.75a2 2 0 002 2z"
      fill="currentColor"
    />
  </svg>
)
export const IconFillSolid = forwardRef(SvgFill)
export default IconFillSolid
