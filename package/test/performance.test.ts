import { describe, expect, it, vi } from 'vitest'
import { debounce, throttle } from '../src/performance'

describe('debounce', () => {
  it('should delay the execution of the function', async () => {
    const fn = vi.fn()
    const debouceFn = debounce(fn, 100)

    debouceFn()

    expect(fn).not.toBeCalled()
    await new Promise(r => setTimeout(r, 100))
    expect(fn).toBeCalled()
  })

  it('should only execute the function once within the delay period', async () => {
    const fn = vi.fn()
    const debouceFn = debounce(fn, 100)

    debouceFn()
    debouceFn()
    debouceFn()

    expect(fn).not.toBeCalled()
    await new Promise(r => setTimeout(r, 100))
    expect(fn).toBeCalledTimes(1)
  })

  it('should execute the function immediately if immediate is true', async () => {
    const fn = vi.fn()
    const debouceFn = debounce(fn, 100, true)

    debouceFn()

    expect(fn).toBeCalledTimes(1)
  })

  it('should pass args to be debounce function', async () => {
    const fn = vi.fn()
    const debouceFn = debounce(fn, 100)

    debouceFn(1, 2, 3)

    await new Promise(r => setTimeout(r, 100))
    expect(fn).toBeCalledWith(1, 2, 3)
  })
})

describe('throttle', () => {
  it('should limit the function execution to once per limit period', async () => {
    const fn = vi.fn()
    const throttleFn = throttle(fn, 100)

    throttleFn()
    throttleFn()
    throttleFn()

    expect(fn).toBeCalledTimes(1)
    await new Promise(r => setTimeout(r, 100))
    expect(fn).toBeCalledTimes(2)
  })

  it('should execute the function again after the limit period', async () => {
    const fn = vi.fn()
    const throttleFn = throttle(fn, 100)

    throttleFn()
    await new Promise(r => setTimeout(r, 100))
    throttleFn()

    expect(fn).toBeCalledTimes(2)
  })

  it('should execute the function immediately when called for the first time', async () => {
    const fn = vi.fn()
    const throttleFn = throttle(fn, 100)

    throttleFn()

    expect(fn).toBeCalledTimes(1)
  })
})
