import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgPerson = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path d="M16.5 7.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" fill="currentColor" />
    <path
      d="M5 18.857A6.857 6.857 0 0111.857 12h.286A6.857 6.857 0 0119 18.857c0 .631-.512 1.143-1.143 1.143H6.143A1.143 1.143 0 015 18.857z"
      fill="currentColor"
    />
  </svg>
)
export const IconPerson24: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgPerson)
export default IconPerson24
