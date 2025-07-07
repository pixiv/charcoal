import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgChevrondown = (
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
      d="M4.47 8.47a.75.75 0 011.06 0L12 14.94l6.47-6.47a.75.75 0 111.06 1.06l-7 7a.75.75 0 01-1.06 0l-7-7a.75.75 0 010-1.06z"
      fill="currentColor"
    />
  </svg>
)
export const IconChevronDown = forwardRef(SvgChevrondown)
export default IconChevronDown
