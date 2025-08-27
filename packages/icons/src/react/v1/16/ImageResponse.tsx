import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgImageResponse = (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.793 3.293a1 1 0 011.414 0L13.914 8l-4.707 4.707a1 1 0 01-1.414-1.414L10.086 9H6a2 2 0 00-2 2v1a1 1 0 11-2 0v-1a4 4 0 014-4h4.086L7.793 4.707a1 1 0 010-1.414z"
      fill="currentColor"
    />
  </svg>
)
export const IconImageResponse16 = forwardRef(SvgImageResponse)
export default IconImageResponse16
