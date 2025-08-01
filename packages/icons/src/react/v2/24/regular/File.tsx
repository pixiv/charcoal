import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgFile = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M5.5 5.75A2.25 2.25 0 017.75 3.5h3.5v3.75A3.75 3.75 0 0015 11h3.5v7.25a2.25 2.25 0 01-2.25 2.25h-8.5a2.25 2.25 0 01-2.25-2.25V5.75zM18.299 9.5a2.25 2.25 0 00-.446-.65L13.24 4.17a2.25 2.25 0 00-.49-.376V7.25A2.25 2.25 0 0015 9.5h3.298zM7.75 2A3.75 3.75 0 004 5.75v12.5A3.75 3.75 0 007.75 22h8.5A3.75 3.75 0 0020 18.25v-7.82a3.75 3.75 0 00-1.079-2.632l-4.612-4.68A3.75 3.75 0 0011.64 2H7.75z"
      fill="currentColor"
    />
  </svg>
)
export const IconFile = forwardRef(SvgFile)
export default IconFile
