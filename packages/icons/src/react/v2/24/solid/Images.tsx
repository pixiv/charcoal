import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgImages = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M6.75 3A3.75 3.75 0 003 6.75v7.5c0 .217.018.43.054.636l3.251-3.252a2.75 2.75 0 013.89 0l5.835 5.836a.763.763 0 01.05.054A3.749 3.749 0 0018 14.25v-7.5A3.75 3.75 0 0014.25 3h-7.5zm7.685 14.995l-5.301-5.3a1.25 1.25 0 00-1.768 0L3.67 16.39A3.746 3.746 0 006.75 18h7.5c.062 0 .124-.002.185-.005zM15 8.5a2 2 0 11-4 0 2 2 0 014 0zM9.75 21a3.744 3.744 0 01-3-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75c.91.684 1.5 1.773 1.5 3v7.5A3.75 3.75 0 0117.25 21h-7.5z"
      fill="currentColor"
    />
  </svg>
)
export const IconImagesSolid: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgImages)
export default IconImagesSolid
