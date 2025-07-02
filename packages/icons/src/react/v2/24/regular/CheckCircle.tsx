import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgCheckcircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M3.5 12a8.5 8.5 0 1117 0 8.5 8.5 0 01-17 0zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.78 7.837a.75.75 0 00-1.06-1.06l-5.963 5.962-2.077-2.076a.75.75 0 10-1.06 1.06l2.606 2.607a.75.75 0 001.061 0l6.493-6.493z" fill="currentColor"/>
  </svg>);
export const IconCheckCircle = forwardRef(SvgCheckcircle);
export default IconCheckCircle;
