import { renderHook } from '@testing-library/react'
import { useIsClient } from './useIsClient'

describe('useIsClient', () => {
  test('sets isClient to true after mount', () => {
    const { result } = renderHook(() => useIsClient())
    expect(result.current.isClient).toBe(true)
  })
})
