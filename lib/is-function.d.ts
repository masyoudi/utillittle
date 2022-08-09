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
export declare function isFunction(value: any): boolean;
export default isFunction;
