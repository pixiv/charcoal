import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgMicrophone = (
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
      d="M7 6.538a5 5 0 1110 0v4.5a5 5 0 01-10 0v-4.5zm-2.184 5.74a.75.75 0 01.925.52 6.503 6.503 0 0012.518 0 .75.75 0 011.445.404 8.006 8.006 0 01-6.954 5.801v2.247H15a.75.75 0 110 1.5H9a.75.75 0 010-1.5h2.25v-2.247a8.006 8.006 0 01-6.954-5.8.75.75 0 01.52-.925z"
      fill="currentColor"
    />
  </svg>
)
export const IconMicrophoneSolid = forwardRef(SvgMicrophone)
export default IconMicrophoneSolid
