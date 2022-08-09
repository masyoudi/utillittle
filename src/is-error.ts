import isObject from "./is-object";
import isObjectTag from "./is-object-tag";

/**
 * Checks if `value` is `Error` object.
 * @param {*} value The value to check.
 * @returns {boolean} Returns boolean `true` if `value` is an `Error` object, else `false`.
 * @example
 *
 * isError(new Error(""));
 * // => true
 *
 * isError(Error);
 * // => false
 *
 */
export function isError(value: any): boolean {
  return (
    isObject(value) && (isObjectTag(value, "Error") || value instanceof Error)
  );
}

export default isError;
