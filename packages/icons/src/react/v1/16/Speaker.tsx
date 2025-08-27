import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgSpeaker = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
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
      d="M7 5.875H5a1 1 0 00-1 1v2.25a1 1 0 001 1h2.063l3.086 3.037a.5.5 0 00.851-.356V3.18a.5.5 0 00-.848-.359L7 5.875z"
      fill="currentColor"
    />
  </svg>
)
export const IconSpeaker16 = forwardRef(SvgSpeaker)
export default IconSpeaker16
