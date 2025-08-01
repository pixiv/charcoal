import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgAirbrush = (
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
      d="M4.5 3a1 1 0 11-2 0 1 1 0 012 0zm1 3a1 1 0 100-2 1 1 0 000 2zm3 1a1 1 0 11-2 0 1 1 0 012 0zm2 2a1 1 0 11-2 0 1 1 0 012 0zm-4 0a1 1 0 11-2 0 1 1 0 012 0zm-1 5a1 1 0 100-2 1 1 0 000 2zm-2-6a1 1 0 100-2 1 1 0 000 2zm1 3a1 1 0 11-2 0 1 1 0 012 0zm-1 5a1 1 0 100-2 1 1 0 000 2zm5-5a1 1 0 11-2 0 1 1 0 012 0zM12 7.25c0-.966.784-1.75 1.75-1.75h3c.966 0 1.75.784 1.75 1.75v3A1.75 1.75 0 0116.75 12h-3A1.75 1.75 0 0112 10.25v-3zM13.75 7a.25.25 0 00-.25.25v3c0 .138.112.25.25.25h3a.25.25 0 00.25-.25v-3a.25.25 0 00-.25-.25h-3zm-.5 8A2.25 2.25 0 0011 17.25v4a.75.75 0 01-1.5 0v-4a3.75 3.75 0 013.75-3.75h4A3.75 3.75 0 0121 17.25v4a.75.75 0 01-1.5 0v-4A2.25 2.25 0 0017.25 15h-4z"
      fill="currentColor"
    />
  </svg>
)
export const IconAirbrush = forwardRef(SvgAirbrush)
export default IconAirbrush
