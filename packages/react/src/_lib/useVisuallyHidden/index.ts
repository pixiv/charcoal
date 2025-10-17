import './visuallyHidden.css'

/**
 * Custom implementation of useVisuallyHidden to replace @react-aria/visually-hidden
 * Returns props to make an element visually hidden but accessible to screen readers
 */
export function useVisuallyHidden(): {
  visuallyHiddenProps: { className: string }
} {
  return {
    visuallyHiddenProps: {
      className: 'charcoal-visually-hidden',
    },
  }
}
