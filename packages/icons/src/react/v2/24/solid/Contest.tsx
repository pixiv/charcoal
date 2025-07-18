import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgContest = (
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
      d="M3.75 2a.75.75 0 00-.632 1.154l3.04 4.75a8.962 8.962 0 015.584-2.15L10.009 2.9v-.002a2.207 2.207 0 00-.465-.55c-.193-.161-.5-.348-.89-.348H3.75zm17.132 1.154l-3.04 4.75a8.962 8.962 0 00-5.573-2.15l1.756-2.858c.108-.18.263-.381.463-.548.193-.161.5-.348.89-.348h4.872a.75.75 0 01.632 1.154zM12 7.25a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 5.5a2 2 0 100 4 2 2 0 000-4zm-3.5 2a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z"
      fill="currentColor"
    />
  </svg>
)
export const IconContestSolid = forwardRef(SvgContest)
export default IconContestSolid
