import isBoolean from "./is-boolean";
import isNull from "./is-null";
import isNumber from "./is-number";
import isString from "./is-string";
import isSymbol from "./is-symbol";
import isUndefined from "./is-undefined";

/**
 * Checks if `value` is JavaScript primitive data type
 * @param {*} value
 * @returns {Boolean}
 */
export default function isPrimitive(value: any): boolean {
  return (
    isNull(value) ||
    isBoolean(value) ||
    isNumber(value) ||
    isString(value) ||
    isSymbol(value) ||
    isUndefined(value)
  );
}
