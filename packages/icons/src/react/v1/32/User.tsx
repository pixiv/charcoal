import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgUser = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M21.39 11.357c0 2.959-2.386 5.357-5.328 5.357-2.941 0-5.326-2.398-5.326-5.357S13.12 6 16.062 6c2.942 0 5.327 2.398 5.327 5.357zm-5.328 5.357c4.315 0 7.813 3.402 7.813 7.598v.26c0 .788-.636 1.428-1.42 1.428H9.67c-.784 0-1.42-.64-1.42-1.429v-.26c0-4.195 3.498-7.597 7.813-7.597z"
      fill="currentColor"
    />
  </svg>
)
export const IconUser32: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgUser)
export default IconUser32
