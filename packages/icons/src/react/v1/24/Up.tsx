import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgUp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M16 12v7a1 1 0 01-1 1H9a1 1 0 01-1-1v-7H4.414c-.89 0-1.337-1.077-.707-1.707L12 2l8.194 8.297c.623.632.176 1.703-.712 1.703H16z" fill="currentColor"/>
  </svg>);
export const IconUp24 = forwardRef(SvgUp);
export default IconUp24;
