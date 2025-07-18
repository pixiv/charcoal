import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgApplePencil = (
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
      d="M3 6.75A3.75 3.75 0 016.75 3h10.5A3.75 3.75 0 0121 6.75v10.5A3.75 3.75 0 0117.25 21h-.796c.03-.171.046-.347.046-.527V19.5h.75a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25h.75v.973c0 .18.016.356.046.527H6.75A3.75 3.75 0 013 17.25V6.75zm10.75 6.111v8.612a.75.75 0 101.5 0v-8.612c0-.25-.053-.497-.157-.724l-.716-1.575-.802-1.763-.884-2.091a.75.75 0 00-1.384.004L10.441 8.8l-.812 1.759-.002.002-.719 1.575a1.75 1.75 0 00-.158.727v8.611a.75.75 0 101.5 0v-8.611a.25.25 0 01.023-.104l.717-1.571.002-.003.616-1.334h.797l.606 1.333.717 1.575a.251.251 0 01.022.103z"
      fill="currentColor"
    />
  </svg>
)
export const IconApplePencil = forwardRef(SvgApplePencil)
export default IconApplePencil
