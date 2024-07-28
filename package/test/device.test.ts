import { describe, expect, it } from 'vitest'
import { isBrowser, isServer } from '../src'

describe('device', () => {
  it('valid data', () => {
    expect(isServer).toBeTruthy()
  })

  it('invalid data', () => {
    expect(isBrowser).toBeFalsy()
  })
})
