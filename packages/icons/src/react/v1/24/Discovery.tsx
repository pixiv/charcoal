import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgDiscovery = (
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
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zM6 18l4-8 8-4-4 8-8 4zm6-5a1 1 0 100-2 1 1 0 000 2z"
      fill="currentColor"
    />
  </svg>
)
export const IconDiscovery24 = forwardRef(SvgDiscovery)
export default IconDiscovery24
