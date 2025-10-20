import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgManga = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M20 6a3 3 0 00-3-3H7a3 3 0 00-3 3v12a3 3 0 003 3h10a3 3 0 003-3V6zm-3-1a1 1 0 011 1v5h-4V5h3zm-4 0H7a1 1 0 00-1 1v5h7V5zm-7 7v6a1 1 0 001 1h2v-7H6zm11 7h-7v-7h8v6a1 1 0 01-1 1z"
      fill="currentColor"
    />
  </svg>
)
export const IconManga24: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgManga)
export default IconManga24
