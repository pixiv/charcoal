import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgBringBackward = (
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
      d="M16 19l-4 4-4-4h3v-3a1 1 0 112 0v3h3zM9 14.181l-3.939-2.408a.845.845 0 10-.882 1.442L9 16.165v-1.983zM15 16.165l4.814-2.945a.851.851 0 00-.889-1.453L15 14.17v1.996z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.522 13.693a1 1 0 01-1.044 0L4.394 9.359a1 1 0 010-1.706l7.084-4.334a1 1 0 011.044 0l7.084 4.334a1 1 0 010 1.706l-7.084 4.334zm0-8.383a1 1 0 00-1.044 0L6.26 8.506l5.218 3.196a1 1 0 001.044 0l5.218-3.196-5.218-3.196z"
      fill="currentColor"
    />
  </svg>
)
export const IconBringBackward24: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgBringBackward)
export default IconBringBackward24
