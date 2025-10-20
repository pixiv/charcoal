import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgList = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M3.998 7c0-.552.398-1 .89-1h14.221c.491 0 .89.448.89 1s-.399 1-.89 1H4.887c-.49 0-.889-.448-.889-1zM4 12c0-.552.398-1 .889-1H19.11c.491 0 .889.448.889 1s-.398 1-.889 1H4.89C4.398 13 4 12.552 4 12zM3.998 17c0-.552.398-1 .89-1h8.888c.491 0 .889.448.889 1s-.398 1-.889 1H4.887c-.49 0-.889-.448-.889-1z"
      fill="currentColor"
    />
  </svg>
)
export const IconList24: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgList)
export default IconList24
