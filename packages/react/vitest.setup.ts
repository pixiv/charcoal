import '@testing-library/jest-dom/vitest'
import { vi } from 'vitest'

vi.mock('react', async (importOriginal) => ({
  useId: vi.fn(() => 'test-id'),
  ...(await importOriginal()),
}))
