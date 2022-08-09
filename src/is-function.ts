import isObject from "./is-object";
import isObjectTag from "./is-object-tag";
import isType from "./is-type";

/**
 * Checks if `value` is a `function`.
 * @param {*} value The value to check.
 * @returns {boolean} Returns boolean `true` if `value` is a `function`, else `false`.
 * @example
 *
 * function foo() {}
 *
 * isFunction(foo);
 * // => true
 *
 * isFunction(foo());
 * // => false
 *
 * isFunction(Date);
 * // => true
 */
export function isFunction(value: any): boolean {
  return (
    isType(value, "function") ||
    (isObject(value) && isObjectTag(value, "Function"))
  );
}

export default isFunction;
