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
      d="M20 13.25h-4.494L12.492 2h4.058A3.45 3.45 0 0120 5.45v7.8zm0 1.5h-9.25V22h5.8A3.45 3.45 0 0020 18.55v-3.8zM9.25 22v-7.25H4v3.8A3.45 3.45 0 007.45 22h1.8zM4 13.25h9.953L10.939 2H7.45A3.45 3.45 0 004 5.45v7.8z"
      fill="currentColor"
    />
  </svg>
)
export const IconMangaSolid = forwardRef(SvgManga)
export default IconMangaSolid
