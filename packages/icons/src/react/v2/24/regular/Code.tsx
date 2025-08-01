import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgCode = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M14.163 2.268c.404.09.659.49.57.895l-4 18a.75.75 0 11-1.465-.326l4-18a.75.75 0 01.895-.57zM7.53 6.47a.75.75 0 010 1.06L3.06 12l4.47 4.47a.75.75 0 01-1.06 1.06l-5-5a.75.75 0 010-1.06l5-5a.75.75 0 011.06 0zm8.94 0a.75.75 0 011.06 0l5 5a.75.75 0 010 1.06l-5 5a.75.75 0 11-1.06-1.06L20.94 12l-4.47-4.47a.75.75 0 010-1.06z"
      fill="currentColor"
    />
  </svg>
)
export const IconCode = forwardRef(SvgCode)
export default IconCode
