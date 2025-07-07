import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgTap1Finger = (
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
      d="M11.005 1.75a7.274 7.274 0 00-7.027 5.392.75.75 0 101.449.388 5.775 5.775 0 0111.156 0 .75.75 0 001.45-.388 7.275 7.275 0 00-7.028-5.392zm0 2.504a4.643 4.643 0 00-4.484 3.44.75.75 0 101.449.389 3.142 3.142 0 016.07 0 .75.75 0 001.45-.388 4.643 4.643 0 00-4.485-3.441zm.066 3.12c.768 0 1.39.622 1.39 1.39v1.653s.668.103 1.166.176c.456.066 1.191.454 1.909.832a343.369 343.369 0 011.515.794 3.278 3.278 0 011.751 2.913l-.006 2.092a4.65 4.65 0 01-4.65 4.65h-.765a5.414 5.414 0 01-4.074-1.848l-1.52-1.736a2.625 2.625 0 01.468-3.878l1.425-1V8.763c0-.768.623-1.39 1.39-1.39z"
      fill="currentColor"
    />
  </svg>
)
export const IconTap1FingerSolid = forwardRef(SvgTap1Finger)
export default IconTap1FingerSolid
