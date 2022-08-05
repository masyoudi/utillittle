import isType from "./is-type";
/**
 * Checks if `value` is `Boolean`
 * @param {*} value
 * @returns {Boolean}
 */
export function isBoolean(value) {
    return isType(value, "boolean");
}
export default isBoolean;
