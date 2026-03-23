import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgCameraVideo = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
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
      d="M4 6a2 2 0 00-2 2v8a2 2 0 002 2h10a2 2 0 002-2V8a2 2 0 00-2-2H4zM18.293 9.707l2-2c.63-.63 1.707-.184 1.707.707v7.172c0 .89-1.077 1.337-1.707.707l-2-2a1 1 0 01-.293-.707v-3.172a1 1 0 01.293-.707z"
      fill="currentColor"
    />
  </svg>
)
export const IconCameraVideo24: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgCameraVideo)
export default IconCameraVideo24
