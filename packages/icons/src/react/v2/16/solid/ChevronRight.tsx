import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgChevronright = (
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
      d="M4.866 14.384a1.25 1.25 0 010-1.768L9.482 8 4.866 3.384a1.25 1.25 0 111.768-1.768l5.5 5.5a1.25 1.25 0 010 1.768l-5.5 5.5a1.25 1.25 0 01-1.768 0z"
      fill="currentColor"
    />
  </svg>
)
export const IconChevronRightSolid16 = forwardRef(SvgChevronright)
export default IconChevronRightSolid16
