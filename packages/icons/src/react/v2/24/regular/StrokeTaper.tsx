import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgStrokeTaper = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M18.386 8.794c-1.357-1.016-2.916-1.512-4.578-.832-1.537.629-2.644 1.638-3.928 2.808-.253.231-.513.468-.785.71-1.642 1.461-3.646 1.858-5.573 1.614.582.84 1.313 1.654 2.155 2.259 1.303.935 2.82 1.345 4.515.651 1.525-.624 2.668-1.663 3.962-2.84.244-.221.493-.448.75-.677 1.616-1.438 3.492-1.948 5.458-1.686-.533-.705-1.205-1.43-1.976-2.007zm.899-1.2c1.593 1.193 2.784 2.878 3.383 4.047a.75.75 0 01-.926 1.046c-2.212-.812-4.189-.55-5.84.92-.23.205-.462.416-.695.629-1.29 1.178-2.655 2.423-4.447 3.157-2.288.936-4.348.334-5.958-.822-1.585-1.138-2.78-2.837-3.475-4.258a.75.75 0 01.906-1.043c2.079.68 4.235.539 5.865-.911.242-.215.482-.434.723-.655 1.285-1.176 2.614-2.392 4.42-3.13 2.32-.95 4.438-.183 6.044 1.02z" fill="currentColor"/>
  </svg>);
export const IconStrokeTaper = forwardRef(SvgStrokeTaper);
export default IconStrokeTaper;
