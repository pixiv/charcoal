/**
 * Join some class names if propsClassName is defined.
 * This is a pure helper; the use prefix is retained for existing callers.
 */
export function useClassNames(...classNames: (string | undefined)[]) {
  return classNames.filter((v) => v).join(' ')
}
