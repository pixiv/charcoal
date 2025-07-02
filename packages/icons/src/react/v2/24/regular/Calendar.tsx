import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgCalendar = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M8 1.05a.75.75 0 01.75.75v1.45h6.5V1.8a.75.75 0 011.5 0v1.45h.5A3.75 3.75 0 0121 7v10.25A3.75 3.75 0 0117.25 21H6.75A3.75 3.75 0 013 17.25V7a3.75 3.75 0 013.75-3.75h.5V1.8A.75.75 0 018 1.05zm7.25 3.7V5.8a.75.75 0 001.5 0V4.75h.5A2.25 2.25 0 0119.5 7v1.953h-15V7a2.25 2.25 0 012.25-2.25h.5V5.8a.75.75 0 001.5 0V4.75h6.5zM4.5 10.453h15v6.797a2.25 2.25 0 01-2.25 2.25H6.75a2.25 2.25 0 01-2.25-2.25v-6.797z" fill="currentColor"/>
  </svg>);
export const IconCalendar = forwardRef(SvgCalendar);
export default IconCalendar;
