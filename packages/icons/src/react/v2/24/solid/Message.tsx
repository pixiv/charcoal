import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgMessage = (
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
      d="M2 8.415l8.956 4.692a2.25 2.25 0 002.088 0L22 8.415A4.45 4.45 0 0017.55 4H6.45A4.45 4.45 0 002 8.415zm20 1.694l-8.26 4.326a3.75 3.75 0 01-3.48 0L2 10.11v5.441A4.45 4.45 0 006.45 20h11.1A4.45 4.45 0 0022 15.55v-5.441z"
      fill="currentColor"
    />
  </svg>
)
export const IconMessageSolid = forwardRef(SvgMessage)
export default IconMessageSolid
