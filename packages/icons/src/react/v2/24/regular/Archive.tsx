import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgArchive = (
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
      d="M4.75 3A1.75 1.75 0 003 4.75V7c0 .698.408 1.3.999 1.58v8.666a3.75 3.75 0 003.75 3.75h8.502a3.75 3.75 0 003.75-3.75V8.581A1.75 1.75 0 0021 7V4.75A1.75 1.75 0 0019.25 3H4.75zm13.751 5.75H5.5v8.496a2.25 2.25 0 002.25 2.25h8.502a2.25 2.25 0 002.25-2.25V8.75zm.749-1.5A.25.25 0 0019.5 7V4.75a.25.25 0 00-.25-.25H4.75a.25.25 0 00-.25.25V7c0 .138.112.25.25.25h14.5zM8.75 13a.75.75 0 01.75-.75h5a.75.75 0 010 1.5h-5a.75.75 0 01-.75-.75z"
      fill="currentColor"
    />
  </svg>
)
export const IconArchive: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgArchive)
export default IconArchive
