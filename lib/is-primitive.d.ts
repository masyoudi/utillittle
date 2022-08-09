/**
 * Checks if `value` is primitive data type (`null` | `boolean` | `number` | `string` | `symbol` | `undefined`).
 * @param {*} value The value to check.
 * @returns {boolean} Returns boolean `true` if `value` is one of (`null` | `boolean` | `number` | `string` | `symbol` | `undefined`), else `false`.
 * @example
 *
 * isPrimitive(null);
 * // => true
 *
 * isPrimitive(true);
 * // => true
 *
 * isPrimitive(1);
 * // => true
 *
 * isPrimitive("");
 * // => true
 *
 * isPrimitive(undefined);
 * // => true
 */
export declare function isPrimitive(value: any): boolean;
export default isPrimitive;
