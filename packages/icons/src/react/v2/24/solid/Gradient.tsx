import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgGradient = (
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
      d="M6.45 3A3.45 3.45 0 003 6.45v11.1A3.45 3.45 0 006.45 21h11.1A3.45 3.45 0 0021 17.55V6.45A3.45 3.45 0 0017.55 3H6.45zm.3 1.5H10v3H7v3h3v3H7v3h3v3H6.75a2.25 2.25 0 01-2.25-2.25V6.75A2.25 2.25 0 016.75 4.5zm6.25 12h-3v-3h3v3zm0 0h3v3h-3v-3zm0-6h3v3h-3v-3zm0-3v3h-3v-3h3zm0 0v-3h3v3h-3z"
      fill="currentColor"
    />
  </svg>
)
export const IconGradientSolid = forwardRef(SvgGradient)
export default IconGradientSolid
