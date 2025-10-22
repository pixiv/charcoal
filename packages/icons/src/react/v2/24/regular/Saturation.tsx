import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgSaturation = (
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
      d="M13.922 3.896a1.857 1.857 0 11-1.163 3.527 1.857 1.857 0 011.163-3.527zm2.606 2.814a3.356 3.356 0 10-6.374-2.102 3.356 3.356 0 006.374 2.102zm-9.35 11.877a.695.695 0 111.319.435.695.695 0 01-1.32-.435zm1.284-1.677a1.995 1.995 0 10-1.25 3.79 1.995 1.995 0 001.25-3.79zM6.702 6.684a1.423 1.423 0 10-.89 2.702 1.423 1.423 0 00.89-2.702zM3.48 7.12a2.923 2.923 0 115.551 1.83 2.923 2.923 0 01-5.551-1.83zm.468 6.967a.83.83 0 111.578.52.83.83 0 01-1.578-.52zm1.519-1.954a2.331 2.331 0 10-1.46 4.428 2.331 2.331 0 001.46-4.428zm11.877 2.946a2.313 2.313 0 101.448-4.394 2.313 2.313 0 00-1.448 4.393zm4.44-.972a3.913 3.913 0 11-7.432-2.45 3.913 3.913 0 017.432 2.45zM12 22.253a1 1 0 100-2 1 1 0 000 2z"
      fill="currentColor"
    />
  </svg>
)
export const IconSaturation: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgSaturation)
export default IconSaturation
