import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgSquaredashresize = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
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
      d="M3.751 7.501a.75.75 0 01-.75-.75 3.75 3.75 0 013.75-3.75.75.75 0 110 1.5 2.25 2.25 0 00-2.25 2.25.75.75 0 01-.75.75zm0 9.003a.75.75 0 00-.75.75 3.75 3.75 0 003.75 3.75.75.75 0 000-1.5 2.25 2.25 0 01-2.25-2.25.75.75 0 00-.75-.75zM21 6.75a.75.75 0 01-1.5 0 2.25 2.25 0 00-2.25-2.25.75.75 0 010-1.5A3.75 3.75 0 0121 6.751zM3.75 8.741a.75.75 0 01.75.75v1a.75.75 0 01-1.5 0v-1a.75.75 0 01.75-.75zM21 9.49a.75.75 0 00-1.5 0v1a.75.75 0 001.5 0v-1zm-5.765-5.74a.75.75 0 01-.75.75h-1a.75.75 0 110-1.5h1a.75.75 0 01.75.75zM3.751 12.737a.75.75 0 01.75.75v1a.75.75 0 01-1.5 0v-1a.75.75 0 01.75-.75zm7.513-8.986a.75.75 0 01-.75.75h-1a.75.75 0 010-1.5h1a.75.75 0 01.75.75zm-.75 17.253a.75.75 0 000-1.5h-1a.75.75 0 000 1.5h1zm7.535-7.264a.75.75 0 100 1.5h1.72l-4.529 4.53v-1.721a.75.75 0 00-1.5 0v3.46c0 .415.336.75.75.75h3.461a.75.75 0 000-1.5h-1.58l4.389-4.387v1.58a.75.75 0 001.5 0V14.49a.75.75 0 00-.75-.75h-3.461z"
      fill="currentColor"
    />
  </svg>
)
export const IconSquareDashResize: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgSquaredashresize)
export default IconSquareDashResize
