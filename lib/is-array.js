import isType from "./is-type";
/**
 * Checks if `value` is an `Array`
 * @param {*} value
 * @returns {Boolean}
 */
export function isArray(value) {
    return isType(value, "object") && Array.isArray(value);
}
export default isArray;
