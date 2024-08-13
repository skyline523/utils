/**
 * 防抖：事件高频触发时使用，只会触发最后一次事件
 *
 * @param func - 要进行防抖的函数
 *
 * @param duration - 防抖时间，默认200ms
 *
 * @param immediate - 是否立即执行防抖，默认不立即执行
 *
 * @category performance
 */
export function debounce<T extends (...args: any[]) => void>(
  func: T,
  duration = 200,
  immediate = false,
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>

  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    clearTimeout(timeout)

    if (!timeout && immediate)
      func.apply(this, args)

    timeout = setTimeout(() => {
      func.apply(this, args)
    }, duration)
  }
}

/**
 * 节流：事件高频触发时使用，规定时间内只触发一次
 *
 * @param func - 要进行节流的函数
 *
 * @param duration - 节流时间，默认200ms
 *
 * @category performance
 */
export function throttle<T extends (...args: any[]) => void>(
  func: T,
  duration = 200,
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | undefined
  let previous = 0

  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    const now = Date.now()
    const remaining = duration - (now - previous)

    if (remaining <= 0 || remaining > duration) {
      clearTimeout(timeout)
      previous = now
      func.apply(this, args)
    }
    else if (!timeout) {
      timeout = setTimeout(() => {
        previous = Date.now()
        timeout = undefined
        func.apply(this, args)
      }, remaining)
    }
  }
}
