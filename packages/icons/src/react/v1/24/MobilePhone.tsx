import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgMobilePhone = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M16 2H8a2 2 0 00-2 2v16a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2zm-3 18a1 1 0 11-2 0 1 1 0 012 0z" fill="currentColor"/>
  </svg>);
export const IconMobilePhone24 = forwardRef(SvgMobilePhone);
export default IconMobilePhone24;
