import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgPause = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 3.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm7.5-3.75a.75.75 0 01.75.75v6a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm5.75.75a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0V9z" fill="currentColor"/>
  </svg>);
export const IconPause = forwardRef(SvgPause);
export default IconPause;
