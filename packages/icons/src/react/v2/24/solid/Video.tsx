import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgVideo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M6.45 4A4.45 4.45 0 002 8.45v7.1A4.45 4.45 0 006.45 20h11.1A4.45 4.45 0 0022 15.55v-7.1A4.45 4.45 0 0017.55 4H6.45zm9.172 9.228a1.418 1.418 0 000-2.456l-4.37-2.523a1.418 1.418 0 00-2.127 1.228v5.046a1.418 1.418 0 002.128 1.228l4.37-2.523z" fill="currentColor"/>
  </svg>);
export const IconVideoSolid = forwardRef(SvgVideo);
export default IconVideoSolid;
