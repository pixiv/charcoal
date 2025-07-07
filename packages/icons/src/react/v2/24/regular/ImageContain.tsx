import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgImagecontain = (
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
      d="M7.75 2A3.75 3.75 0 004 5.75v12.5A3.75 3.75 0 007.75 22h8.5A3.75 3.75 0 0020 18.25V5.75A3.75 3.75 0 0016.25 2h-8.5zM5.5 5.75A2.25 2.25 0 017.75 3.5h8.5a2.25 2.25 0 012.25 2.25v12.5a2.25 2.25 0 01-2.25 2.25h-8.5a2.25 2.25 0 01-2.25-2.25V5.75zm2.5.5A1.75 1.75 0 006.25 8v8c0 .966.784 1.75 1.75 1.75h8A1.75 1.75 0 0017.75 16V8A1.75 1.75 0 0016 6.25H8zM7.75 8A.25.25 0 018 7.75h8a.25.25 0 01.25.25v8a.25.25 0 01-.057.16l-4.459-4.088a2.49 2.49 0 00-3.442.075l-.542.542V8zm0 6.81V16c0 .138.112.25.25.25h6.072l-3.351-3.072a.99.99 0 00-1.368.03L7.75 14.81zM15 10a1 1 0 11-2 0 1 1 0 012 0z"
      fill="currentColor"
    />
  </svg>
)
export const IconImageContain = forwardRef(SvgImagecontain)
export default IconImageContain
