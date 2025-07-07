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
      d="M10.346 5.734a1.75 1.75 0 113.308-1.142 1.75 1.75 0 01-3.308 1.142zm.594-3.643a3.25 3.25 0 102.12 6.144 3.25 3.25 0 00-2.12-6.144zM4.498 4.442a.75.75 0 011.06.057l4.42 4.914H13.844l4.608-4.925a.75.75 0 011.096 1.024l-4.623 4.942v10.779a.75.75 0 01-1.5 0V15.75H8.159l1.364 3.192a.75.75 0 11-1.38.59l-1.81-4.237a.75.75 0 01.69-1.045h1.98v-3.678l-4.56-5.07a.75.75 0 01.055-1.06zM12 10.913h1.426v3.337H10.503v-3.337h1.496z"
      fill="currentColor"
    />
  </svg>
)
export const IconPose = forwardRef(SvgPose)
export default IconPose
