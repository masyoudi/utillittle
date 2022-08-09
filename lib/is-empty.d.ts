/**
 * Checks if `value` is an empty object or collection
 * @param {*} value The value to check.
 * @returns {boolean} Returns boolean `true` if `value` is empty, else `false`.
 * @example
 *
 * isEmpty([""]);
 * // => false
 *
 * isEmpty([]);
 * // => true
 *
 * isEmpty({});
 * // => true
 *
 * isEmpty("");
 * // => true
 *
 * isEmpty(null);
 * // => true
 */
export declare function isEmpty(value: any): boolean;
export default isEmpty;
