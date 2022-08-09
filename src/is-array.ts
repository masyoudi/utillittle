import isType from "./is-type";

/**
 * Checks if `value` is an `Array`.
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `Array`, else false.
 * @example
 *
 * isArray([]);
 * // => true
 *
 * isArray({});
 * // => false
 */
export function isArray(value: any): boolean {
  return isType(value, "object") && Array.isArray(value);
}

export default isArray;
