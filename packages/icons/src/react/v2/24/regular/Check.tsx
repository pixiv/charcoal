import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgCheck = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M21.33 6.47a.75.75 0 010 1.06L10.184 18.677a1.25 1.25 0 01-1.768 0L2.97 13.23a.75.75 0 111.06-1.06l5.27 5.27L20.27 6.47a.75.75 0 011.06 0z"
      fill="currentColor"
    />
  </svg>
)
export const IconCheck = forwardRef(SvgCheck)
export default IconCheck
