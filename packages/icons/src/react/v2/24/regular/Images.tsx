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
      d="M6.75 3A3.75 3.75 0 003 6.75v7.5A3.75 3.75 0 006.75 18h7.5A3.75 3.75 0 0018 14.25v-7.5A3.75 3.75 0 0014.25 3h-7.5zM4.5 6.75A2.25 2.25 0 016.75 4.5h7.5a2.25 2.25 0 012.25 2.25v7.5c0 .998-.65 1.845-1.55 2.14l-4.755-4.756a2.75 2.75 0 00-3.89 0L4.5 13.439V6.75zm.26 8.55a2.25 2.25 0 001.99 1.2h6.19l-3.806-3.806a1.25 1.25 0 00-1.768 0L4.76 15.302zM13 7.5a1 1 0 100 2 1 1 0 000-2zm-2.5 1a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zM9.75 21a3.744 3.744 0 01-3-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75c.91.684 1.5 1.773 1.5 3v7.5A3.75 3.75 0 0117.25 21h-7.5z"
      fill="currentColor"
    />
  </svg>
)
export const IconImages = forwardRef(SvgImages)
export default IconImages
