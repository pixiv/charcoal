import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgFov = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M10.337 2.949c.81-.912 2.322-.341 2.322.882v3.93l6.974-2.615a1.328 1.328 0 011.796 1.243v11.224c0 .93-.93 1.567-1.796 1.242L12.66 16.24v3.93c0 1.226-1.513 1.791-2.322.881l-7.26-8.168a1.329 1.329 0 010-1.766l7.26-8.168zM5.894 12l13.94-5.228v10.455L5.894 12z"
      fill="currentColor"
    />
  </svg>
)
export const IconFovSolid = forwardRef(SvgFov)
export default IconFovSolid
