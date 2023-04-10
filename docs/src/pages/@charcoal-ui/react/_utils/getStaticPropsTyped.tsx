type StaticPropsReturn<T> = {
  props: T
}
export function getStaticPropsTyped<T>(f: () => Promise<StaticPropsReturn<T>>) {
  return f
}
