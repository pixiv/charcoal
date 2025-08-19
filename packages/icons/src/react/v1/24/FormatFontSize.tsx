import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgFormatFontSize = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M9 6.5c0 .83.67 1.5 1.5 1.5H14v10.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V8h3.5c.83 0 1.5-.67 1.5-1.5S21.33 5 20.5 5h-10C9.67 5 9 5.67 9 6.5z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M4.5 13H6v5.5c0 .83.67 1.5 1.5 1.5S9 19.33 9 18.5V13h1.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5h-6c-.83 0-1.5.67-1.5 1.5S3.67 13 4.5 13z" fill="currentColor"/>
  </svg>);
export const IconFormatFontSize24 = forwardRef(SvgFormatFontSize);
export default IconFormatFontSize24;
