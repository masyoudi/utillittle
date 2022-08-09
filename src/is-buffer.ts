import isFunction from "./is-function";
import isNull from "./is-null";

/**
 * Checks if `value` is buffer
 * @param {*} value
 * @returns {Boolean}
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
