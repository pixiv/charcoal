import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgMessage = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M28 10.798l-12 8-12-8V9a2 2 0 012-2h20a2 2 0 012 2v1.798zm0 1.902V23a2 2 0 01-2 2H6a2 2 0 01-2-2V12.7l12 8 12-8z"
      fill="currentColor"
    />
  </svg>
)
export const IconMessage32 = forwardRef(SvgMessage)
export default IconMessage32
