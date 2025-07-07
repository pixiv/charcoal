import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgPlay = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M3.5 12a8.5 8.5 0 1117 0 8.5 8.5 0 01-17 0zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.125 14.98l6-3.465c1.167-.673 1.167-2.357 0-3.03l-6-3.465C9.708 6.347 8.25 7.19 8.25 8.536v6.928c0 1.347 1.458 2.19 2.625 1.516zm5.25-5.197a.25.25 0 010 .434l-6 3.464a.25.25 0 01-.375-.217V8.536a.25.25 0 01.375-.217l6 3.464z"
      fill="currentColor"
    />
  </svg>
)
export const IconPlay = forwardRef(SvgPlay)
export default IconPlay
