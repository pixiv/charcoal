import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgCompass = (
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
      d="M12 3.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm11.91-4.664c1.679-.474 3.228 1.075 2.754 2.755l-1.107 3.924a2.233 2.233 0 01-1.542 1.542l-3.924 1.107c-1.68.474-3.23-1.075-2.755-2.755l1.107-3.924a2.233 2.233 0 011.542-1.542l3.924-1.107zm1.31 2.347a.733.733 0 00-.903-.904l-3.924 1.108a.733.733 0 00-.506.506l-1.108 3.924a.733.733 0 00.904.904l3.924-1.108a.732.732 0 00.506-.506l1.108-3.924zM12 13a1 1 0 100-2 1 1 0 000 2z"
      fill="currentColor"
    />
  </svg>
)
export const IconCompass = forwardRef(SvgCompass)
export default IconCompass
