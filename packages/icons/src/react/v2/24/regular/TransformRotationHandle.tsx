import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgTransformrotationHandle = (
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
      d="M12 2.498a.752.752 0 100 1.505.752.752 0 000-1.505zm-2.252.752a2.252 2.252 0 113.002 2.125V7.5h1.514V9H9.736V7.5h1.514V5.375A2.253 2.253 0 019.748 3.25zM8.377 9H6.772a2.26 2.26 0 01-1.268 1.123v3.797h-1.5v-3.796A2.253 2.253 0 116.95 7.5h1.426V9zm8.85 0h-1.604V7.5h1.426a2.253 2.253 0 112.947 2.623v3.797h-1.5v-3.796A2.26 2.26 0 0117.228 9zM5.505 15.326v2.796c.64.226 1.148.733 1.374 1.374h1.499v1.5H6.878a2.253 2.253 0 11-2.874-2.874v-2.796h1.5zm12.992 2.796v-2.796h1.5v2.796a2.253 2.253 0 11-2.874 2.874h-1.499v-1.5h1.499a2.258 2.258 0 011.374-1.374zM4.754 7.247a.752.752 0 100 1.505.752.752 0 000-1.505zM18.494 8a.752.752 0 111.504 0 .752.752 0 01-1.504 0zm0 12.247a.752.752 0 111.505 0 .752.752 0 01-1.505 0zm-13.74-.752a.752.752 0 100 1.505.752.752 0 000-1.505zm4.982 1.502v-1.5h4.528v1.5H9.736zM12 15.623a1 1 0 100-2 1 1 0 000 2z"
      fill="currentColor"
    />
  </svg>
)
export const IconTransformRotationHandle: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgTransformrotationHandle)
export default IconTransformRotationHandle
