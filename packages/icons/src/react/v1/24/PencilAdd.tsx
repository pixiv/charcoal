import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgPencilAdd = (
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
      d="M5.44 14.29l-.766 3.832A1 1 0 005.851 19.3l3.832-.766L19.76 8.456a2 2 0 000-2.828l-1.415-1.414a2 2 0 00-2.828 0l-1.414 1.414 4.242 4.243-1.414 1.414-4.242-4.243L5.44 14.29zM21 17h-2v-2a1 1 0 10-2 0v2h-2a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2z"
      fill="currentColor"
    />
  </svg>
)
export const IconPencilAdd24: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgPencilAdd)
export default IconPencilAdd24
