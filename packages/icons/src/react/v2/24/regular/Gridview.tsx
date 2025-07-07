import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgGridview = (
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
      d="M7.749 3.75a.75.75 0 10-1.5 0v2.498H3.751a.75.75 0 000 1.5H6.25v3.5H3.751a.75.75 0 000 1.5H6.25v3.5H3.751a.75.75 0 000 1.5H6.25v2.498a.75.75 0 101.5 0v-2.498h3.5v2.498a.75.75 0 101.5 0v-2.498h3.5v2.498a.75.75 0 101.5 0v-2.498h2.498a.75.75 0 100-1.5h-2.498v-3.5h2.498a.75.75 0 100-1.5h-2.498v-3.5h2.498a.75.75 0 000-1.5h-2.498V3.75a.75.75 0 00-1.5 0v2.498h-3.5V3.75a.75.75 0 00-1.5 0v2.498h-3.5V3.75zm8.5 12.498v-3.5h-3.5v3.5h3.5zm-5 0v-3.5h-3.5v3.5h3.5zm5-8.5v3.5h-3.5v-3.5h3.5zm-5 3.5v-3.5h-3.5v3.5h3.5z"
      fill="currentColor"
    />
  </svg>
)
export const IconGridview = forwardRef(SvgGridview)
export default IconGridview
