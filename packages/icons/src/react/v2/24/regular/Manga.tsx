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
      d="M7.75 2A3.75 3.75 0 004 5.75v12.5A3.75 3.75 0 007.75 22h8.5A3.75 3.75 0 0020 18.25V5.75A3.75 3.75 0 0016.25 2h-8.5zM5.5 5.75A2.25 2.25 0 017.75 3.5h3.188l2.613 9.75H5.5v-7.5zm9.604 7.5H18.5v-7.5a2.25 2.25 0 00-2.25-2.25h-3.759l2.613 9.75zM5.5 14.75v3.5a2.25 2.25 0 002.25 2.25h1.5v-5.75H5.5zm10.75 5.75h-5.5v-5.75h7.75v3.5a2.25 2.25 0 01-2.25 2.25z"
      fill="currentColor"
    />
  </svg>
)
export const IconManga: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgManga)
export default IconManga
