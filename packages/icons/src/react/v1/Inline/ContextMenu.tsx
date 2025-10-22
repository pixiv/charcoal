import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgContextMenu = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    width={10}
    height={8}
    viewBox="0 0 10 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="M5 4.586L1.957 1.543A1 1 0 00.543 2.957L5 7.414l4.457-4.457a1 1 0 00-1.414-1.414L5 4.586z"
      fill="currentColor"
    />
  </svg>
)
export const IconContextMenuInline: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgContextMenu)
export default IconContextMenuInline
