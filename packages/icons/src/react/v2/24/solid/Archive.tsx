import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgArchive = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
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
      d="M3.25 4.75a1.5 1.5 0 011.5-1.5h14.5a1.5 1.5 0 011.5 1.5v2a1.5 1.5 0 01-1.5 1.5H4.75a1.5 1.5 0 01-1.5-1.5v-2zM4.75 10c-.259 0-.51-.03-.751-.087v8.333a2.75 2.75 0 002.75 2.75H17.25a2.75 2.75 0 002.75-2.75V9.913a3.26 3.26 0 01-.751.087H4.75zm4.75 2.25a.75.75 0 000 1.5h5a.75.75 0 000-1.5h-5z"
      fill="currentColor"
    />
  </svg>
)
export const IconArchiveSolid = forwardRef(SvgArchive)
export default IconArchiveSolid
