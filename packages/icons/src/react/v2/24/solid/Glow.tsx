import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgGlow = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M12.863 1.425a.863.863 0 00-1.726 0v1.247a.863.863 0 101.726 0V1.425zM2.298 5.111a.863.863 0 00-1.04 1.376l.994.752a.863.863 0 001.04-1.376l-.994-.752zm20.445 1.376a.863.863 0 00-1.041-1.376l-.995.752a.863.863 0 001.04 1.376l.995-.752zM1 11.687a.863.863 0 000 1.725h.747a.863.863 0 000-1.726H1zm21.253 0a.863.863 0 000 1.725H23a.863.863 0 000-1.726h-.747zm-18.96 8.22a.863.863 0 10-1.04-1.376l-.796.602a.863.863 0 101.04 1.376l.796-.602zm18.455-1.376a.863.863 0 00-1.04 1.376l.795.602a.863.863 0 101.04-1.376l-.795-.602zM5.34 7.885a1.438 1.438 0 011.334-.903h10.652c.587 0 1.115.358 1.334.903l1.412 3.516c.018.046.035.093.05.14H3.878c.015-.047.032-.095.051-.141L5.34 7.885zm-1.217 5.382h15.756c-.062.092-.132.18-.21.263l-6.608 7.024a1.438 1.438 0 01-2.092.002l-6.635-7.025a2.012 2.012 0 01-.211-.264z"
      fill="currentColor"
    />
  </svg>
)
export const IconGlowSolid = forwardRef(SvgGlow)
export default IconGlowSolid
