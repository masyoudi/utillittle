import isBoolean from "./is-boolean";
import isNull from "./is-null";
import isNumber from "./is-number";
import isString from "./is-string";
import isSymbol from "./is-symbol";
import isUndefined from "./is-undefined";

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
export function isPrimitive(value: any): boolean {
  return (
    isNull(value) ||
    isBoolean(value) ||
    isNumber(value) ||
    isString(value) ||
    isSymbol(value) ||
    isUndefined(value)
  );
}

export default isPrimitive;
