import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgArrowUp = (
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
      d="M12 4.586l6.707 6.707a1 1 0 01-1.414 1.414L13 8.414V19a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 11-1.414-1.414L12 4.586z"
      fill="currentColor"
    />
  </svg>
)
export const IconArrowUp24 = forwardRef(SvgArrowUp)
export default IconArrowUp24
