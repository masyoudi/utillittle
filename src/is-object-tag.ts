import isObject from "./is-object";
import objToString from "./obj-to-string";
import isString from "./is-string";

/**
 * Checks if `value` matched string `tag` of `"[object Type]"` (eg: `Array`, `Function`, `Error`, `Boolean`, `Number`, `String`, `Date`, `RegExp`)
 * @param {*} value The value to check.
 * @param {string} tag The `"[object Type]"` to comparison.
 * @returns {boolean} Returns boolean `true` if `value` is matched string "[object Type]"`, else `false`.
 * @example
 *
 * isObjectTag(new Date(), "Date");
 * // => true
 *
 * isObjectTag(String, "String");
 * // => false
 *
 * isObjectTag(String(), "String");
 * // => true
 */
export function isObjectTag(value: any, tag: string): boolean {
  let valid = isObject(value) && isString(tag);
  return valid ? objToString(value) === "[object " + tag + "]" : false;
}

export default isObjectTag;
