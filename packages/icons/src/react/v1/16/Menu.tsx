import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgMenu = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path d="M8 9.086L4.957 6.043a1 1 0 00-1.414 1.414L8 11.914l4.457-4.457a1 1 0 00-1.414-1.414L8 9.086z" fill="currentColor"/>
  </svg>);
export const IconMenu16 = forwardRef(SvgMenu);
export default IconMenu16;
