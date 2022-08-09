/**
 * Checks if `value` is `string` or instance of `String` object.
 * @param {*} value The value to check.
 * @returns {boolean} Returns boolean `true` if type of `value` is string, else `false`.
 * @example
 *
 * isString("");
 * // => true
 *
 * isString(String(123));
 * // => true
 *
 * isString(null);
 * // => false
 *
 */
export declare function isString(value: any): boolean;
export default isString;
