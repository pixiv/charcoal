import { useId as useReactId } from 'react'

/**
 * Custom useId hook that accepts an optional fallback id
 * Returns the provided id if given, otherwise generates a unique id using React's useId
 */
export function useId(id?: string): string {
  const _id = useReactId()
  return id ?? _id
}
