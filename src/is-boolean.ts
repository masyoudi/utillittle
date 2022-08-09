import isObject from "./is-object";
import isObjectTag from "./is-object-tag";
import isType from "./is-type";

/**
 * Checks if `value` is a `boolean` or object.
 * @param {*} value The value to check.
 * @returns {boolean} Returns boolean `true` if `value` is a boolean, else false.
 * @example
 *
 * isBoolean(true);
 * // => true
 *
 * isBoolean(false);
 * // => true
 *
 * isBoolean(null);
 * // => false
 */
export function isBoolean(value: any): boolean {
  return (
    isType(value, "boolean") ||
    (isObject(value) && isObjectTag(value, "Boolean"))
  );
}

export default isBoolean;
