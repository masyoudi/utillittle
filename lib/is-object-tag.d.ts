/**
 * Checks if `value` matched string `tag` of `"[object Type]"` (eg: `Array`, `Function`, `Error`, `Boolean`, `Number`, `String`, `Date`, `RegExp`)
 * @param {*} value The value to check.
 * @param {string} tag The `"[object Type]"` to comparison.
 * @returns {boolean} Returns boolean `true` if `value` is matched string "[object Type]"`, else `false`.
 * @example
 *
 * isObjectTag(new Date(), "Date");
 * // => true
 *
 * isObjectTag(String, "String");
 * // => false
 *
 * isObjectTag(String(), "String");
 * // => true
 */
export declare function isObjectTag(value: any, tag: string): boolean;
export default isObjectTag;
