import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgInfo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 8a8 8 0 1016 0A8 8 0 000 8zm8 6A6 6 0 108 2a6 6 0 000 12zm1.25-9a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM7 11.25v-3.5a1 1 0 012 0v3.5a1 1 0 11-2 0z"
      fill="currentColor"
    />
  </svg>
)
export const IconInfo16 = forwardRef(SvgInfo)
export default IconInfo16
