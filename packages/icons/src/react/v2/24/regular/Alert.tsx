import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgAlert = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M12 4.505a6.246 6.246 0 016.246 6.246v5.499H5.754v-5.5A6.246 6.246 0 0112 4.506zM4.254 16.326v-5.575a7.746 7.746 0 1115.492 0v5.572A1.75 1.75 0 0120.996 18v1.241a1.75 1.75 0 01-1.75 1.75H4.766a1.75 1.75 0 01-1.75-1.75V18a1.75 1.75 0 011.238-1.674zm.75 1.424h14.242a.25.25 0 01.25.25v1.241a.25.25 0 01-.25.25H4.766a.25.25 0 01-.25-.25V18a.25.25 0 01.25-.25h.238zM11.924 7a.75.75 0 00-.75-.75 4.095 4.095 0 00-4.094 4.094.75.75 0 001.5 0 2.595 2.595 0 012.594-2.595.75.75 0 00.75-.75z"
      fill="currentColor"
    />
  </svg>
)
export const IconAlert = forwardRef(SvgAlert)
export default IconAlert
