import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgFeed = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M3.42 23.35L8.5 21H18c2.21 0 4-1.79 4-4V7c0-2.21-1.79-4-4-4H6C3.79 3 2 4.79 2 7v15.44c0 .15.03.29.09.42.23.5.83.72 1.33.49zM8 7h5c2.21 0 4 1.79 4 4s-1.79 4-4 4h-3v2c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1zm2 5h3c.55 0 1-.45 1-1s-.45-1-1-1h-3v2z" fill="currentColor"/>
  </svg>);
export const IconFeed24 = forwardRef(SvgFeed);
export default IconFeed24;
