import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgCloud = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M6.628 19.056A4.527 4.527 0 015.3 10.17 6.9 6.9 0 0117.98 8.412a5.415 5.415 0 01-1.263 10.644H6.628z"
      fill="currentColor"
    />
  </svg>
)
export const IconCloudSolid = forwardRef(SvgCloud)
export default IconCloudSolid
