import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgText = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M4.25 5.5c0-.966.784-1.75 1.75-1.75h12c.966 0 1.75.784 1.75 1.75v1.25a.75.75 0 01-1.5 0V5.5a.25.25 0 00-.25-.25h-5.25v14H15a.75.75 0 010 1.5H9a.75.75 0 010-1.5h2.25v-14H6a.25.25 0 00-.25.25v1.25a.75.75 0 01-1.5 0V5.5z"
      fill="currentColor"
    />
  </svg>
)
export const IconText = forwardRef(SvgText)
export default IconText
