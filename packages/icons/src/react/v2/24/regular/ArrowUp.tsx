import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgArrowup = (
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
      d="M18.47 12.53a.75.75 0 101.06-1.06l-7-7a.748.748 0 00-1.061 0l-7 7a.75.75 0 101.061 1.06l5.72-5.72V20a.75.75 0 001.5 0V6.81l5.72 5.72z"
      fill="currentColor"
    />
  </svg>
)
export const IconArrowUp = forwardRef(SvgArrowup)
export default IconArrowUp
