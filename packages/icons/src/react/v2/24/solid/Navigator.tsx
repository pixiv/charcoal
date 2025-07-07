import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgNavigator = (
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
      d="M6.45 4A4.45 4.45 0 002 8.45v7.1A4.45 4.45 0 006.45 20h11.1A4.45 4.45 0 0022 15.55v-7.1A4.45 4.45 0 0017.55 4H6.45zm-.2 3.25a1 1 0 00-1 1v4.5a1 1 0 001 1h5.5a1 1 0 001-1v-4.5a1 1 0 00-1-1h-5.5z"
      fill="currentColor"
    />
  </svg>
)
export const IconNavigatorSolid = forwardRef(SvgNavigator)
export default IconNavigatorSolid
