import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 3.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z" fill="currentColor"/>
  </svg>);
export const IconCircle = forwardRef(SvgCircle);
export default IconCircle;
