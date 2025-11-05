import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgApplePencil = (
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
      d="M3 6.45A3.45 3.45 0 016.45 3h11.1A3.45 3.45 0 0121 6.45v11.1A3.45 3.45 0 0117.55 21h-1.096c.03-.171.046-.347.046-.527v-7.612a3 3 0 00-.27-1.242l-1.51-3.323-.878-2.075a2 2 0 00-3.69.012l-.856 2.064-.802 1.736-.723 1.582a3 3 0 00-.271 1.247v7.611c0 .18.016.356.046.527H6.45A3.45 3.45 0 013 17.55V6.45zm10.75 6.411v8.612a.75.75 0 101.5 0v-8.612c0-.25-.053-.497-.157-.724l-.716-1.575-.802-1.763-.884-2.091a.75.75 0 00-1.384.004L10.441 8.8l-.812 1.759-.002.002-.719 1.575a1.75 1.75 0 00-.158.727v8.611a.75.75 0 101.5 0v-8.611a.25.25 0 01.023-.104l.717-1.571.002-.003.616-1.334h.797l.606 1.333.717 1.575a.251.251 0 01.022.103z"
      fill="currentColor"
    />
  </svg>
)
export const IconApplePencilSolid: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgApplePencil)
export default IconApplePencilSolid
