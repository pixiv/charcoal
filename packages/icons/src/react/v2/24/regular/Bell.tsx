import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgBell = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 1.75a.75.75 0 01.75.75v.928c3.532.38 6.27 3.41 6.27 7.071v2.34c0 .525.12 1.041.35 1.51l.46.94c.425.865.341 1.778-.14 2.474-.473.685-1.285 1.099-2.205 1.099h-1.752a3.75 3.75 0 01-7.466 0H6.515c-.92 0-1.732-.414-2.205-1.099-.481-.696-.565-1.61-.14-2.475l.46-.94c.23-.468.35-.984.35-1.509V10.5c0-3.662 2.737-6.691 6.27-7.07V2.5a.75.75 0 01.75-.75zM9.779 18.862a2.25 2.25 0 004.442 0H9.78zM6.453 10.5c0-3.124 2.493-5.638 5.547-5.638s5.547 2.514 5.547 5.637v2.34c0 .749.17 1.487.5 2.159l.46.939c.198.403.138.746-.03.989-.175.254-.515.462-.992.462H6.515c-.477 0-.817-.208-.993-.462-.167-.243-.227-.586-.03-.989l.461-.94c.329-.67.5-1.41.5-2.158V10.5z" fill="currentColor"/>
  </svg>);
export const IconBell = forwardRef(SvgBell);
export default IconBell;
