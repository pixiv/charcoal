import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgX = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M19.703 5.358a.75.75 0 10-1.06-1.06L12 10.938 5.359 4.297a.75.75 0 10-1.06 1.061L10.94 12l-6.642 6.642a.75.75 0 001.06 1.06l6.643-6.641 6.642 6.642a.75.75 0 001.06-1.06L13.061 12l6.642-6.642z" fill="currentColor"/>
  </svg>);
export const IconX = forwardRef(SvgX);
export default IconX;
