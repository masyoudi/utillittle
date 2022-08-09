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
export declare function isError(value: any): boolean;
export default isError;
