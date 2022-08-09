/**
 * Checks if `value` is `null`.
 * @param {*} value The value to check.
 * @returns {boolean} Returns boolean `true` if `value` is `null`.
 * @example
 *
 * isNull(null);
 * // => true
 *
 * isNull("");
 * // => false
 *
 * isNull(undefined);
 * // => false
 *
 */
export function isNull(value: any): boolean {
  return value === null;
}

export default isNull;
