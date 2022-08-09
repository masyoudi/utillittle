declare type ListType = "undefined" | "object" | "boolean" | "number" | "bigint" | "string" | "symbol" | "function";
/**
 * Checks if `value` is one of `"undefined" | "object" | "boolean" | "number" | "bigint" | "string" | "symbol" | "function"`.
 * @param {*} value The value to check.
 * @param {string} typ One of `ListType`
 * @returns {boolean} Returns `true` if `value` is one of `"undefined" | "object" | "boolean" | "number" | "bigint" | "string" | "symbol" | "function"`, else `false`.
 * @example
 *
 * isType(undefined, "undefined");
 * // => true
 *
 * isType("undefined", "undefined");
 * // => false
 *
 * isType("undefined", "string");
 * // => true
 *
 * isType(1, "number");
 * // => true
 */
export declare function isType(value: any, typ: ListType): boolean;
export default isType;
