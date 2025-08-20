import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgHome = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M9 19a1 1 0 01-1 1H4a1 1 0 01-1-1v-7.586a1 1 0 01.293-.707l8-8a1 1 0 011.414 0l8 8a1 1 0 01.293.707V19a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3.5a3 3 0 10-6 0V19z"
      fill="currentColor"
    />
  </svg>
)
export const IconHome24 = forwardRef(SvgHome)
export default IconHome24
