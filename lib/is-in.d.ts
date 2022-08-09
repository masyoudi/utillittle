/**
 * Checks if `value` is in `values` (`values` can be `Object` or `Array`)
 * @param {string} value The value to check.
 * @param {*} values The values for comparison.
 * @returns {boolean} Returns boolean `true` if `value` is in `values`, else `false`.
 * @example
 *
 * isIn("foo", ["foo", "bar", "baz"]);
 * // => true
 *
 * isIn("fooo", ["foo", "bar", "baz"]);
 * // => false
 *
 * isIn("bar", { bar: "the bar", baz: "the baz"});
 * // => true
 *
 * isIn("foo", { bar: "the bar", baz: "the baz"});
 * // => false
 */
export declare function isIn(value: string, values: any): boolean;
export default isIn;
