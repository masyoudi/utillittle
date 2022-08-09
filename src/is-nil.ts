import isNull from "./is-null";
import isUndefined from "./is-undefined";

/**
 * Checks if `value` is `null` or `undefined`.
 * @param {*} value The value to check.
 * @returns {boolean} Returns boolean `true` if `value` is `null` or `undefined`, else false.
 * @example
 *
 * isNil(null);
 * // => true
 *
 * isNil(undefined);
 * // => true
 */
export function isNil(value: any): boolean {
  return isNull(value) || isUndefined(value);
}

export default isNil;
