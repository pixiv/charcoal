import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgPose = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M8.928 6.223a3.25 3.25 0 116.144-2.12 3.25 3.25 0 01-6.144 2.12zm-3.37-1.725a.75.75 0 00-1.116 1.004l4.56 5.07v3.678h-1.98a.75.75 0 00-.69 1.045l1.812 4.237a.75.75 0 001.38-.59L8.158 15.75h5.266v5.483a.75.75 0 001.5 0V10.454l4.623-4.942a.75.75 0 10-1.096-1.024l-4.608 4.925H9.98L5.557 4.498z"
      fill="currentColor"
    />
  </svg>
)
export const IconPoseSolid = forwardRef(SvgPose)
export default IconPoseSolid
