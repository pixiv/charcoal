import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgCheckcircle = (
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
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.666 7.566a.8.8 0 00-1.132-1.132l-5.927 5.928-2.041-2.041a.8.8 0 00-1.132 1.131l2.607 2.607a.8.8 0 001.131 0l6.494-6.493z"
      fill="currentColor"
    />
  </svg>
)
export const IconCheckCircleSolid = forwardRef(SvgCheckcircle)
export default IconCheckCircleSolid
