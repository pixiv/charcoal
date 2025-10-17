import '@testing-library/jest-dom/vitest'
import { vi } from 'vitest'

vi.mock('./_lib/useId', () => ({
  useId: vi.fn(() => 'test-id'),
}))
