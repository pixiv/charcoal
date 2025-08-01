import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgLayer = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M11.345 3.928c.4-.254.91-.254 1.31 0L20.4 8.84a.237.237 0 010 .4l-7.744 4.911c-.4.254-.91.254-1.31 0L3.6 9.24a.237.237 0 010-.4l7.744-4.912zm2.114-1.267a2.724 2.724 0 00-2.917 0L2.797 7.572a1.737 1.737 0 000 2.934l7.745 4.911c.89.565 2.027.565 2.917 0l7.745-4.91a1.737 1.737 0 000-2.935l-7.745-4.91zM2.797 13.494l1.213-.77 1.4.889L3.6 14.76a.237.237 0 000 .4l7.745 4.91c.4.254.91.254 1.31 0l7.745-4.91a.237.237 0 000-.4l-1.81-1.149 1.4-.888 1.214.77a1.737 1.737 0 010 2.933l-7.745 4.912a2.724 2.724 0 01-2.917 0l-7.745-4.912a1.737 1.737 0 010-2.933z"
      fill="currentColor"
    />
  </svg>
)
export const IconLayer = forwardRef(SvgLayer)
export default IconLayer
