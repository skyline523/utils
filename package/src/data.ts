/**
 * Checks if the date is legal date
 *
 * @category date
 */
export function isValidDate(date: any) {
  return date instanceof Date && !Number.isNaN(date.getTime())
}
