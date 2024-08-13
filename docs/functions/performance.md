# Performance

## `debounce`

debounce: recommended to use it when events are triggered frequently, only the last event will be triggered.

```ts
export declare function debounce<T extends (...args: any[]) => void>(
  func: T,
  duration: number = 200,
  immediate: boolean = false
): (...args: Parameters<T>) => void
```

## `throttle`

throttle: recommended to use it when events are triggered frequently and only trigger once within a specified time.

```ts
export declare function throttle<T extends (...args: any[]) => void>(
  func: T,
  duration: number = 200
): (...args: Parameters<T>) => void
```
