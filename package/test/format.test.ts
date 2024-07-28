import { describe, expect, it } from 'vitest'
import { formatNumber, formatTime } from '../src'

describe('format', () => {
  it('should be formatted to separator number', () => {
    const formatted = formatNumber(10000)
    const formatted2 = formatNumber(100)

    expect(formatted).toBe('10,000')
    expect(formatted2).toBe('100')
  })

  it('should be formatted to correct date', () => {
    const formatted = formatTime('December 17, 1995 03:24:00')
    const formattedDateOnly = formatTime('December 17, 1995 03:24:00', true)

    expect(formatted).toBe('1995-12-17 03:24:00')
    expect(formattedDateOnly).toBe('1995-12-17')
  })

  it('should be invalid date', () => {
    const formatted = formatTime('the invalid date')

    expect(formatted).toBe('Invalid Date')
  })
})
