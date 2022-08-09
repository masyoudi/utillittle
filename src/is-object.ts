import isNull from "./is-null";
import isType from "./is-type";

/**
 * Check if `value` is type of `Object` (e.g: arrays, functions, objects, regexes, `new Number(0)` and `new String('')`)
 * @param {*} value The value to check.
 * @returns {boolean} Returns boolean `true` if `value` is type of `Object`, else `false`.
 * @example
 *
 * isObject({});
 * // => true
 *
 * isObject(null);
 * // => false
 */
export function isObject(value: any): boolean {
  return isType(value, "object") && !isNull(value);
}

export default isObject;
