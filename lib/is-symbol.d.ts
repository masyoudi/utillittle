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
export declare function isSymbol(value: any): boolean;
export default isSymbol;
