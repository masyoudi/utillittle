/**
 * Check if `value` is type of `Object` (e.g: arrays, functions, objects, regexes, `new Number(0)` and `new String('')`)
 * @param {*} value The value to check.
 * @returns {boolean} Returns boolean `true` if `value` is type of `Object`, else `false`.
 * @example
 *
 * isObject({});
 * // => true
 *
 * isObject(null);
 * // => false
 */
export declare function isObject(value: any): boolean;
export default isObject;
