import isObjectTag from "./is-object-tag";

/**
 * Checks if `value` is `RexExp`
 * @param {*} value
 * @returns {Boolean}
 */
export default function isRegExp(value: any): boolean {
  return isObjectTag(value, "RegExp");
}
