import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgHistory = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
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
      d="M7.255 6.787a7.375 7.375 0 11-1.87 7.262 1.125 1.125 0 00-2.162.624c1.159 4.014 4.86 6.952 9.25 6.952a9.625 9.625 0 10-6.81-16.429 33.49 33.49 0 00-1.538 1.671V5.75a1.125 1.125 0 00-2.25 0V10c0 .621.504 1.125 1.125 1.125h4.25a1.125 1.125 0 000-2.25H5.368a35.883 35.883 0 011.887-2.088zm5.62 2.713a1.125 1.125 0 00-2.25 0v4c0 .621.504 1.125 1.125 1.125h4a1.125 1.125 0 000-2.25h-2.875V9.5z"
      fill="currentColor"
    />
  </svg>
)
export const IconHistorySolid = forwardRef(SvgHistory)
export default IconHistorySolid
