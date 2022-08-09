import isFunction from "./is-function";
import isNull from "./is-null";

/**
 * Checks if `value` is a buffer.
 * @param {*} value The value to check.
 * @returns {boolean} Returns boolean `true` if `value` is a buffer, else false.
 * @example
 *
 * isBuffer(10);
 * // => true
 */
export function isBuffer(value: any): boolean {
  return (
    !isNull(value) &&
    !isNull(value.constructor) &&
    isFunction(value.constructor.isBuffer) &&
    value.constructor.isBuffer(value)
  );
}

export default isBuffer;
