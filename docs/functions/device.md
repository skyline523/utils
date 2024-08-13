# Device

## `isBrowser`

Checks if the code is being executed in a browser environment.

```ts
export type IsBrowser = boolean
```

## `isServer`

Checks if the code is being executed in a server environment.

```ts
export type IsServer = boolean
```

## `mobileDevicesRegExp`

Regular expression pattern to match mobile device user agents.

```ts
export type MobileDevicesRegExp = RegExp
```

## `isMobile`

Check if the code is running on a mobile device.

```ts
export declare function isMobile(): boolean
```

## `tabletDevicesRegExp`

Regular expression pattern to match tablet device user agents.

```ts
export type TabletDevicesRegExp = RegExp
```

## `isTablet`

Check if the code is running on a tablet device. Tablet also is kind of mobile device.

```ts
export declare function isTablet(): boolean
```

## `isDesktop`

Check if the code is running on a desktop device.

```ts
export declare function isDesktop(): boolean
```

## `appleDevicesRegExp`

Regular expression pattern to match apple device user agents.

```ts
export type AppleDevicesRegExp = RegExp
```

## `isApple`

Check if the code is running on a apple device.

```ts
export declare function isApple(): boolean
```

## `isAndroid`

Check if the code is running on a android device.

```ts
export type IsAndroid = boolean
```

## `watchResize`

Monitor page size changes and execute callbacks.

```ts
export interface DeviceResizeWatcherOptions {
  immediate: boolean
}
export declare function watchResize(
  callback: () => void,
  options: DeviceResizeWatcherOptions = { immediate: true }
): void
```
