import isType from "./is-type";
/**
 * Checks if `value` is `string`
 * @param {*} value
 * @returns {Boolean}
 */
export function isString(value) {
    return isType(value, "string");
}
export default isString;
