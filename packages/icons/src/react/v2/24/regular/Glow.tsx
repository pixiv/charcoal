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
      d="M12.863 1.425a.863.863 0 00-1.726 0v1.247a.863.863 0 101.726 0V1.425zM2.298 5.111a.863.863 0 00-1.04 1.376l.994.752a.863.863 0 001.04-1.376l-.994-.752zm20.445 1.376a.863.863 0 00-1.041-1.376l-.995.752a.863.863 0 001.04 1.376l.995-.752zM1 11.687a.863.863 0 000 1.725h.747a.863.863 0 000-1.726H1zm21.253 0a.863.863 0 000 1.725H23a.863.863 0 000-1.726h-.747zm-18.96 8.22a.863.863 0 10-1.04-1.376l-.796.602a.863.863 0 101.04 1.376l.796-.602zm18.455-1.376a.863.863 0 00-1.04 1.376l.795.602a.863.863 0 101.04-1.376l-.795-.602zM6.793 8.595l-1.228 3.06h12.87l-1.227-3.06H6.793zm5.221 10.72l-5.818-6.16h11.613l-5.795 6.16zM5.444 7.925a1.325 1.325 0 011.23-.831h10.652c.541 0 1.028.33 1.23.831l1.411 3.517a1.9 1.9 0 01-.38 2.01l-6.607 7.024a1.325 1.325 0 01-1.929.002l-6.635-7.025a1.9 1.9 0 01-.382-2.013l1.41-3.515z"
      fill="currentColor"
    />
  </svg>
)
export const IconGlow = forwardRef(SvgGlow)
export default IconGlow
