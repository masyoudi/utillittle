/**
 * Get type of `value`.
 * @param {*} value The value to get data type.
 * @returns {string} Returns a string indicating the type of the unevaluated operand.
 * @example
 *
 * typeOf(10);
 * // => "number"
 *
 * typeOf("foo");
 * // => "string"
 *
 * typeOf(true);
 * // => "boolean"
 *
 * typeOf(undeclaredVariable);
 * // => "undefined"
 */
export declare function typeOf(value: any): string;
export default typeOf;
