import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgCharacterreplace = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="M6.661 5.592c0-1.155.937-2.092 2.093-2.092a.75.75 0 000-1.5A3.592 3.592 0 005.16 5.592V6H3.522c-.57 0-.86.684-.463 1.094L5.407 9.52a.645.645 0 00.928 0l2.348-2.427A.645.645 0 008.22 6H6.66v-.408zM17.335 18h-1.563a.645.645 0 01-.463-1.094l2.348-2.427a.645.645 0 01.928 0l2.348 2.427A.645.645 0 0120.47 18h-1.635v.407A3.592 3.592 0 0115.242 22a.75.75 0 010-1.5 2.092 2.092 0 002.093-2.093V18zM15.502 8.387a.75.75 0 00-1.136.979c.234.272.517.525.884.707.37.182.782.271 1.25.271.468 0 .881-.089 1.25-.271.367-.182.65-.435.884-.707a.75.75 0 10-1.136-.98 1.324 1.324 0 01-.413.342 1.282 1.282 0 01-.585.117c-.27 0-.45-.05-.585-.117a1.324 1.324 0 01-.413-.341zM15.892 6.65a1 1 0 11-2 0 1 1 0 012 0zM18.108 7.65a1 1 0 100-2 1 1 0 000 2z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.389 3.61a5.5 5.5 0 10-7.778 7.779 5.5 5.5 0 007.778-7.778zm-6.717 1.062a4 4 0 115.656 5.657 4 4 0 01-5.656-5.657z"
      fill="currentColor"
    />
    <path
      d="M5.444 17.308a.75.75 0 011.058.079c.144.168.275.273.413.341.134.067.315.116.585.116.27 0 .45-.05.585-.116.138-.068.269-.174.413-.341a.75.75 0 111.137.979 2.811 2.811 0 01-.885.707c-.369.182-.782.271-1.25.271-.468 0-.88-.089-1.25-.271a2.811 2.811 0 01-.884-.707.75.75 0 01.078-1.058zM5.892 16.65a1 1 0 100-2 1 1 0 000 2zM10.108 15.65a1 1 0 11-2 0 1 1 0 012 0z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.61 12.61a5.5 5.5 0 117.779 7.779 5.5 5.5 0 01-7.778-7.778zm6.718 1.062a4 4 0 10-5.656 5.657 4 4 0 005.656-5.657z"
      fill="currentColor"
    />
  </svg>
)
export const IconCharacterReplace: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgCharacterreplace)
export default IconCharacterReplace
