import isNull from "./is-null";
import isUndefined from "./is-undefined";
/**
 * Checks if `value` is `null` or `undefined`
 * @param {*} value
 * @returns {Boolean}
 */
export function isNil(value) {
    return isNull(value) || isUndefined(value);
}
export default isNil;