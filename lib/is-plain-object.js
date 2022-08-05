import isNull from "./is-null";
import isType from "./is-type";
/**
 * Checks if `value` is an `object`
 * @param {*} value
 * @returns {Boolean}
 */
export function isPlainObject(value) {
    return !isNull(value) && isType(value, "object") && !Array.isArray(value);
}
export default isPlainObject;
