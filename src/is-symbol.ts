import isNull from "./is-null";
import isObjectTag from "./is-object-tag";
import isType from "./is-type";

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * isSymbol(Symbol.iterator)
 * // => true
 *
 * isSymbol("123")
 * // => false
 */
export function isSymbol(value: any): boolean {
  return (
    isType(value, "symbol") ||
    (isType(value, "object") && !isNull(value) && isObjectTag(value, "Symbol"))
  );
}

export default isSymbol;
