import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgFov = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12.612 7.828V3.831c0-1.18-1.457-1.73-2.24-.851l-7.26 8.169a1.282 1.282 0 000 1.703l7.26 8.168c.78.878 2.24.333 2.24-.85v-3.999l7.038 2.64a1.28 1.28 0 001.731-1.2V6.388a1.28 1.28 0 00-1.731-1.2l-7.038 2.64zm-1.5.563V4.406l-5.313 5.977 5.313-1.992zm0 7.217l-5.314-1.992 5.314 5.978v-3.986zM5.76 12L19.88 6.704v10.591L5.76 11.999z" fill="currentColor"/>
  </svg>);
export const IconFov: ReturnType<typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>> = forwardRef(SvgFov);
export default IconFov;
