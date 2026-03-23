import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgLikeOff = (
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
      d="M20 8.91A3.91 3.91 0 0016.09 5c-1.115 0-2.38.723-3.287 1.943L12 8.021l-.803-1.078C10.29 5.723 9.025 5 7.91 5A3.91 3.91 0 004 8.91c0 3.86 2.482 7.342 7.889 10.366a.229.229 0 00.222 0C17.518 16.252 20 12.77 20 8.91z"
      fill="#fff"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.087 21.021C18.792 17.831 22 13.81 22 8.91A5.91 5.91 0 0016.09 3c-1.529 0-2.976.747-4.09 1.834C10.886 3.747 9.439 3 7.91 3A5.91 5.91 0 002 8.91c0 4.9 3.208 8.92 8.913 12.111a2.227 2.227 0 002.174 0zM16.09 5A3.91 3.91 0 0120 8.91c0 3.86-2.482 7.342-7.889 10.366a.229.229 0 01-.222 0C6.482 16.252 4 12.77 4 8.91A3.91 3.91 0 017.91 5c1.115 0 2.38.723 3.287 1.943L12 8.021l.803-1.078C13.71 5.723 14.975 5 16.09 5z"
      fill="currentColor"
    />
  </svg>
)
export const IconLikeOff24: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgLikeOff)
export default IconLikeOff24
