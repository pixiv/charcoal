import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgResolution = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M3 6.75A3.75 3.75 0 016.75 3h10.5A3.75 3.75 0 0121 6.75v10.5A3.75 3.75 0 0117.25 21H6.75A3.75 3.75 0 013 17.25V6.75zM6.75 4.5A2.25 2.25 0 004.5 6.75v.5H14A2.75 2.75 0 0116.75 10v9.5h.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75zm8.5 15V10c0-.69-.56-1.25-1.25-1.25H4.5v2.75h6.25c.966 0 1.75.784 1.75 1.75v6.25h2.75zM4.5 17.25V13h6.25a.25.25 0 01.25.25v6.25H6.75a2.25 2.25 0 01-2.25-2.25z" fill="currentColor"/>
  </svg>);
export const IconResolution = forwardRef(SvgResolution);
export default IconResolution;
