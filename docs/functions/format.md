# Format

## `formatNumber`

Format the number to thousands separator number.

```ts
export declare function formatNumber(number: number): string
```

## `formatNumberToZhCn`

Format the numner to zh-cn unit number.

> [!WARNING]
> This formatting will only retain the maximum number of units.

```ts
export declare function formatNumberToZhCn(number: number): string
```

## `formatTime`

Format the time as `yyyy-MM-dd HH:mm:ss`, invalid date return 'Invalid Date'.

```ts
// Usage
formatTime('2024-08-13') // 2024-08-13 00:00:00

formatTime('abcd') // Invalid Date

formatTime('December 17, 1995 03:24:00', true) // 1995-12-17
```

```ts
export declare function formatTime(
  time: number | string | Date,
  dateOnly?: boolean
): string
```
