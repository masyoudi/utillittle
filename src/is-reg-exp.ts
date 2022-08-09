import isObjectTag from "./is-object-tag";

/**
 * Checks if `value` is `RexExp`.
 * @param {*} value The value to check.
 * @returns {Boolean} Returns boolean `true` if `value` is RegExp, else `false`.
 * @example
 *
 * isRegExp(/\s/);
 * // => true
 *
 * isRegExp(null);
 * // => false
 */
export function isRegExp(value: any): boolean {
  return isObjectTag(value, "RegExp");
}

export default isRegExp;
