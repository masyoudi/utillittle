/**
 * Checks if `value` is `RexExp`.
 * @param {*} value The value to check.
 * @returns {Boolean} Returns boolean `true` if `value` is RegExp, else `false`.
 * @example
 *
 * isRegExp(/\s/);
 * // => true
 *
 * isRegExp(null);
 * // => false
 */
export declare function isRegExp(value: any): boolean;
export default isRegExp;
