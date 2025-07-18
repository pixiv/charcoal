import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgPersoncircle = (
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
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3 7.5a3 3 0 11-6 0 3 3 0 016 0zm4.012 7.305A8.49 8.49 0 0112 20.5a8.49 8.49 0 01-7.012-3.695A14.435 14.435 0 0112 15c2.544 0 4.934.655 7.012 1.805z"
      fill="currentColor"
    />
  </svg>
)
export const IconPersonCircleSolid = forwardRef(SvgPersoncircle)
export default IconPersonCircleSolid
