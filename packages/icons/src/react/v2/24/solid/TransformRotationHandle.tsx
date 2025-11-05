import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgTransformrotationHandle = (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.748 3.25a2.252 2.252 0 113.002 2.125V7.5h1.514V9H9.736V7.5h1.514V5.375A2.253 2.253 0 019.748 3.25zM6.95 7.5a2.253 2.253 0 10-2.947 2.623v3.797h1.5v-3.796A2.26 2.26 0 006.772 9h1.605V7.5H6.951zm12.295-1.753c-1.072 0-1.97.75-2.197 1.753h-1.426V9h1.605a2.26 2.26 0 001.268 1.123v3.797h1.5v-3.796a2.253 2.253 0 00-.75-4.377zM4.004 18.122a2.253 2.253 0 102.874 2.874h1.499v-1.5H6.878a2.258 2.258 0 00-1.374-1.374v-2.796h-1.5v2.796zm17.494 2.124c0-.98-.627-1.815-1.502-2.124v-2.796h-1.5v2.796a2.258 2.258 0 00-1.374 1.374h-1.499v1.5h1.499a2.253 2.253 0 004.376-.75zM13 14.623a1 1 0 11-2 0 1 1 0 012 0zm-3.264 6.373v-1.5h4.528v1.5H9.736z"
      fill="currentColor"
    />
  </svg>
)
export const IconTransformRotationHandleSolid: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgTransformrotationHandle)
export default IconTransformRotationHandleSolid
