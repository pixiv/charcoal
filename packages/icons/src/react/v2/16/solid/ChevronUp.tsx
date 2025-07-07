import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgChevronup = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.384 11.134a1.25 1.25 0 01-1.768 0L8 6.518l-4.616 4.616a1.25 1.25 0 01-1.768-1.768l5.5-5.5a1.25 1.25 0 011.768 0l5.5 5.5a1.25 1.25 0 010 1.768z"
      fill="currentColor"
    />
  </svg>
)
export const IconChevronUpSolid16 = forwardRef(SvgChevronup)
export default IconChevronUpSolid16
