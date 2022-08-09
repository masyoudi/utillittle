import isNull from "./is-null";
import isType from "./is-type";

/**
 * Checks if `value` is a plain object.
 * @param {*} value The value to check
 * @returns {boolean} Returns boolean `true` if `value` is a plain object, else `false`.
 * @example
 *
 * isPlainObject({ name: "foo" });
 * // => true
 *
 * isPlainObject({});
 * // => true
 *
 * isPlainObject([1, 2, 3]);
 * // => false
 *
 * isPlainObject(Object.create(null));
 * // => true
 *
 */
export function isPlainObject(value: any): boolean {
  return !isNull(value) && isType(value, "object") && !Array.isArray(value);
}

export default isPlainObject;
