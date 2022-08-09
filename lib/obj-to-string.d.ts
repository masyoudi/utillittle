/**
 * Converts object to string.
 * @param {object} value The value to convert.
 * @returns {string} Returns string.
 * @example
 *
 * objToString({});
 * // => "[object Object]"
 *
 * objToString(/\s/);
 * // => "[object RegExp]"
 *
 * objToString(undefined);
 * // => "[object Undefined]"
 */
export declare function objToString(value: any): string;
export default objToString;
