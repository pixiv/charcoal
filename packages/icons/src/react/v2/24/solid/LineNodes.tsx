import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgLinenodes = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M16.502 5.002a2.5 2.5 0 111.34 2.215L7.219 17.843a2.5 2.5 0 11-1.062-1.06L16.784 6.155a2.49 2.49 0 01-.282-1.153z" fill="currentColor"/>
  </svg>);
export const IconLineNodesSolid = forwardRef(SvgLinenodes);
export default IconLineNodesSolid;
