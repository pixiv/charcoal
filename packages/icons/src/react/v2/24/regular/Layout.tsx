import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgLayout = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M3.016 3.75a.75.75 0 01.75-.75h7.9a.75.75 0 01.75.75v6.8a.75.75 0 01-.75.75h-7.9a.75.75 0 01-.75-.75v-6.8zm1.5.75v5.3h6.4V4.5h-6.4zm9.024-.75a.75.75 0 01.75-.75h5.956a.75.75 0 01.75.75v16.496a.75.75 0 01-.75.75H14.29a.75.75 0 01-.75-.75V3.75zm1.5.75v14.996h4.456V4.5H15.04zM3.766 12.496a.75.75 0 00-.75.75v7c0 .414.336.75.75.75h7.9a.75.75 0 00.75-.75v-7a.75.75 0 00-.75-.75h-7.9zm.75 7v-5.5h6.4v5.5h-6.4z"
      fill="currentColor"
    />
  </svg>
)
export const IconLayout = forwardRef(SvgLayout)
export default IconLayout
