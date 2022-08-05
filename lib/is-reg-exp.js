import isObjectTag from "./is-object-tag";
/**
 * Checks if `value` is `RexExp`
 * @param {*} value
 * @returns {Boolean}
 */
export function isRegExp(value) {
    return isObjectTag(value, "RegExp");
}
export default isRegExp;
