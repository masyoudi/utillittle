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
export declare function isBoolean(value: any): boolean;
export default isBoolean;
