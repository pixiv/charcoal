import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgArrowleftDown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M14 2.5a4.25 4.25 0 00-4.25 4.25v10.232l-2.866-2.866a1.25 1.25 0 00-1.768 1.768l5 5a1.25 1.25 0 001.768 0l5-5a1.25 1.25 0 00-1.768-1.768l-2.866 2.866V6.75c0-.966.784-1.75 1.75-1.75h2.5a1.25 1.25 0 100-2.5H14z" fill="currentColor"/>
  </svg>);
export const IconArrowLeftDownSolid = forwardRef(SvgArrowleftDown);
export default IconArrowLeftDownSolid;
