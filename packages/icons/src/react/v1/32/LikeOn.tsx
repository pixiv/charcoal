import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgLikeOn = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21 5.5a7 7 0 017 7c0 5.77-3.703 10.652-10.78 14.61a2.5 2.5 0 01-2.44 0C7.703 23.152 4 18.27 4 12.5a7 7 0 017-7c1.83 0 3.621.914 5 2.328C17.379 6.414 19.17 5.5 21 5.5z"
      fill="currentColor"
    />
  </svg>
)
export const IconLikeOn32: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgLikeOn)
export default IconLikeOn32
