import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgArrowleftDown = (
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
      d="M14 3a3.75 3.75 0 00-3.75 3.75v11.69l-4.22-4.22a.75.75 0 00-1.06 1.06l5.5 5.5a.75.75 0 001.06 0l5.5-5.5a.75.75 0 10-1.06-1.06l-4.22 4.22V6.75A2.25 2.25 0 0114 4.5h2.5a.75.75 0 000-1.5H14z"
      fill="currentColor"
    />
  </svg>
)
export const IconArrowLeftDown = forwardRef(SvgArrowleftDown)
export default IconArrowLeftDown
