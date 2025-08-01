import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgInfocircle = (
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
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-.947 6.209a1 1 0 011-1h.011a1 1 0 110 2h-.011a1 1 0 01-1-1zm-1.271 2.545a.75.75 0 01.75-.75h1.795a.75.75 0 01.75.75V15h1.473a.75.75 0 110 1.5h-4.503a.75.75 0 110-1.5h1.53v-3.496h-1.045a.75.75 0 01-.75-.75z"
      fill="currentColor"
    />
  </svg>
)
export const IconInfoCircleSolid = forwardRef(SvgInfocircle)
export default IconInfoCircleSolid
