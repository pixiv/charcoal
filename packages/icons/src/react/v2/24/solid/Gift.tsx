import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgGift = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M9.758 4.685a1.173 1.173 0 10-1.599 1.457l2.535 1.176-.936-2.633zm3.548 2.633l2.535-1.176a1.173 1.173 0 10-1.598-1.457l-.937 2.633zM12 6.513l.83-2.331a2.673 2.673 0 013.862-1.414c1.867 1.087 1.74 3.825-.22 4.734L15.4 8H19c.966 0 1.75.784 1.75 1.75v1.75A1.75 1.75 0 0119 13.25h-6.25V8h-1.5v5.25H5a1.75 1.75 0 01-1.75-1.75V9.75C3.25 8.784 4.034 8 5 8h3.6l-1.072-.498c-1.96-.909-2.087-3.647-.22-4.734a2.673 2.673 0 013.863 1.414l.83 2.33zM5 14.75h6.25v7H7A2.75 2.75 0 014.25 19v-4.337c.24.057.492.087.75.087zm7.75 0v7H17A2.75 2.75 0 0019.75 19v-4.337c-.24.057-.492.087-.75.087h-6.25z"
      fill="currentColor"
    />
  </svg>
)
export const IconGiftSolid: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgGift)
export default IconGiftSolid
