export function isValidDate(date: any) {
  return date instanceof Date && !Number.isNaN(date.getTime())
}
