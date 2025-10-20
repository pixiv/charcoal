import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgSelectimage = (
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
      d="M3.751 7.501a.75.75 0 01-.75-.75 3.75 3.75 0 013.75-3.75.75.75 0 110 1.5 2.25 2.25 0 00-2.25 2.25.75.75 0 01-.75.75zm0 9.003a.75.75 0 00-.75.75 3.75 3.75 0 003.75 3.75.75.75 0 000-1.5 2.25 2.25 0 01-2.25-2.25.75.75 0 00-.75-.75zm17.206.75a.75.75 0 00-1.5 0 2.25 2.25 0 01-2.25 2.25.75.75 0 100 1.5 3.75 3.75 0 003.75-3.75zM20.25 7.5a.75.75 0 00.75-.75 3.75 3.75 0 00-3.75-3.75.75.75 0 000 1.5 2.25 2.25 0 012.25 2.25c0 .415.336.75.75.75zM4.5 9.491a.75.75 0 10-1.5 0v1a.75.75 0 001.5 0v-1zm15.749-.75a.75.75 0 01.75.75v1a.75.75 0 01-1.5 0v-1a.75.75 0 01.75-.75zM14.485 4.5a.75.75 0 000-1.5h-1a.75.75 0 100 1.5h1zm.75 15.753a.75.75 0 01-.75.75h-1a.75.75 0 110-1.5h1a.75.75 0 01.75.75zM4.501 13.487a.75.75 0 00-1.5 0v1a.75.75 0 001.5 0v-1zm15.706-.75a.75.75 0 01.75.75v1a.75.75 0 01-1.5 0v-1a.75.75 0 01.75-.75zM10.514 4.5a.75.75 0 000-1.5h-1a.75.75 0 000 1.5h1zm.75 15.753a.75.75 0 01-.75.75h-1a.75.75 0 010-1.5h1a.75.75 0 01.75.75zM7.75 6A1.75 1.75 0 006 7.75v7.323l2.184-2.184a2.75 2.75 0 013.889 0l4.937 4.938A1.75 1.75 0 0018 16.25v-8.5A1.75 1.75 0 0016.25 6h-8.5zm7.313 12l-4.05-4.05a1.25 1.25 0 00-1.768 0l-3.068 3.068A1.75 1.75 0 007.75 18h7.313zm.687-7.998a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
      fill="currentColor"
    />
  </svg>
)
export const IconSelectImageSolid: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgSelectimage)
export default IconSelectImageSolid
