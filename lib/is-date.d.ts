/**
 * Checks if `value` is classified as `Date` object.
 * @param {*} value The value to check.
 * @returns {boolean} Returns boolean `true` if `value` is an `Date` object, else `false`.
 * @example
 *
 * isDate(new Date());
 * // => true
 *
 * isDate(Date);
 * // => false
 *
 */
export declare function isDate(value: any): boolean;
export default isDate;
