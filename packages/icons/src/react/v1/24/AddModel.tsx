import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgAddModel = (
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
    <path d="M14 4a2 2 0 11-4 0 2 2 0 014 0z" fill="currentColor" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 8a1 1 0 011-1h10a1 1 0 110 2h-2.5v8a1 1 0 11-2 0v-4h-1v4a1 1 0 11-2 0V9H7a1 1 0 01-1-1zm5.5 1v2h1V9h-1z"
      fill="currentColor"
    />
    <path
      d="M6 11a1 1 0 00-.949.684l-3 9A1 1 0 003 22h18a1 1 0 00.949-1.316l-3-9A1 1 0 0018 11h-.5a1 1 0 00-.23 1.973L19.613 20H4.387l2.343-7.027A1 1 0 006.5 11H6z"
      fill="currentColor"
    />
  </svg>
)
export const IconAddModel24 = forwardRef(SvgAddModel)
export default IconAddModel24
