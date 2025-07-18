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
      d="M3.766 3a.75.75 0 00-.75.75v6.8c0 .414.336.75.75.75h7.9a.75.75 0 00.75-.75v-6.8a.75.75 0 00-.75-.75h-7.9zM14.29 3a.75.75 0 00-.75.75v16.496c0 .414.336.75.75.75h5.956a.75.75 0 00.75-.75V3.75a.75.75 0 00-.75-.75H14.29zM3.016 13.246a.75.75 0 01.75-.75h7.9a.75.75 0 01.75.75v7a.75.75 0 01-.75.75h-7.9a.75.75 0 01-.75-.75v-7z"
      fill="currentColor"
    />
  </svg>
)
export const IconLayoutSolid = forwardRef(SvgLayout)
export default IconLayoutSolid
