import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgAnnounce = (
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
      d="M15.316 2.9L8.887 5.632l-3.43.355A2.75 2.75 0 002.992 8.72v3.682c0 .808.35 1.542.914 2.048l2.366 5.572A2.75 2.75 0 009.85 21.49l.057-.024a2.75 2.75 0 001.479-3.63l-.692-1.607 4.643 1.9a1.75 1.75 0 002.413-1.62v-1.835a3.751 3.751 0 000-7.35V4.511a1.75 1.75 0 00-2.434-1.61zM19.25 11c0 .98-.626 1.813-1.5 2.122V8.878A2.25 2.25 0 0119.25 11z"
      fill="currentColor"
    />
  </svg>
)
export const IconAnnounceSolid = forwardRef(SvgAnnounce)
export default IconAnnounceSolid
