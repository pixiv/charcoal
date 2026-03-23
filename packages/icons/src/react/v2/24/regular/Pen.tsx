import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgPen = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M15.901 3.415a3.251 3.251 0 014.597 4.596L8.201 20.308a3.751 3.751 0 01-2.036 1.047l-1.89.314a1.75 1.75 0 01-2.015-2l.302-1.903a3.752 3.752 0 011.051-2.063L15.901 3.415zm3.537 1.06a1.75 1.75 0 00-2.475 0L4.675 16.763c-.336.336-.557.77-.632 1.238l-.302 1.903a.25.25 0 00.287.285l1.891-.314c.463-.076.89-.296 1.222-.627L19.438 6.95a1.75 1.75 0 000-2.476z" fill="currentColor"/>
  </svg>);
export const IconPen: ReturnType<typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>> = forwardRef(SvgPen);
export default IconPen;
