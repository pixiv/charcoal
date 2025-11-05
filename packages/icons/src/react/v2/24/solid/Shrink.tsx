import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgShrink = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M21.384 2.616a1.25 1.25 0 010 1.768l-2.98 2.98h1.73a1.25 1.25 0 110 2.5h-4.748c-.69 0-1.25-.56-1.25-1.25V3.866a1.25 1.25 0 112.5 0v1.73l2.98-2.98a1.25 1.25 0 011.768 0zM9.864 8.614c0 .69-.56 1.25-1.25 1.25H3.866a1.25 1.25 0 010-2.5h1.73l-2.98-2.98a1.25 1.25 0 111.768-1.768l2.98 2.98v-1.73a1.25 1.25 0 012.5 0v4.748zm4.272 6.772c0-.69.56-1.25 1.25-1.25h4.748a1.25 1.25 0 110 2.5h-1.73l2.98 2.98a1.25 1.25 0 01-1.768 1.768l-2.98-2.98v1.73a1.25 1.25 0 01-2.5 0v-4.748zm-4.272 0c0-.69-.56-1.25-1.25-1.25H3.866a1.25 1.25 0 100 2.5h1.73l-2.98 2.98a1.25 1.25 0 001.768 1.768l2.98-2.98v1.73a1.25 1.25 0 102.5 0v-4.748z"
      fill="currentColor"
    />
  </svg>
)
export const IconShrinkSolid: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgShrink)
export default IconShrinkSolid
